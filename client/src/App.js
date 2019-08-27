import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Show from './components/pages/Show'
// import Chat from './components/Chat'
import "./App.css";
// import Home from "./components/pages/LandingPage"
import Youtube from "./components/Youtube";
import Authorization from "./components/pages/Authorization";
import LandingPage from "./components/pages/LandingPage";
import Navigation from "./components/Navigation/index";
import Profile from "./components/pages/Profile/index";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route render={() => <Navigation/>}/>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/login" component={Authorization}/>
            <Route exact path="/show" component={Show}/>
            <Route exact path="/youtube" component={Youtube}/>
            <Route exact path="/nav" component={Navigation}/>
            <Route path="/profile" component={Profile}/>

          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
