import React, {Component} from "react";
import io from "socket.io-client";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      message: "",
      nameSubmitted: false,
      messages: [],
      endpoint: "http://localhost:8080/"
    }
  }


  componentDidMount() {
    this.socket = io("/");
    this.socket.on("message", message => {
      this.setState({
        messages: [ ...this.state.messages, message]
      });
    })
  }


  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };

  updateSubmit = (e) => {
    e.preventDefault();
    const socket = io(this.state.endpoint);
    var username = this.state.userName;
    socket.emit("username", username);
    this.setState({
      nameSubmitted: true
    })
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const body = e.target.value
    if(e.keyCode === 13 && body) {
      const message = {
        body,
        from: this.state.userName
      }
      this.setState({
        messages: [ ...this.state.messages, message],
        message: ""
      });
      this.socket.emit("message", message)
      
    }

  };

  render() {
   const messages = this.state.messages.map((msg,i) => {
     return (
       <li key={i}>
         <b>{msg.from}:</b> <p>{msg.body}</p>
       </li> 
     )
   })
    return (
        <div className="App">
          {this.state.nameSubmitted ? (<div id="entrance">
            <ul id="messages">
             {messages}
            </ul>
            <div id="chatForm">
              <input id="userName" name="userName" value={this.state.userName} onChange={this.handleChange} disabled/>
              <input name="message" value={this.state.message} onChange={this.handleChange} id="txt"
                     placeholder="type your message here..." onKeyUp={this.handleSubmit}/>
              </div>
          </div>) : (<div id="user" className="offset-md-5">
            <input onChange={this.handleChange} name="userName" value={this.state.userName} type="text"
                   placeholder="Enter a username" id="userName"/>
            <button id="enter" className="btn btn-success" onClick={this.updateSubmit}>Enter</button>
          </div>)}
        </div>
    );
  }
}

export default App;
