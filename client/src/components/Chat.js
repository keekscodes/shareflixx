import React, {Component} from "react";
import io from "socket.io-client";
import moment from "moment";

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      message: "",
      nameSubmitted: false,
      messages: [],
      users: [],
      endpoint: "http://localhost:3001/"
    }
  }

  componentDidMount() {
    this.socket = io(this.state.endpoint);
    this.socket.on("connect", () => {
      console.log("connected");

      this.socket.on("username", (username) => {
        console.log(username);
        this.setState({
          users: [...this.state.users, username]
        });
      });

      this.socket.on("message", message => {
        this.setState({
          messages: [...this.state.messages, message]
        });
      });
      this.socket.on("messages", data => {
        console.log("You have joined room", data)
      });

      this.socket.emit('create', "abc");

    });
  }


  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };

  updateSubmit = (e) => {
    e.preventDefault();
    var username = this.state.userName;
    this.socket.emit("username", username);
    this.setState({
      nameSubmitted: true
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const body = e.target.value;
    if (e.keyCode === 13 && body) {
      const message = {
        body,
        from: this.state.userName,
        time: moment().format('llll')
      };
      this.setState({
        messages: [...this.state.messages, message],
        message: ""
      });
      this.socket.emit("message", message)

    }

  };

  render() {
    const messages = this.state.messages.map((msg, i) => {
      console.log(this.state.messages);
      return (
        <li key={i}>
          <b>{msg.from} ({msg.time}):</b> <p>{msg.body}</p>
        </li>
      )
    });

    const activeUsers = this.state.users.map((usr, i) => {
      return (
        <div key={i}>
          {usr}
        </div>
      );
    });

    return (
      <div className="container">
        {this.state.nameSubmitted ? (<div className="row">
            <div id="entrance">
              <ul id="messages row">
                <li>
                  {activeUsers}
                </li>
                {messages}
              </ul>
            </div>
            <div id="chatForm">
              <span className="userName" name="userName">{this.state.userName}</span>
              <input className="msg" name="message" value={this.state.message} onChange={this.handleChange} id="txt"
                     placeholder="Type your message here & press enter..." onKeyUp={this.handleSubmit}/>
            </div>

          </div>

        ) : (<div id="user" className="row">
          <input onChange={this.handleChange} name="userName" value={this.state.userName} type="text"
                 placeholder="Enter a nickname" id="userName"/>
          <button id="enter" className="btn btn-success" onClick={this.updateSubmit}>Start Chatting</button>
        </div>)}
      </div>
    );
  }
}

export default Chat;
