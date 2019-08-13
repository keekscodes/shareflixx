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

  componentDidMount() {
    this.isTokenExpired() ? (console.log("Please sign in or sign up")) : (window.location.href="/show");
  }

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
    // console.log(token);
    const {username, password} = this.state;
    let logInUser = {
      user: {
        username,
        password
      }
    }
    axios.post("/api/users/login", logInUser).then(res => {
      localStorage.setItem("token", res.data.user.token);
      console.log(res);
    }).then(() => {
      let token = localStorage.getItem("token");

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
    // This needs to be developed . This is only a test
  };

  isTokenExpired = () => {
    let token = localStorage.getItem("token");

    if (token) {
      setTimeout(() => {
        localStorage.removeItem("token");
      }, 3000)
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
        localStorage.setItem("token", token)
      }

      setTimeout(() => {
        this.setState({
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
                (<Redirect to="/show"/>) : (
                  <LoginForm
                    active={active}
                    username={username}
                    handleInputChange={this.handleInputChange}
                    password={password}
                    loginSubmit={this.loginSubmit}
                  />)
            ) : (
              this.state.signedUp ? (<Redirect to="/authorization"/>) : (
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
