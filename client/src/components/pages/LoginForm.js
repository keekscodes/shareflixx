import React from "react";
import {Link} from "react-router-dom";
// import Navigation from "../Navigation/index";


function LoginForm (props) {
  const {active, username, handleInputChange, password, loginSubmit, spinner} = props;
    return (
      <form className={active ? "form-signin" : "form-signup-left"} action="" method="post" name="form">
        <label htmlFor="username">Username</label>
        <input id="usernameform" className="form-styling" type="text" name="username" placeholder="" value={username}
               onChange={handleInputChange}/>
        <label htmlFor="password">Password</label>
        <input id="passwordform" className="form-styling" type="password" name="password" placeholder="" value={password}
               onChange={handleInputChange}/>
        <input type="checkbox" id="checkbox"/>
        <label htmlFor="checkbox"><span className="ui"/>Keep me signed in</label>
        <div className="btn-animate">
          {/* <Link to="/show" className="btn-signin btn-danger" onClick={loginSubmit}>{loggedIn ? <i class="fas fa-spinner fa-spin"/> : "Sign In"}</Link> */}
          <Link to="/room" className="btn-signin" onClick={loginSubmit}>{spinner ? <i className="fas fa-spinner fa-spin"/> : "Sign In"}</Link>
        </div>
        <a href="/login" className="pw">Forgot your password?</a>
      </form>
    );
}

export default LoginForm;

