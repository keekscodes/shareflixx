import React, {Component} from "react";
import LoginForm from "./LoginForm";
import axios from "axios";

class Login extends Component {

  state = {
    username: "",
    password: "",
    loggedIn: false
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
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
      this.setState({
        loggedIn: true
      });
    })
    // This needs to be developed . This is only a test
  };

  render() {
    return (
      <React.Fragment>
        <LoginForm
          username={this.state.username}
          password={this.state.password}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}/>
      </React.Fragment>
    );
  }
}


export default Login;
