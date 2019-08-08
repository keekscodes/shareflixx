import React, { Component } from "react";


class Login extends Component {

    state = {
        username: "",
        password: "",
        loggedIn: false
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    
    handleFormSubmit = event => {
        event.preventDefault();

        // This needs to be developed . This is only a test
        this.setState({
            loggedIn: true
        });
    }

    render() {
        return (
            <div>
                {/* <Navbar /> */}
                <div className='container'>
                    <div className="form login-form" style={{"width": "400px" , "margin": "50px auto"}}>
                        <input type="text" name="username" placeholder="username" />
                        <input type="text" name="password" placeholder="password" />
                            <div className="buttons" style={{"marginLeft" : "20%", "marginTop": "10px"}}>
                                <button className="waves-effect waves-light btn login" style={{"width": "45%","margin": "2px"}}>Login</button>
                                <a className="waves-effect waves-light btn signup" href="/signup">Signup</a>
                            </div>
                    </div>
                </div>
            </div>
        );
    }





}


export default Login;