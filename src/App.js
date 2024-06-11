import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import MainRoutes from './CityRoutes';
import { LoginSignup } from './LoginSignup'; 
import logo from './Components/Images/bv.png';
import { auth } from './firebase'; 
import { onAuthStateChanged } from "firebase/auth";
import ProtectedRoute from './Components/ProtectedRoute';

class App extends Component {
  state = { width: 0, height: 0, isAuthenticated: false };

  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ isAuthenticated: true });
      } else {
        this.setState({ isAuthenticated: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => 
    this.setState({ width: window.innerWidth, height: window.innerHeight });

  render() {
    const { width, isAuthenticated } = this.state;
    const mobileTablet = width <= 0;

    if (mobileTablet) {
      return (
        <div className="mobile-tablet">
          <img src={logo} alt="Headout" />
          <p>
            Currently, we're not supporting Mobile & Tablets{' '}
            <span role="img" aria-label="Warn">🙏</span>
          </p>
        </div>
      );
    } else {
      return (
        <GoogleOAuthProvider clientId="834645216890-ugsqmp2as0rhcrmupept96oucp7ba2rd.apps.googleusercontent.com">
          <Router>
            <Routes>
              <Route path="/login" element={<LoginSignup />} />
              <Route path="/*" element={<MainRoutes />} /> {/* Removed ProtectedRoute */}
            </Routes>
          </Router>

        </GoogleOAuthProvider>
      );
    }
  }
}

export default App;
