import React, { Component } from 'react';
import Header from './Header/index';
import TopPicks from './Picks';
import Collections from './Collections';
import Footer from './footer';
import ExperienceCard from './ExperienceCard';
import './Styles/nainital.css';

class Jaipur extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="delhi-wrapper">
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          selectedCity={'Jaipur'}    
          navigationData={DelhiNavigationData}
        />
        <TopPicks
          headline={'Top Experiences in Jaipur'}
          pickedData={JaipurData}
        />
        <Collections collectionsData={collectionsData} />
        {AllJaipurCityData &&
          AllJaipurCityData.map(
            ({ id, headline, description, sectionData }) => (
              <CitySection
                key={id}
                headline={headline}
                description={description}
                cardsData={sectionData}
              />
            )
          )}
        <NearbyScenery data={nearbySceneryData} />
        <Footer />
      </div>
    );
  }
}

const CitySection = ({ headline, description, cardsData }) => (
  <div className="city-section-wrapper">
    <h2
      style={{
        textAlign: 'left'
      }}
    >
      {headline}
    </h2>
    <hr
      style={{
        backgroundColor: '#ffbb58',
        width: '75px',
        height: '2px',
        border: 'none',
        marginTop: '0px',
        marginLeft: '0px',
        marginBottom: '10px'
      }}
    />
    <p
      style={{
        color: '#545454',
        fontSize: '15.3px',
        marginTop: '0px',
        textAlign: 'left',
        lineHeight: '20px'
      }}
    >
      {description}
    </p>
    <div className="travel-card-wrapper">
      {cardsData &&
        cardsData.map(
          ({
            id,
            city,
            url,
            description,
            currency,
            currentPrice,
            ratings,
            stars,
            discount,
            cashback,
            lastPrice,
            about,
            showMore,
            highlight
          }) => (
            <ExperienceCard
              key={id}
              city={city}
              about={about}
              url={url}
              description={description}
              currency={currency}
              price={currentPrice}
              ratings={ratings}
              stars={stars}
              discount={discount}
              cashback={cashback}
              lastPrice={lastPrice}
              showMore={showMore}
              highlight={highlight}
            />
          )
        )}
    </div>
  </div>
);

