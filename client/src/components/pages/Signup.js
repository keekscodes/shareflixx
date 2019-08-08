import React, { Component } from "react";


class Signup extends Component {

    state = {
        username: "",
        email: "",
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
                    <div className="form signup-form">
                        <input type="text" name="username" placeholder="username" 
                        onChange={this.handleInputChange}/>
                        <input type="text" name="email" placeholder="email"
                        onChange={this.handleInputChange} />
                        <input type="password" name="password" placeholder="password"
                        onChange={this.handleInputChange} />
                            <div className="buttons">
                                <button className="waves-effect waves-light btn signup" onClick={this.handleFormSubmit}>Signup</button>
                                <a className="waves-effect waves-light btn login" href="/login">Login</a>
                            </div>
                    </div>
                </div>
            </div>
        );
    }





}


export default Signup;