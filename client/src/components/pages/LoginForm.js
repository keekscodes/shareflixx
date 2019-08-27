import React, {Component} from "react";
import {Link} from "react-router-dom";

class LoginForm extends Component {
  render() {
    return (
      <form className={this.props.active ? "form-signin" : "form-signup-left"} action="" method="post" name="form">
        <label htmlFor="username">Username</label>
        <input className="form-styling" type="text" name="username" placeholder="" value={this.props.username}
               onChange={this.props.handleInputChange}/>
        <label htmlFor="password">Password</label>
        <input className="form-styling" type="password" name="password" placeholder="" value={this.props.password}
               onChange={this.props.handleInputChange}/>
        <input type="checkbox" id="checkbox"/>
        <label htmlFor="checkbox"><span className="ui"/>Keep me signed in</label>
        <div className="btn-animate">
          {/* <Link to="/show" className="btn-signin btn-danger" onClick={props.loginSubmit}>{props.loggedIn ? <i class="fas fa-spinner fa-spin"/> : "Sign In"}</Link> */}
          <Link to="/show" className="btn-signin btn-danger" onClick={this.props.loginSubmit}>{this.props.spinner ? <i className="fas fa-spinner fa-spin"/> : "Sign In"}</Link>
        </div>
        <a href="/login" className="pw">Forgot your password?</a>
      </form>
    );

  }
}

export default LoginForm;
