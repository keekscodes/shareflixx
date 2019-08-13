import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Show from './components/pages/Show'
// import Chat from './components/Chat'
import "./App.css";
// import Home from "./components/pages/LandingPage"
import Youtube from "./components/Youtube";
import Authorization from "./components/pages/Authorization";
import LandingPage from "./components/pages/LandingPage";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/login" component={Authorization}/>
            <Route exact path="/show" component={Show}/>
            <Route exact path="/youtube" component={Youtube}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
