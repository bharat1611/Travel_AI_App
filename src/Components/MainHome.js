import React, { Component } from 'react';
import Header from './Header';
import TopCities from './TopCities';
import HeadoutPicks from './Picks';
import Collections from './Collections';
import Download from './Download';
import Media from './Media';
import Footer from './footer';
import './Styles/main-home.css';
import car1 from './collectionimg/car1.jpg'
import car2 from './collectionimg/car2.jpg'
import img1 from './collectionimg/1.jpg';
import img2 from './collectionimg/2.jpg';
import img3 from './collectionimg/3.jpg';
import img4 from './collectionimg/4.jpg';
import img5 from './collectionimg/5.jpg';
import img6 from './collectionimg/6.jpg';
import img7 from './collectionimg/7.jpg';
import img8 from './collectionimg/8.jpg';
import img9 from './collectionimg/9.png';
import img10 from './collectionimg/10.jpeg';
import img11 from './collectionimg/11.jpeg';
import img12 from './collectionimg/12.jpg';
import img13 from './collectionimg/13.jpg';
import img14 from './collectionimg/14.jpg';
import img15 from './collectionimg/15.jpg';
import img16 from './collectionimg/16.jpg';

class MainHome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="App">
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          navigationData={HeaderNavData}
        />
        <TopCities />
        {/* <HeadoutPicks pickedData={pickedData} headline={'Picks of the day'} /> */}
        <Collections collectionsData={collectionsData} />
        <Footer />
      </div>
    );
  }
}

// Caraousel Images for Home

const backgroundImagesData = [
  /*{
    id: 1,
    url:(car1)
  },*/
  {
    id: 2,
    url:
      'https://cdn-imgix-open.headout.com/desktop-flaps/about-01-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  }/*,
  {
    id: 3,
    url:(car2)
  }*/
];

// Header Navigation Data*

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

// Currently using this Data for Headout Top Picks

const collectionsData = [
  {
    id: 1,
    description: 'Sri Ranganatha Swamy Temple',
    url:(img1)
  },
  {
    id: 2,
    description: 'Humayun`s Tomb',
    url:(img2)
  },
  {
    id: 3,
    description: 'India Gate',
    url:(img3)
  },
  {
    id: 4,
    description: 'Gwalior Fort',
    url:(img4)
  },
  {
    id: 5,
    description: 'The Oberoi Udaivilas',
    url:(img5)
  },
  {
    id: 6,
    description: 'Hawa Mahal',
    url:(img6)
  },
  {
    id: 7,
    description: 'Munnar',
    url:(img7)
  },
  {
    id: 8,
    description: 'Kandariya Mahadeva Temple',
    url:(img8)
  },
  {
    id: 9,
    description: 'Kerela',
    url:(img9)
  },
  {
    id: 10,
    description: 'Mehrangarh Fort',
    url:(img10)
  },
  {
    id: 11,
    description: 'Jodhpur',
    url:(img11)
  },
  {
    id: 12,
    description: 'Lotus Temple',
    url:(img12)
  },
  {
    id: 13,
    description: 'Amber Palace',
    url:(img13)
  },
  {
    id: 14,
    description: 'Arulmigu Peruvudaiyar Temple',
    url:(img14)
  },
  {
    id: 15,
    description: 'Red Fort',
    url:(img15)
  },
  {
    id: 16,
    description: 'Jama Masjid',
    url:(img16)
  }
];

export default MainHome;
