import React, {Component} from 'react';
import {Redirect} from "react-router-dom"
import axios from 'axios';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

class Authorization extends Component {
  state = {
    active: false,
    username: "",
    password: "",
    loggedIn: false,
    firstName: "",
    lastName: "",
    email: "",
    signedUp: false
  };
  handleClick = (e) => {
    this.setState({
      active: !this.state.active
    })
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };

  loginSubmit = event => {
    event.preventDefault();
    let token = sessionStorage.getItem("token");
    console.log(token);

    axios.get("/api/users/current", {
      headers: {
        'Content-Type': "application/json",
        'Authorization': "Token " + token
      }
    }).then(res => {
      console.log(res);
      setTimeout(() => {
        this.setState({
          loggedIn: true
        });

      }, 2000)
    });
    // This needs to be developed . This is only a test
  };

  signupSubmit = event => {
    event.preventDefault();
    const {firstName, lastName, username, email, password} = this.state;
    const user = {
      user: {
        firstName,
        lastName,
        username,
        email,
        password
      }
    };
    axios.post("/api/users", user).then(res => {
      console.log(res);
      const {data: {user}} = res;
      console.log(user);
      let token = user.token;
      if (token) {
        sessionStorage.setItem("token", token)
      }

      setTimeout(() => {
        this.setState({
          signedUp: true,
          active: true,
          loggedIn: false
        });
      }, 2000)
    });
    // This needs to be developed . This is only a test
  };

  render() {
    const {firstName, lastName, username, email, password, active} = this.state;
    return (
      <div className="container">
        <div className={this.state.active ? "frame frame-short" : "frame frame-long"}>
          <div className={this.state.active ? "nav" : "nav"}>
            <ul className="links">
              <li className={this.state.active ? "signin-active" : "signin-inactive"}>
                <span className="btn"
                      onClick={this.handleClick}
                      style={{width: "427px"}}>Toggle Authentication <i className="fas fa-sync-alt"/>
                </span>
              </li>
            </ul>
          </div>
          <div className="form">
            {this.state.active ? (
              this.state.loggedIn ? 
              (<Redirect to="/show"/>): (
              <LoginForm
                active={active}
                username={username}
                handleInputChange={this.handleInputChange}
                password={password}
                loginSubmit={this.loginSubmit}
              />) 
            ) : (
              this.state.signedUp ? (<Redirect to="/authorization" />) : (
              <SignupForm
                active={active}
                firstName={firstName}
                lastName={lastName}
                handleInputChange={this.handleInputChange}
                email={email}
                username={username}
                password={password}
                signupSubmit={this.signupSubmit}
              />)
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Authorization;
