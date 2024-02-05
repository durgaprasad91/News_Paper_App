import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/header/Header';
import Homepages from './components/home/Homepages';
import Footer from './components/common/footer/Footer';
import SinglePage from './components/singlePage/SinglePage';
import CultureNews from './components/culture/Culture'; 
import SportsNews from './components/sports/sports';
import TechnologyNews from './components/technology/technology';
import ScienceNews from './components/Science/science';
import health from './components/health/Health';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route path="/singlepage/:id" exact component={SinglePage} />
          <Route exact path="/culture" component={CultureNews} />
          <Route exact path="/health" component={health} />
          <Route exact path="/sports" component={SportsNews} />
          <Route exact path="/technology" component={TechnologyNews} />
          <Route exact path="/science" component={ScienceNews} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
