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
    signedUp: false,
    spinner: false
  };

  componentDidMount() {
    this.isTokenExpired() ? (console.log("Please sign in or sign up")) : (window.location.href = "/show");
  }

  handleClick = () => {
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

  logOut = () => {
    sessionStorage.removeItem("token");
  }

  loginSubmit = event => {
    event.preventDefault();
    const {username, password} = this.state;
    let logInUser = {
      user: {
        username,
        password
      }
    }

    
    if ((username.length && password.length) === 0) {
      console.log("You must input a username and password")
    } else {
      this.setState({
        spinner: true
      })
    }

    axios.post("/api/users/login", logInUser).then(res => {
      sessionStorage.setItem("token", res.data.user.token);
      console.log(res);
    }).then(() => {
      let token = sessionStorage.getItem("token");

      axios.get("/api/users/current", {
        headers: {
          'Content-Type': "application/json",
          'Authorization': "Token " + token
        }
      }).then(res => {
        console.log(res);
        setTimeout(() => {
          this.setState({
            signedUp: true,
            loggedIn: true
          });

        }, 2000)
      });
    })
  };

  isTokenExpired = () => {
    let token = sessionStorage.getItem("token");

    if (token) {
      setTimeout(() => {
        sessionStorage.removeItem("token");
      }, 120000)
      return false
    } else {
      return true
    }
  }

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
        setTimeout(() => {
          this.setState({
            active: true,
            loggedIn: false
          });
        }, 2000)
      }

    });
  };

  render() {
    const {firstName, lastName, username, email, password, active, spinner} = this.state;
    return (
      <div className="container">
        <div className={this.state.active ? "frame frame-short" : "frame frame-long"}>
          <div className={this.state.active ? "nav" : "nav"}>
            <ul className="links">
              <li className={this.state.active ? "signin-active" : "signin-inactive"}>
                <span
                      onClick={this.handleClick}
                      style={{width: "auto"}}> <i className="fas fa-sync-alt"/>
                </span>
              </li>
            </ul>
          </div>
          <div className="form">
            {this.state.active ? (
              this.state.loggedIn ?
                (<Redirect to="/show"/>) : (
                  <LoginForm
                    spinner={spinner}
                    active={active}
                    username={username}
                    handleInputChange={this.handleInputChange}
                    password={password}
                    loginSubmit={this.loginSubmit}
                  />)
            ) : (
              this.state.signedUp ? (<Redirect to="/login"/>) : (
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
