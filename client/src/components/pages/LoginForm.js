import React, {Component} from "react";

class SignupForm extends Component {
  render() {
    return (
      <div className='container'>
        <div className="form signup-form" style={{"width": "400px", "margin": "50px auto"}}>
          <input type="text" name="firstName" placeholder="First Name"
                 onChange={this.props.handleInputChange} value={this.props.firstName}/>
          <input type="text" name="lastName" placeholder="lastName"
                 onChange={this.props.handleInputChange} value={this.props.lastName}/>
          <input type="text" name="username" placeholder="username"
                 onChange={this.props.handleInputChange} value={this.props.username}/>
          <input type="text" name="email" placeholder="email"
                 onChange={this.props.handleInputChange} value={this.props.email}/>
          <input type="password" name="password" placeholder="password"
                 onChange={this.props.handleInputChange} value={this.props.password}/>
          <div className="buttons" style={{"marginLeft": "20%", "marginTop": "10px"}}>
            <button className="waves-effect waves-light btn signup" onClick={this.props.handleFormSubmit}
                    style={{"width": "45%", "margin": "2px"}}>Signup
            </button>
            <a className="waves-effect waves-light btn login" href="/login">Login</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
