import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Show from './components/pages/Show';
import Room from './components/pages/Room/Room';
import "./App.css";
import Youtube from "./components/Youtube";
import Authorization from "./components/pages/Authorization";
import LandingPage from "./components/pages/LandingPage";
import Navigation from "./components/Navigation/index";
import Profile from "./components/pages/Profile/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/login" component={Authorization}/>
            <Route exact path="/room" component={Room}/>
            <Route exact path="/show" component={Show}/>
            <Route exact path="/youtube" component={Youtube}/>
            <Route exact path="/nav" component={Navigation}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
