import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Left, Right } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Styles/top-cities.css';
import nainital from './photos_Converted/nainital.jpg';
import delhi from './photos_Converted/delhi.jpg';
import jaipur from './photos_Converted/jaipur.jpg';
import mumbai from './photos_Converted/mumbai.jpg';
import shimla from './photos_Converted/shimla.jpg';
import ooty from './photos_Converted/ooty.jpg';
import varanasi from './photos_Converted/varanasi.jpg';
import agra from './photos_Converted/agra.jpg';
import chennai from './photos_Converted/chennai.jpg';
import mussoorie from './photos_Converted/mussoorie.jpg';
import manali from './photos_Converted/manali.jpg';
import jodhpur from './photos_Converted/jodhpur.jpg';
import rishikesh from './photos_Converted/rishikesh.jpg';
import panaji from './photos_Converted/panaji.jpg';
import kochi from './photos_Converted/kochi.jpg';

class TopCities extends Component {
  render() {
    return (
      <div>
        <div className="top-cities-wrapper">
          <h1>Top Cities on BonVoyage</h1>
          <hr
            style={{
              backgroundColor: '#ffbb58',
              width: '75px',
              height: '2px',
              border: 'none',
              marginTop: '0px',
              marginLeft: '0px',
              marginBottom: '20px'
            }}
          />
          <div className="top-cities-carousel-wrap">
            <CitySlider />
          </div>
          <hr
            style={{
              height: '1px',
              color: '#e7e7e7',
              borderTop: 'none',
              borderLeft: 'none'
            }}
          />
        </div>
        <hr className="section-divide-hr" />
      </div>
    );
  }
}

class CitySlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <Right />,
      prevArrow: <Left />
    };
    return (
      <Slider {...settings}>
        {topCitiesData &&
          topCitiesData.map(({ id, city, url, description, route }) => (
            <Link
              to={{ pathname: `/cities/${route}` }}
              key={id}
              className="link"
            >
              <CityCard city={city} url={url} description={description} />
            </Link>
          ))}
      </Slider>
    );
  }
}

class CityCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    return (
      <div className="city-card-wrapper">
        <div className="city-card">
          <div
            className="city-card-img"
            style={{
              backgroundImage: url
            }}
          />
          <div className="city-details">
            <div id="triangle" />
            <p>{this.props.city}</p>
            <div id="city-hidden">
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const topCitiesData = [
  {
    id: 1,
    city: 'Nainital',
    route: 'nainital',//nainital
    description: 'Embark on a lakeside dream in Nainital!',
    url:(nainital)
  },
  {
    id: 2,
    city: 'Delhi',
    route: 'delhi',
    description: "Discover the heart of India in Delhi's bustling streets!",
    url:(delhi)
  },
  {
    id: 3,
    city: 'Jaipur',
    route: 'jaipur',
    description: 'Step into the Pink City and paint your travel memories!',
    url:(jaipur)
  },
  {
    id: 4,
    city: 'Mumbai',
    route: 'mumbai',
    description: "Experience the pulse of Bollywood in Maximum City!",
    url:(mumbai)
  },
  {
    id: 5,
    city: 'Shimla',
    route: 'shimla',
    description: 'Let the hills sing to your soul in Shimla`s serene embrace!',
    url:(shimla)
  },
  {
    id: 6,
    city: 'Ooty',
    route: 'ooty',
    description: 'Unwind in the Queen of Hill Stations, Ooty`s tranquil charm awaits!',
    url:(ooty)
  },
  {
    id: 7,
    city: 'Varanasi',
    route: 'varanasi',
    description: 'Surrender to spirituality along the sacred banks of Varanasi!',
    url:(varanasi)
  },
  {
    id: 8,
    city: 'Agra',
    route: 'agra',
    description: 'Where every glance at the Taj Mahal tells a tale of love!',
    url:(agra)
  },
  {
    id: 9,
    city: 'Chennai',
    route: 'chennai',
    description: 'Dive into the cultural kaleidoscope of Chennai`s vibrant shores!',
    url:(chennai)
  },
  {
    id: 10,
    city: 'Mussoorie',
    route: 'mussoorie',
    description: 'Get lost in the misty magic of Mussoorie`s hills!',
    url:(mussoorie)
  },
  {
    id: 11,
    city: 'Manali',
    route: 'manali',
    description: 'Adventure beckons amidst the snow-capped peaks of Manali!',
    url:(manali)
  },
  {
    id: 12,
    city: 'Jodhpur',
    route: 'jodhpur',
    description: 'Experience royalty in the sun-kissed sands of Jodhpur!',
    url:(jodhpur)
  },
  {
    id: 13,
    city: 'Rishikesh',
    route: 'rishikesh',
    description: 'Find your inner peace amidst the Ganges in Rishikesh`s spiritual haven!',
    url:(rishikesh)
  },
  {
    id: 14,
    city: 'Panaji',
    route: 'panaji',
    description: 'Fiesta awaits in Panaji`s laid-back charm!',
    url:(panaji)
  },
  {
    id: 15,
    city: 'Kochi',
    route: 'kochi',
    description: 'Where cultures converge by the tranquil coast in Kochi!',
    url:(kochi)
  }
];

export default TopCities;
