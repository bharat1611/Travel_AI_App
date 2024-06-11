import React, { Component } from 'react';
import Header from './Header/index';
import TopPicks from './Picks';
import Collections from './Collections';
import Footer from './footer';
import ExperienceCard from './ExperienceCard';
import './Styles/nainital.css';

class Delhi extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="delhi-wrapper">
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          selectedCity={'Delhi'}
          navigationData={DelhiNavigationData}
        />
        <TopPicks
          headline={'Top Experiences in Delhi'}
          pickedData={DelhiData}
        />
        <Collections collectionsData={collectionsData} />
        {AllDelhiCityData &&
          AllDelhiCityData.map(
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
    url: 'https://i.ibb.co/2nzsCyG/architecture-taj-mahal-new-delhi.jpg'
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

const AllDelhiCityData = [
    {
      id: 1,
      headline: 'Historical Monuments',
      description:
        'Explore the rich history of Delhi with our top historical monuments.',
      sectionData: [
        {
          id: 1,
          currentPrice: 200,
          currency: '₹',
          stars: 4.5,
          ratings: 421,
          cashback: 5,
          about: 'Red Fort',
          description: 'A UNESCO World Heritage Site, Red Fort stands as a symbol of India’s rich cultural heritage.',
          url:
            'https://i.ibb.co/drtKgyQ/Red-Fort-Old-Delhi-India.webp'
        },
        {
          id: 2,
          currentPrice: 150,
          lastPrice: null,
          currency: '₹',
          stars: 4.7,
          ratings: 390,
          cashback: 8,
          about: 'Humayun’s Tomb',
          description: 'Humayun’s Tomb is a masterpiece of Mughal architecture and the first garden-tomb on the Indian subcontinent.',
          url:
            'https://i.ibb.co/XpXyHfx/Humayuns-Tomb-Hamidah-Banu-Begam-Delhi-India-1569.webp'
        }
      ]
    },
    {
      id: 2,
      headline: 'Local Markets',
      description:
        'Immerse yourself in the vibrant culture of Delhi by exploring its bustling local markets.',
      sectionData: [
        {
          id: 1,
          currentPrice: 100,
          currency: '₹',
          stars: 4.6,
          ratings: 520,
          cashback: null,
          about: 'Chandni Chowk',
          description: 'Chandni Chowk is one of the oldest and busiest markets in Old Delhi.',
          url:
            'https://i.ibb.co/NNPKFw9/231216-Pouches-Chandni-Chowk-02.jpg'
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
          about: 'Sarojini Nagar Market',
          description: 'Sarojini Nagar Market is famous for its trendy fashion apparel at bargain prices.',
          url:
            'https://i.ibb.co/ypMzD5D/Sarojini-Nagar-market-1.webp'
        }
      ]
    }
  ];
  
  const DelhiData = [
    {
      id: 1,
      currentPrice: 200,
      currency: '₹',
      stars: 4.5,
      ratings: 421,
      cashback: 5,
      about: 'Red Fort',
      description: 'A UNESCO World Heritage Site, Red Fort stands as a symbol of India’s rich cultural heritage.',
      url:
        'https://i.ibb.co/drtKgyQ/Red-Fort-Old-Delhi-India.webp'
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
      about: 'Chandni Chowk',
      description: 'Chandni Chowk is one of the oldest and busiest markets in Old Delhi.',
      url:
        'https://i.ibb.co/NNPKFw9/231216-Pouches-Chandni-Chowk-02.jpg'
    },
    {
      id: 3,
      currentPrice: 150,
      currency: '₹',
      stars: 4.7,
      ratings: 390,
      cashback: 8,
      about: 'Humayun’s Tomb',
      description: 'Humayun’s Tomb is a masterpiece of Mughal architecture and the first garden-tomb on the Indian subcontinent. ',
      url:
        'https://i.ibb.co/XpXyHfx/Humayuns-Tomb-Hamidah-Banu-Begam-Delhi-India-1569.webp'
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
      about: 'Sarojini Nagar Market',
      description: 'Sarojini Nagar Market is famous for its trendy fashion apparel at bargain prices.',
      url:
        'https://i.ibb.co/ypMzD5D/Sarojini-Nagar-market-1.webp'
    }
  ];
  
  const collectionsData = [
    {
      id: 1,
      title: 'Historical Monuments',
      url: 'https://i.ibb.co/mBGF4Kk/desktop-2a6cc0fb2ff6a4a.jpg',
      description: 'Explore the rich history of Delhi with these iconic monuments.'
    },
    {
      id: 2,
      title: 'Local Markets',
      url: 'https://i.ibb.co/NNPKFw9/231216-Pouches-Chandni-Chowk-02.jpg',
      description: 'Experience the vibrant culture of Delhi with our local market collection.'
    }
  ];
  
  const nearbySceneryData = [
    {
      id: 1,
      title: 'India Gate',
      description: 'India Gate is a war memorial located astride the Rajpath in New Delhi. Pay homage to the soldiers of the Indian Army who sacrificed their lives in World War I.',
      imageUrl: 'https://i.ibb.co/TvVrg2y/resizer.jpg'
    },
    {
      id: 2,
      title: 'Qutub Minar',
      description: 'Qutub Minar is a UNESCO World Heritage Site and one of the tallest minarets in the world. Admire its Indo-Islamic architecture and intricate carvings.',
      imageUrl: 'https://i.ibb.co/Y3ZDtTP/Blog-5.jpg'
    },
    {
      id: 3,
      title: 'Lotus Temple',
      description: 'Lotus Temple, also known as the Baháʼí House of Worship, is renowned for its flower-like shape and serene ambiance. Visit for meditation and spiritual solace.',
      imageUrl: 'https://i.ibb.co/dJ1sx2b/stringio.jpg'
    }
  ];
  
  export default Delhi;