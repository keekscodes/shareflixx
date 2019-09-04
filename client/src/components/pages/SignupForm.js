import React from "react";
import {Link} from "react-router-dom";

function SignupForm(props) {
  return (
    <form className={props.active ? "form-signup" : "form-signin-down"} action="" method="post" name="form">
      <label htmlFor="firstName">First Name</label>
      <input className="form-styling" type="text" name="firstName" placeholder="" value={props.firstName}
             onChange={props.handleInputChange}/>
      <label htmlFor="lastName">Last Name</label>
      <input className="form-styling" type="text" name="lastName" placeholder="" value={props.lastName}
             onChange={props.handleInputChange}/>
      <label htmlFor="email">Email</label>
      <input className="form-styling" type="email" name="email" placeholder="" value={props.email}
             onChange={props.handleInputChange}/>
      <label htmlFor="username">Create Username</label>
      <input className="form-styling" type="text" name="username" placeholder="" value={props.username}
             onChange={props.handleInputChange}/>
      <label htmlFor="password">Password</label>
      <input className="form-styling" type="password" name="password" placeholder="" value={props.password}
             onChange={props.handleInputChange}/>
      <Link to="/authorization" className="btn-signup" onClick={props.signupSubmit}>Sign Up</Link>
    </form>
  );
}

export default SignupForm;
