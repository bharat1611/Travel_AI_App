import React, { Component } from 'react';
import Header from './Header/index';
import TopPicks from './Picks';
import Collections from './Collections';
import Footer from './footer';
import ExperienceCard from './ExperienceCard';
import './Styles/nainital.css';

class Nainital extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="new-york-wrapper">
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          selectedCity={'Nainital'}
          navigationData={NainitalNavigationData}
        />
        <TopPicks
          headline={'Top Experiences in Nainital'}
          pickedData={NainitalData}
        />
        <Collections collectionsData={collectionsData} />
        {AllNainitalCityData &&
          AllNainitalCityData.map(
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
      'https://i.ibb.co/GMPYwR4/Nainital-Lake-Revel-in-the-Lap-of-Nature.jpg'
  }
];

const NainitalNavigationData = [
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

// All Nainital City Sections Data ~ nested ( Dynamically Rendering )

const AllNainitalCityData = [
  {
    id: 1,
    headline: 'Boat Rides',
    description:
      'Explore the serene Naini Lake with our top boat ride experiences. Enjoy the tranquility and beauty of the lake in the heart of Nainital.',
    sectionData: [
      {
        id: 1,
        currentPrice: 500,
        currency: '₹',
        stars: 4.8,
        ratings: 321,
        cashback: 10,
        about: 'NAINI LAKE BOAT RIDE',
        description: 'Row Boat Ride',
        url:
          "https://i.ibb.co/fx3Ffg2/1587037275-A-view-of-Nainital-lake-with-the-morning-mist.jpg"
      },
      {
        id: 2,
        currentPrice: 700,
        lastPrice: null,
        currency: '₹',
        stars: 4.7,
        ratings: 250,
        cashback: 10,
        about: 'NAINI LAKE BOAT RIDE',
        description: 'Pedal Boat Ride',
        url:
          'https://i.ibb.co/ckPKYvk/nainital.jpg'
      }
    ]
  },
  {
    id: 2,
    headline: 'Nature Walks',
    description:
      'Discover the lush greenery and picturesque landscapes of Nainital with our guided nature walks. A perfect way to immerse in the natural beauty.',
    sectionData: [
      {
        id: 1,
        currentPrice: 300,
        currency: '₹',
        stars: 4.9,
        ratings: 450,
        cashback: null,
        about: 'NATURE WALKS',
        description: 'Tiffin Top Trek',
        url:
          'https://i.ibb.co/C8nhqLK/Trekking-Uttarakhand.jpg'
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
        about: 'NATURE WALKS',
        description: 'Snow View Point Trek',
        url:
          'https://i.ibb.co/hfD7TTp/view-from-snow-point.jpg'
      }
    ]
  }
];

// Nainital Experiences Data

const NainitalData = [
  {
    id: 1,
    currentPrice: 500,
    currency: '₹',
    stars: 4.8,
    ratings: 321,
    cashback: 10,
    about: 'NAINI LAKE BOAT RIDE',
    description: 'Row Boat Ride',
    url:
      'https://i.ibb.co/fx3Ffg2/1587037275-A-view-of-Nainital-lake-with-the-morning-mist.jpg'
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
    about: 'NATURE WALKS',
    description: 'Tiffin Top Trek',
    url:
      'https://i.ibb.co/C8nhqLK/Trekking-Uttarakhand.jpg'
  },
  {
    id: 3,
    currentPrice: 700,
    currency: '₹',
    stars: 4.7,
    ratings: 250,
    cashback: 10,
    about: 'NAINI LAKE BOAT RIDE',
    description: 'Pedal Boat Ride',
    url:
      'https://i.ibb.co/ckPKYvk/nainital.jpg'
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
    about: 'NATURE WALKS',
    description: 'Snow View Point Trek',
    url:
      'https://i.ibb.co/hfD7TTp/view-from-snow-point.jpg'
  }
];

const collectionsData = [
  {
    id: 1,
    title: 'Boating in Nainital',
    url: 'https://i.ibb.co/fx3Ffg2/1587037275-A-view-of-Nainital-lake-with-the-morning-mist.jpg',
    description: 'Experience the best boating in Nainital with these options.'
  },
  {
    id: 2,
    title: 'Nature Walks',
    url: 'https://i.ibb.co/fCdLjNT/Trekking.jpg',
    description: 'Explore the beauty of nature in Nainital with our nature walk collection.'
  }
];

const nearbySceneryData = [
  {
    id: 1,
    title: 'Naini Lake',
    description: 'Naini Lake is the lifeline of Nainital and a major tourist attraction. The lake offers boating and scenic views of the surrounding hills.',
    imageUrl: 'https://i.ibb.co/fx3Ffg2/1587037275-A-view-of-Nainital-lake-with-the-morning-mist.jpg'
  },
  {
    id: 2,
    title: 'Snow View Point',
    description: 'Snow View Point offers breathtaking views of the snow-clad Himalayan ranges. It is accessible by a cable car ride from Mallital.',
    imageUrl: 'https://i.ibb.co/hfD7TTp/view-from-snow-point.jpg'
  },
  {
    id: 3,
    title: 'Tiffin Top',
    description: 'Tiffin Top, also known as Dorothy\'s Seat, is a popular picnic spot in Nainital. It offers stunning views of the Himalayas and Nainital town.',
    imageUrl: 'https://i.ibb.co/C8nhqLK/Trekking-Uttarakhand.jpg'
  }
];

export default Nainital;
