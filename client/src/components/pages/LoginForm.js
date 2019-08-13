import React from "react";
import {Link} from "react-router-dom";

function LoginForm(props) {
  return (
    <form className={props.active ? "form-signin" : "form-signup-left"} action="" method="post" name="form">
      <label htmlFor="username">Username</label>
      <input className="form-styling" type="text" name="username" placeholder="" value={props.username}
             onChange={props.handleInputChange}/>
      <label htmlFor="password">Password</label>
      <input className="form-styling" type="password" name="password" placeholder="" value={props.password}
             onChange={props.handleInputChange}/>
      <input type="checkbox" id="checkbox"/>
      <label htmlFor="checkbox"><span className="ui"></span>Keep me signed in</label>
      <div className="btn-animate">
        <Link to="/show" className="btn-signin" onClick={props.loginSubmit}>Sign in</Link>
      </div>
      <a href="#">Forgot your password?</a>
    </form>
  );
}

export default LoginForm;
