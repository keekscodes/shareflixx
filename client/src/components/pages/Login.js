import React, { Component } from "react";
import axios from "axios";

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

        const {username, password} = this.state;

        const user = {
            user: {
                username,
                password
            }
        }
        // axios.post("/api/users/login", user).then(function(response) {
        //     console.log(response);
            
        // });

        let token = sessionStorage.getItem("token")
        console.log(token);

        axios.get("/api/users/current", {
            headers: {
                'Content-Type': "application/json",
                'Authorization': "Token " + token
            }
        }).then(res => {
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
                    <div className="form login-form" style={{"width": "400px" , "margin": "50px auto"}}>
                        <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange}/>
                        <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange}/>
                            <div className="buttons" style={{"marginLeft" : "20%", "marginTop": "10px"}}>
                                <button className="waves-effect waves-light btn login" style={{"width": "45%","margin": "2px"}} onClick={this.handleFormSubmit}>Login</button>
                                <a className="waves-effect waves-light btn signup" href="/signup">Signup</a>
                            </div>
                    </div>
                </div>
            </div>
        );
    }





}


export default Login;