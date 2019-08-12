import React, {Component} from 'react';

// import "../../App.css"

class Authorization extends Component {
  state = {
    active: false
  };
  handleClick = (e) => {
    this.setState({
      active: !this.state.active
    })
  };
  render() {
    return (
      <div className="container">
        <div className={this.state.active ? "frame frame-long" : "frame frame-long"}>
          <div className={this.state.active ? "nav" : "nav"}>
            <ul className="links">
              <li className={this.state.active ? "signin-active" : "signin-inactive"}><a className="btn" onClick={this.handleClick}>Sign in</a></li>
              <li className={this.state.active ? "signin-inactive" : "signin-active"}><a className="btn" onClick={this.handleClick}>Sign up </a></li>
            </ul>
          </div>

          <div className="form">
            {this.state.active ? (
            <form className={this.state.active ? "form-signin" : "form-signup-left"} action="" method="post" name="form">
              <label htmlFor="username">Username</label>
              <input className="form-styling" type="text" name="username" placeholder=""/>
              <label htmlFor="password">Password</label>
              <input className="form-styling" type="text" name="password" placeholder=""/>
              <input type="checkbox" id="checkbox"/>
              <label htmlFor="checkbox"><span className="ui"></span>Keep me signed in</label>
              <div className="btn-animate">
                <a className="btn-signin">Sign in</a>
              </div>
                  <a href="#">Forgot your password?</a>
            </form>

            ) : (

            <form className={this.state.active ? "form-signup": "form-signin-down"} action="" method="post" name="form">
              <label htmlFor="fullname">First Name</label>
              <input className="form-styling" type="text" name="firstName" placeholder=""/>
              <label htmlFor="fullname">Last Name</label>
              <input className="form-styling" type="text" name="lastName" placeholder=""/>
              <label htmlFor="email">Email</label>
              <input className="form-styling" type="text" name="email" placeholder=""/>
              <label htmlFor="username">Create Username</label>
              <input className="form-styling" type="text" name="username" placeholder=""/>
              <label htmlFor="password">Password</label>
              <input className="form-styling" type="text" name="password" placeholder=""/>
                <a className="btn-signup">Sign Up</a>
            </form>

            )}

          </div>
                   </div>
      </div>
    );
  }
}

export default Authorization;
