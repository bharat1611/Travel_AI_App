#from flask import Flask, request, jsonify
#from flask_cors import CORS
#app = Flask(__name__)
#CORS(app)
#LLM_MISTRAL_API_URL = 'http://localhost:11434/api/generate'
#@app.route('/')
#def index():
#    return app.send_static_file('index.html')

#@app.route('/', methods=['POST'])
#def process_input():
#    input = request.json.get('user_input')
#    response_from_model = func(input)
#    return jsonify(response_from_model)

from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import numpy as np
import ast
import requests
import nltk
from nltk.stem import WordNetLemmatizer, PorterStemmer
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords, wordnet

nltk.download('punkt')
nltk.download('wordnet')
nltk.download('omw-1.4')

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

LLM_MISTRAL_API_URL = 'http://localhost:11434/api/generate'


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/recommend', methods=['POST'])
def recommend():
    user_input = request.json.get('user_input')
    response_from_model = func(user_input)
    return jsonify({'recommendation': response_from_model})


@app.route('/generate', methods=['POST'])
def generate():
    prompt = request.json.get('user_input')
    if prompt:
        response = generate_response(prompt)
        return jsonify({'llm_response': response})
    else:
        return jsonify({'error': 'No prompt provided'}), 400


def func(user_input):
    df = pd.read_csv("OyoUKFinalwithCity.csv")
    df['tags'] = df['Title'] + ' ' + df['Price'] + ' ' + df['Dicount'] + ' ' + df['City']

    purchase_history = [
        ("OYO Flagship Hotel Queens Pearl Inn", "Dehradun"),
        ("OYO Hotel Palazzo", "Mussoorie"),
        ("OYO Flagship Hotel Queens Pearl Inn", "Dehradun"),
        ("OYO Home Naini Homes", "Nanital"),
        ("OYO Flagship Hotel Kashi", "Haridwar"),
        ("OYO Flagship Hotel Kashi", "Haridwar"),
        ("OYO Ganga View (Harry Stay)", "Rishikesh"),
        ("Collection O Garden Reach", "Kempty Falls"),
        ("OYO Home Naini Homes", "Nanital"),
    ]
    purchase_keywords = [item.lower() for item, _ in purchase_history]

    def matches_keywords(title):
        lower_title = title.lower()
        return any(keyword in lower_title for keyword in purchase_keywords)

    filtered_products = df[df['Title'].apply(matches_keywords)]

    lemmatizer = WordNetLemmatizer()
    stemmer = PorterStemmer()

    def preprocess(text):
        text = str(text)
        tokens = word_tokenize(text.lower())
        lemmatized_tokens = [lemmatizer.lemmatize(token) for token in tokens]
        stemmed_tokens = [stemmer.stem(token) for token in lemmatized_tokens]
        return ' '.join(stemmed_tokens)

    def func2(user_input):
        output = ""
        df['new_tags'] = df['tags'].apply(preprocess)
        preprocessed_input = preprocess(user_input)
        keywords = preprocessed_input.split()
        df['Relevance'] = df['new_tags'].apply(lambda text: sum(keyword in text for keyword in keywords))
        filtered = df[df['Relevance'] > 0]

        sorted_recommendations = filtered.sort_values(by='Relevance', ascending=False)
        top_5_recommendations = sorted_recommendations.head(5)
        if not top_5_recommendations.empty:
            output += "Top 5 recommendations are\n"
            for index, row in top_5_recommendations.iterrows():
                output += f"Title: {row['tags']}\n"
                output += f"Link: {row['single-href']}\n\n"
        else:
            output += "\nNo matching listings found.\n"

        output += "\nBased on your past purchases!!\n"
        c = 1
        for i, row in filtered_products.iterrows():
            if c <= 5:
                output += f"\nTitle: {row['Title']}\n"
                output += f"Link: {row['single-href']}\n"
                c += 1
            else:
                break
        return output

    if "day out" not in user_input:
        return func2(user_input)
    else:
        return ""


def generate_response(prompt):
    false = False
    payload = {
        "model": "mistral",
        "prompt": prompt,
        "stream": false
    }
    response = requests.post(LLM_MISTRAL_API_URL, json=payload)
    if response.status_code == 200:
        try:
            response_json = response.json()
            print("Full response:", response_json)  # Debugging line to print the entire response
            if 'response' in response_json:
                return response_json['response']  # Return only the 'response' field
            else:
                return "Error: Response does not contain 'response'"
        except json.JSONDecodeError as e:
            return f"Error: Failed to parse JSON response - {e}"
    else:
        return f"Error: Unable to generate response, status code {response.status_code}"



if __name__ == '__main__':
    app.run(port=5000, debug=True)
