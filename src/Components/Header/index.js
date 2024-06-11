import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Background from './Background';
import Logo from '../Images/bv.png';
import '../Styles/Header.css';

class Header extends Component {
  state = {
    experience: '',
    recommendation: null,
    llm_response: null
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
      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_input })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      this.setState({ llm_response: jsonData.llm_response });
    } catch (err) {
      console.log('Error:', err);
    }
  }
  handleRecommendationInput = async (e) => {
    const user_input = e.target.value;
    await this.fetchRecommendation(user_input);
  }
  handleLLMInput = async (e) => {
    const user_input = e.target.value;
    await this.fetchLLMResponse(user_input);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  changeExperience = event => this.setState({ experience: event.target.value });

  render() {
    const {
      backgroundImagesData,
      navigationData,
      selectedCity,
      history
    } = this.props;
    return (
      <React.Fragment>
        <HeaderNav
          changeExperience={this.changeExperience}
          experience={this.state.experience}
          history={history}
          selectedCity={selectedCity}
          navigationData={navigationData}
        />
        <Background backgroundImagesData={backgroundImagesData} />
        <div className="search-bar-div">
          <div className="select-city-large">
            <i className="fas fa-map-marker" />
            <Searchbar
              style={customStyles}
              history={this.props.history}
              selectedCity={this.props.selectedCity}
            />
          </div>
          <a href="/search-results" style={{'--clr': '#7808d0'}} className="button">
            <span className="button__icon-wrapper">
              <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
              </svg>
              <svg className="button__icon-svg button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
              </svg>
            </span>
            Let's Go
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export class HeaderNav extends Component {
  static defaultProps = {
    navigationData: [
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
    ]
  };
  render() {
    const { navigationData } = this.props;
    return (
      <div className="header-wrap">
        <div className="header-wrapper navbar-fixed-top">
          <div className="header-left">
            <div className="nav">
              <div className="first-line">
                <Link to={{ pathname: `/` }}>
                  <div>
                    <img id="logo" src={Logo} alt="Headout" />
                  </div>
                </Link>
                <div className="select-city">
                  <Searchbar
                    style={smallSearchbar}
                    history={this.props.history}
                    selectedCity={this.props.selectedCity}
                  />
                </div>
                <div className="select-experience">
                  <input
                    type="text"
                    placeholder="Search for experiences"
                    onChange={this.changeExperience}
                    value={this.props.experience}
                  />
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="second-line">
                <div className="best-picked">
                  {navigationData &&
                    navigationData.map(({ id, name }) => (
                      <p key={id}>{name}</p>
                    ))}
                </div>
                <div className="support">
                  <p>
                    24/7 Support{' '}
                    <span className="arrow-down">
                      {' '}
                      <i className="fas fa-angle-down" />
                    </span>
                  </p>
                  <p
                    style={{
                      marginRight: '0px'
                    }}
                  >
                    English/INR
                    <span className="arrow-down">
                      {' '}
                      <i className="fas fa-angle-down" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="header-right">
              <a
                href="https://ayushmanbhatt.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="sign-in">
                  {/* <i className="fas fa-user-circle sign-in-user" /> */}
                  <div className="lastnamearya-img">
                    <img
                      src="https://gravatar.com/avatar/4d5f751d5f19a082aed8dcfa9fe15918?size=256&cache=1712165991959"
                      alt="lastnamearya"
                    />
                  </div>
                  <p style={{ color: '#ec1943', marginLeft: '5px' }}>
                    Ayushman Bhatt
                    <span className="arrow-down">
                      {' '}
                      <i className="fas fa-angle-down" />
                    </span>
                  </p>
                </div>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const options = [
  { value: 'nainital', label: 'Nainital' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'jaipur', label: 'Jaipur' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'shimla', label: 'Shimla' },
  { value: 'ooty', label: 'Ooty' },
  { value: 'varanasi', label: 'Varanasi' },
  { value: 'agra', label: 'Agra' },
  { value: 'chennai', label: 'Chennai' },
  { value: 'mussoorie', label: 'Mussoorie' },
  { value: 'manali', label: 'Manali' },
  { value: 'jodhpur', label: 'Jodhpur' },
  { value: 'rishikesh', label: 'Rishikesh' },
  { value: 'panaji', label: 'Panaji' },
  { value: 'kochi', label: 'Kochi' }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    width: 120
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    fontSize: '14px',
    marginTop: '10px',
    paddingLeft: '5px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

const smallSearchbar = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    paddingLeft: '20px',
    width: 150
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    fontSize: '11px',
    marginLeft: '15px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

class Searchbar extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption });
    this.changeUrl(selectedOption.value);
  };

  changeUrl = url => {
    this.props.history.push(`/cities/${url}`);
  };

  render() {
    const { selectedOption } = this.state;
    const { selectedCity } = this.props;
    if (selectedCity) {
      return (
        <Select
          styles={this.props.style}
          placeholder={selectedCity}
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          className="city-select-dropdown"
        />
      );
    } else {
      return (
        <Select
          styles={this.props.style}
          placeholder="Select City"
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          className="city-select-dropdown"
        />
      );
    }
  }
}

export default Header;
