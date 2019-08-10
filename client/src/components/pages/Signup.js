import React, { Component } from "react";
import axios from "axios";
class Signup extends Component {
    state = {
        firstName: "",
        lastName: "",
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
        const user = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        }
        axios.post("/api/users", user).then(res => {
            console.log(res);
        })
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
                    <form className="form signup-form" style={{"width": "400px", "margin": "50px auto"}}>
                        <input type="text" name="firstName" placeholder="First Name" 
                        onChange={this.handleInputChange} value={this.state.firstName}/>
                        <input type="text" name="lastName" placeholder="lastName" 
                        onChange={this.handleInputChange} value={this.state.lastName}/>
                        <input type="text" name="username" placeholder="username" 
                        onChange={this.handleInputChange} value={this.state.username}/>
                        <input type="text" name="email" placeholder="email"
                        onChange={this.handleInputChange} value={this.state.email}/>
                        <input type="password" name="password" placeholder="password"
                        onChange={this.handleInputChange} value={this.state.password}/>
                            <div className="buttons" style={{"marginLeft" : "20%", "marginTop": "10px"}}>
                                <button className="waves-effect waves-light btn signup" onClick={this.handleFormSubmit}  style={{"width": "45%","margin": "2px"}}>Signup</button>
                                <a className="waves-effect waves-light btn login" href="/login">Login</a>
                            </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Signup;