const NearbyScenery = ({ data }) => (
    <div className="nearby-scenery-wrapper">
      <h2
        style={{
          textAlign: 'left'
        }}
      >
        Nearby Scenery
      </h2>
      <hr
        style={{
          backgroundColor: '#ffbb58',
          width: '75px',
          height: '2px',
          border: 'none',
          marginTop: '0px',
          marginLeft: '0px',
          marginBottom: '10px'
        }}
      />
      <div className="scenery-section">
        {data.map(({ id, title, description, imageUrl }) => (
          <div key={id} className="scenery-card">
            <img src={imageUrl} alt={title} className="scenery-image" />
            <div className="scenery-description">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  const backgroundImagesData = [
    {
      id: 1,
      url: 'https://i.ibb.co/c1NXQ1c/palace-of-the-winds-jaipur-rajasthan-india-wallpaper-preview.jpg'
    }
  ];
  
  const DelhiNavigationData = [
    {
      id: 1,
      name: 'Categories'
    },
    {
      id: 2,
      name: 'Best Sellers'
    },
    {
      id: 3,
      name: 'Boat Rides'
    },
    {
      id: 4,
      name: 'Nature Walks'
    },
    {
      id: 5,
      name: 'Food and Drinks'
    }
  ];
  
  const AllJaipurCityData = [
    {
      id: 1,
      headline: 'Historical Monuments',
      description:
        'Explore the rich history of Jaipur with our top historical monuments.',
      sectionData: [
        {
          id: 1,
          currentPrice: 200,
          currency: '₹',
          stars: 4.5,
          ratings: 421,
          cashback: 5,
          about: 'Amber Fort',
          description: 'Amber Fort is a UNESCO World Heritage Site, known for its artistic Hindu style elements.',
          url:
            'https://i.ibb.co/yyQzhd3/1687932017.jpg'
        },
        {
          id: 2,
          currentPrice: 150,
          lastPrice: null,
          currency: '₹',
          stars: 4.7,
          ratings: 390,
          cashback: 8,
          about: 'Hawa Mahal',
          description: 'Hawa Mahal is an iconic palace known for its unique honeycomb structure and windows.',
          url:
            'https://i.ibb.co/BL8m0bY/Front-facade-of-Palace-of-the-Winds-Hawa-Mahal-Jaipur-Rajasthan-India.webp'
        }
      ]
    },
    {
      id: 2,
      headline: 'Local Markets',
      description:
        'Immerse yourself in the vibrant culture of Jaipur by exploring its bustling local markets.',
      sectionData: [
        {
          id: 1,
          currentPrice: 100,
          currency: '₹',
          stars: 4.6,
          ratings: 520,
          cashback: null,
          about: 'Johari Bazaar',
          description: 'Johari Bazaar is one of the oldest and most popular markets known for its jewelry.',
          url:
            'https://i.ibb.co/pR5m9VY/johari-bazaar-jaipur-tourism-entry-ticket-price.jpg'
        },
        {
          id: 2,
          currentPrice: 120,
          lastPrice: 150,
          currency: '₹',
          stars: 4.8,
          ratings: 460,
          cashback: null,
          discount: 20,
          about: 'Bapu Bazaar',
          description: 'Bapu Bazaar is famous for its textiles and Rajasthani items.',
          url:
            'https://i.ibb.co/hyC1XJ5/bapu-bazar-jaipur-tourism-opening-time-closing.jpg'
        }
      ]
    }
  ];
  
  const JaipurData = [
    {
      id: 1,
      currentPrice: 200,
      currency: '₹',
      stars: 4.5,
      ratings: 421,
      cashback: 5,
      about: 'Amber Fort',
      description: 'Amber Fort is a UNESCO World Heritage Site, known for its artistic Hindu style elements.',
      url:
        'https://i.ibb.co/yyQzhd3/1687932017.jpg'
    },
    {
      id: 2,
      currentPrice: 100,
      lastPrice: 120,
      currency: '₹',
      stars: 4.6,
      ratings: 520,
      cashback: null,
      discount: 20,
      about: 'Johari Bazaar',
      description: 'Johari Bazaar is one of the oldest and most popular markets in Jaipur.',
      url:
        'https://i.ibb.co/pR5m9VY/johari-bazaar-jaipur-tourism-entry-ticket-price.jpg'
    },
    {
      id: 3,
      currentPrice: 150,
      currency: '₹',
      stars: 4.7,
      ratings: 390,
      cashback: 8,
      about: 'Hawa Mahal',
      description: 'Hawa Mahal is an iconic palace known for its unique honeycomb structure and windows.',
      url:
        'https://i.ibb.co/BL8m0bY/Front-facade-of-Palace-of-the-Winds-Hawa-Mahal-Jaipur-Rajasthan-India.webp'
    },
    {
      id: 4,
      currentPrice: 120,
      lastPrice: 150,
      currency: '₹',
      stars: 4.8,
      ratings: 460,
      cashback: null,
      discount: 20,
      about: 'Bapu Bazaar',
      description: 'Bapu Bazaar is famous for its textiles and Rajasthani items.',
      url:
        'https://i.ibb.co/hyC1XJ5/bapu-bazar-jaipur-tourism-opening-time-closing.jpg'
    }
  ];
  
  const collectionsData = [
    {
      id: 1,
      title: 'Historical Monuments',
      url: 'https://i.ibb.co/r7qLKjs/Jantar-Mantar-1400.jpg',
      description: 'Explore the rich history of Jaipur with these iconic monuments.'
    },
    {
      id: 2,
      title: 'Local Markets',
      url: 'https://i.ibb.co/hyC1XJ5/bapu-bazar-jaipur-tourism-opening-time-closing.jpg',
      description: 'Experience the vibrant culture of Jaipur with our local market collection.'
    }
  ];
  
  const nearbySceneryData = [
    {
      id: 1,
      title: 'City Palace',
      description: 'City Palace, located in the heart of Jaipur, is a splendid example of Rajput and Mughal architecture.',
      imageUrl: 'https://i.ibb.co/Qbh5q8C/jnhicsz9wf9kpiwvqe3bzsz1edzg-1605795365-shutterstock-197923865.jpg'
    },
    {
      id: 2,
      title: 'Jantar Mantar',
      description: 'Jantar Mantar is a UNESCO World Heritage Site and an astronomical observatory built by Maharaja Jai Singh II.',
      imageUrl: 'https://i.ibb.co/r7qLKjs/Jantar-Mantar-1400.jpg'
    },
    {
      id: 3,
      title: 'Albert Hall Museum',
      description: 'Albert Hall Museum is the oldest museum in Rajasthan and houses a diverse collection of artifacts.',
      imageUrl: 'https://i.ibb.co/vcKxtv4/Albert-Hall-Museum-Jaipur.webp'
    }
  ];
  
  export default Jaipur;
  