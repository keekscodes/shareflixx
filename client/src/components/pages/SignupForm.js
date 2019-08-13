import React from "react";

function SignupForm (props) {
    return (
      <form className={props.active ? "form-signup": "form-signin-down"} action="" method="post" name="form">
        <label htmlFor="fullname">First Name</label>
        <input className="form-styling" type="text" name="firstName" placeholder="" value={props.firstName} onChange={props.handleInputChange}/>
        <label htmlFor="fullname">Last Name</label>
        <input className="form-styling" type="text" name="lastName" placeholder="" value={props.lastName} onChange={props.handleInputChange}/>
        <label htmlFor="email">Email</label>
        <input className="form-styling" type="text" name="email" placeholder="" value={props.email} onChange={props.handleInputChange}/>
        <label htmlFor="username">Create Username</label>
        <input className="form-styling" type="text" name="username" placeholder="" value={props.username} onChange={props.handleInputChange}/>
        <label htmlFor="password">Password</label>
        <input className="form-styling" type="text" name="password" placeholder="" value={props.password} onChange={props.handleInputChange}/>
          <a className="btn-signup" onClick={props.signupSubmit}>Sign Up</a>
      </form>
    );
}

export default SignupForm;
