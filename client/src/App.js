import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Chat from './components/Chat'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={Chat} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
