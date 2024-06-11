import React, { Component } from 'react';
import Header from './Header/index';
import TopPicks from './Picks';
import Collections from './Collections';
import Footer from './footer';
import ExperienceCard from './ExperienceCard';
import './Styles/nainital.css';

class Mumbai extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="new-york-wrapper">
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          selectedCity={'Mumbai'}
          navigationData={MumbaiNavigationData}
        />
        <TopPicks
          headline={'Top Experiences in Mumbai'}
          pickedData={MumbaiData}
        />
        <Collections collectionsData={collectionsData} />
        {AllMumbaiCityData &&
          AllMumbaiCityData.map(
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
        {/* <Download />
        <Media /> */}
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
    url:
      'https://i.ibb.co/9r2QgTr/photo-1567157577867-05ccb1388e66.jpg'
  }
];

const MumbaiNavigationData = [
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
  
  // All Mumbai City Sections Data ~ nested ( Dynamically Rendering )
  
  const AllMumbaiCityData = [
    {
      id: 1,
      headline: 'Boat Rides',
      description:
        'Explore the Arabian Sea with our top boat ride experiences in Mumbai. Enjoy the breathtaking views of the city skyline and coastline.',
      sectionData: [
        {
          id: 1,
          currentPrice: 500,
          currency: '₹',
          stars: 4.8,
          ratings: 321,
          cashback: 10,
          about: 'GATEWAY OF INDIA BOAT RIDE',
          description: 'Gateway of India Boat Ride',
          url:
            "https://i.ibb.co/fNVqMbS/new-mode-of-transport.webp"
        },
        {
          id: 2,
          currentPrice: 700,
          lastPrice: null,
          currency: '₹',
          stars: 4.7,
          ratings: 250,
          cashback: 10,
          about: 'ELEPHANTA CAVES BOAT RIDE',
          description: 'Elephanta Caves Boat Ride',
          url:
            'https://i.ibb.co/TRGHzWQ/1678369623-shutterstock-1038894838.jpg'
        }
      ]
    },
    {
      id: 2,
      headline: 'Nature Walks',
      description:
        'Discover the green oases and serene spots in Mumbai with our guided nature walks. Immerse yourself in the tranquility amidst the bustling city life.',
      sectionData: [
        {
          id: 1,
          currentPrice: 300,
          currency: '₹',
          stars: 4.9,
          ratings: 450,
          cashback: null,
          about: 'SANJAY GANDHI NATIONAL PARK',
          description: 'Sanjay Gandhi National Park Trek',
          url:
            'https://i.ibb.co/gJd1DzC/images.jpg'
        },
        {
          id: 2,
          currentPrice: 400,
          lastPrice: 500,
          currency: '₹',
          stars: 4.8,
          ratings: 380,
          cashback: null,
          discount: 20,
          about: 'ELEPHANTA ISLAND TREK',
          description: 'Elephanta Island Trek',
          url:
            'https://i.ibb.co/m42ZLT1/elephanata-cave.jpg'
        }
      ]
    }
  ];
  
  // Mumbai Experiences Data
  
  const MumbaiData = [
    {
      id: 1,
      currentPrice: 500,
      currency: '₹',
      stars: 4.8,
      ratings: 321,
      cashback: 10,
      about: 'GATEWAY OF INDIA BOAT RIDE',
      description: 'Gateway of India Boat Ride',
      url:
        'https://i.ibb.co/fNVqMbS/new-mode-of-transport.webp'
    },
    {
      id: 2,
      currentPrice: 300,
      lastPrice: 400,
      currency: '₹',
      stars: 4.9,
      ratings: 450,
      cashback: null,
      discount: 25,
      about: 'SANJAY GANDHI NATIONAL PARK',
      description: 'Sanjay Gandhi National Park Trek',
      url:
        'https://i.ibb.co/gJd1DzC/images.jpg'
    },
    {
      id: 3,
      currentPrice: 700,
      currency: '₹',
      stars: 4.7,
      ratings: 250,
      cashback: 10,
      about: 'ELEPHANTA CAVES BOAT RIDE',
      description: 'Elephanta Caves Boat Ride',
      url:
        'https://i.ibb.co/TRGHzWQ/1678369623-shutterstock-1038894838.jpg'
    },
    {
      id: 4,
      currentPrice: 400,
      lastPrice: 500,
      currency: '₹',
      stars: 4.8,
      ratings: 380,
      cashback: null,
      discount: 20,
      about: 'ELEPHANTA ISLAND TREK',
      description: 'Elephanta Island Trek',
      url:
        'https://i.ibb.co/m42ZLT1/elephanata-cave.jpg'
    }
  ];
  
  const collectionsData = [
    {
      id: 1,
      title: 'Boating in Mumbai',
      url: 'https://i.ibb.co/WPWNYs7/47ea15ae-e1da-11ec-8203-2d24975ff45e-1654109049474.jpg',
      description: 'Experience the best boating in Mumbai with these options.'
    },
    {
      id: 2,
      title: 'Nature Walks',
      url: 'https://i.ibb.co/T0Z6Vvc/Hiking-featured.webp',
      description: 'Explore the green oases and serene spots in Mumbai with our nature walk collection.'
    }
  ];
  
  const nearbySceneryData = [
    {
      id: 1,
      title: 'Marine Drive',
      description: 'Marine Drive is a picturesque promenade in Mumbai, offering stunning views of the Arabian Sea.',
      imageUrl: 'https://i.ibb.co/CKXPyVN/Marine-Drive-Skyline.jpg'
    },
    {
      id: 2,
      title: 'Juhu Beach',
      description: 'Juhu Beach is one of the most popular beaches in Mumbai, known for its lively atmosphere and street food.',
      imageUrl: 'https://i.ibb.co/LrbV7RM/a32b506f62670470be5772de88f2096f.jpg'
    },
    {
      id: 3,
      title: 'Elephanta Caves',
      description: 'Elephanta Caves are a UNESCO World Heritage Site, housing ancient rock-cut sculptures and temples dedicated to Lord Shiva.',
      imageUrl: 'https://i.ibb.co/DpnYf6Z/cave-2.jpg'
    }
  ];
  
  export default Mumbai;
  