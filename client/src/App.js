import React, {Component} from "react";
import {Socket} from 'react-socket-io';
import axios from "axios";
import "./App.css";

const uri = "http://localhost:8080";
const options = {transports: ["websocket"]};

class App extends Component {

  state = {
    userName: "",
    message: "",
    nameSubmitted: false,
    messages: []
  };

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

  updateSubmit = () => {
    this.setState({
      nameSubmitted: true
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/messages", {"name": this.state.userName, "message": this.state.message}).then(response => {
      console.log(response);
      this.setState({
        messages: response.data
      });
      console.log(this.state.messages);
    });
  };

  render() {
    return (
      <Socket uri={uri} options={options}>
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
            <button className="btn btn-info" onClick={this.refresh}>Refresh</button>
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
      </Socket>
    );
  }
}

export default App;
