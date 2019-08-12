import React, {Component} from "react";
import axios from "axios";
import SignupForm from "./SignupForm";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
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
    });
    // This needs to be developed . This is only a test
    this.setState({
      loggedIn: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <SignupForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          username={this.state.username}
          email={this.state.email}
          password={this.state.password}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
      </React.Fragment>
    );
  }
}

export default Signup;
