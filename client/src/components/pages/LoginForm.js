import React, {Component} from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div className='container'>
        <div className="form login-form" style={{"width": "400px", "margin": "50px auto"}}>
          <input type="text" name="username" placeholder="username" value={this.props.username}
                 onChange={this.props.handleInputChange}/>
          <input type="text" name="password" placeholder="password" value={this.props.password}
                 onChange={this.props.handleInputChange}/>
          <div className="buttons" style={{"marginLeft": "20%", "marginTop": "10px"}}>
            <button className="waves-effect waves-light btn login" style={{"width": "45%", "margin": "2px"}}
                    onClick={this.props.handleFormSubmit}>Login
            </button>
            <a className="waves-effect waves-light btn signup" href="/signup">Signup</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
