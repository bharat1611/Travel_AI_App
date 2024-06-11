import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainHome from './Components/MainHome';
import Nainital from './Components/Nainital';
import AppStore from './Components/AppStore';
import Delhi from './Components/Delhi';
import Jaipur from './Components/Jaipur'
import Mumbai from './Components/Mumbai';
import SearchResults from './Components/SearchResults';

const CityRoutes = () => (
  <Routes>
    <Route exact path="/home" Component={MainHome} />
    <Route exact path="/cities/nainital" Component={Nainital} />
    <Route exact path="/cities/delhi" Component={Delhi} />
    <Route exact path="/cities/jaipur" Component={Jaipur} />
    <Route exact path="/cities/mumbai" Component={Mumbai} />
    <Route exact path="/cities/london" Component={MainHome} />
    <Route exact path="/cities/dubai" Component={MainHome} />
    <Route exact path="/cities/barcelona" Component={MainHome} />
    <Route exact path="/cities/madrid" Component={MainHome} />
    <Route exact path="/cities/singapore" Component={MainHome} />
    <Route exact path="/cities/venice" Component={MainHome} />
    <Route exact path="/cities/milan" Component={MainHome} />
    <Route exact path="/cities/naples" Component={MainHome} />
    <Route exact path="/cities/budapest" Component={MainHome} />
    <Route exact path="/cities/edinburg" Component={MainHome} />
    <Route exact path="/cities/florence" Component={MainHome} />
    <Route exact path="/app" Component={AppStore} />
    <Route exact path="/search-results" Component={SearchResults} />
  </Routes>
);

export default CityRoutes;
