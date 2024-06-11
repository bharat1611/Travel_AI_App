import React, { Component } from 'react';
import Header from './Header';
import Footer from './footer';
import './Styles/sr.css';

class SearchResults extends Component {
  state = {
    recommendation: null,
    llm_response: null,
    recommendationInput: '',
    llmInput: ''
  };

  constructor(props) {
    super(props);
    this.fetchRecommendation = this.fetchRecommendation.bind(this);
    this.fetchLLMResponse = this.fetchLLMResponse.bind(this);
  }

  async fetchRecommendation(user_input) {
    try {
      const response = await fetch('http://localhost:5000/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_input })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      this.setState({ recommendation: jsonData.recommendation });
    } catch (err) {
      console.log('Error:', err);
    }
  }

  async fetchLLMResponse(user_input) {
    try {
      console.log('Sending LLM Request:', { user_input });
      const response = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_input })
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
      }
      const jsonData = await response.json();
      this.setState({ llm_response: jsonData.llm_response });
    } catch (err) {
      console.log('Error:', err);
    }
  }

  handleRecommendationChange = (e) => {
    this.setState({ recommendationInput: e.target.value });
  }

  handleLLMChange = (e) => {
    this.setState({ llmInput: e.target.value });
  }

  handleRecommendationSubmit = async (e) => {
    e.preventDefault();
    await this.fetchRecommendation(this.state.recommendationInput);
  }

  handleLLMSubmit = async (e) => {
    e.preventDefault();
    await this.fetchLLMResponse(this.state.llmInput);
  }

  render() {
    const { recommendation, llm_response } = this.state;
    return (
      <div>
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          navigationData={HeaderNavData}
        />
        <div className="container">
          <div className="form-container">
            <h2>Find Your Perfect Destination</h2>
            <form onSubmit={this.handleRecommendationSubmit} className="form">
              <input id="input-search"
                type="text" 
                placeholder="Enter your desired destination!" 
                value={this.state.recommendationInput} 
                onChange={this.handleRecommendationChange} 
                
              />
              <button type="submit" className="button">Submit</button>
            </form>
            {/*<div className="output">
              {recommendation ? <p>Recommendation: {recommendation}</p> : <p>Loading recommendations...</p>}
            </div>*/}
          </div>
          <div className="form-container">
            <h2>Chat with Our Assistant</h2>
            <form onSubmit={this.handleLLMSubmit} className="form">
              <input id="input-search"
                type="text" 
                placeholder="Talk to our Chatbot!" 
                value={this.state.llmInput} 
                onChange={this.handleLLMChange} 
              />
              <button type="submit" className="button">Submit</button>
            </form>
            {/*<div className="output">
              {llm_response ? <p>Chatbot: {llm_response}</p> : <p>Loading Chatbot response...</p>}
            </div>*/}
          </div>
          <div className="results-container">
            <div className="result-card">
              <h3>Recommendation Result</h3>
              <div className="result-output">
                {recommendation ? <p>{recommendation}</p> : <p>No recommendation yet.</p>}
              </div>
            </div>
            <div className="result-card">
              <h3>Chatbot Result</h3>
              <div className="result-output">
                {llm_response ? <p>{llm_response}</p> : <p>No response yet.</p>}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }  
}

const backgroundImagesData = [
  {
    id: 2,
    url: 'https://cdn-imgix-open.headout.com/desktop-flaps/about-01-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  }
];

const HeaderNavData = [
  {
    id: 1,
    name: 'Top Picks'
  },
  {
    id: 2,
    name: 'Best Sellers'
  },
  {
    id: 3,
    name: 'City Tours'
  },
  {
    id: 4,
    name: 'Attractions'
  },
  {
    id: 5,
    name: 'Special Offers'
  }
];

export default SearchResults;