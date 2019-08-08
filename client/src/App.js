import React, {Component} from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";
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
    axios.get("/messages").then(response => {
      this.setState({
        messages: response.data
      })
    })
  }


  refresh = () => {
    axios.get("/messages").then(response => {
      this.setState({
        messages: response.data
      })
    })
  };

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };

  updateSubmit = (e) => {
    e.preventDefault();
    const socket = socketIOClient(this.state.endpoint);
    var username = this.state.userName;
    socket.emit("username", username);
    this.setState({
      nameSubmitted: true
    })
  };


  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/messages", {"name": this.state.userName, "message": this.state.message}).then(response => {
      console.log(response);
      this.setState({
        messages: response.data,
        message: ""
      });
      console.log(this.state.messages);
    });
  };

  render() {
   
    return (
      // <Socket uri={uri} options={options}>
        <div className="App">
          {this.state.nameSubmitted ? (<div id="entrance">
            <ul id="messages">
              {this.state.messages.map((msg, i) => {
                return (
                  <div style={{borderBottom: "5px solid forrestgreen"}} key={i}>
                    <h3>{msg.name}</h3>
                    <span>{msg.message}</span>
                    
                  </div>
                );
              })}
            </ul>
            <button className="btn btn-info">Refresh</button>
            <form action="/messages" method="POST" id="chatForm">
              <input id="userName" name="userName" value={this.state.userName} onChange={this.handleChange} disabled/>
              <input name="message" value={this.state.message} onChange={this.handleChange} id="txt"
                     placeholder="type your message here..."/>
              <button onClick={this.handleSubmit}>Send</button>
            </form>

          </div>) : (<div id="user" className="offset-md-5">
            <input onChange={this.handleChange} name="userName" value={this.state.userName} type="text"
                   placeholder="Enter a username" id="userName"/>
            <button id="enter" className="btn btn-success" onClick={this.updateSubmit}>Enter</button>
          </div>)}
        </div>
      // </Socket>
    );
  }
}

export default App;
