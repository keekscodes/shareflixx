import React, {Component} from "react";
import Navigation from "../Navigation";
import axios from "axios";

class Room extends Component {
  state = {
    roomName: "",
    roomPassword: ""
  };

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    const {roomName} = this.state;
    let id = roomName;
    axios.post(`/api/users/show/${id}`).then(res => {
      console.log(res);
    })

  };

  render() {
    const {roomName} = this.state;
    return (
      <div className="container-fluid">
        <Navigation/>
        <div className="row mt-5">
          <div className="col-md text-center">
            <h2>Host a Room</h2>
            <p>Fill out the input fields below in order to get started with your own private room, where you can invite
              friends & family!</p>
          </div>
        </div>
        <div className="row text-center mt-5">
          <div className="col-md">
            <label htmlFor="roomName" className="room-styles"><span className="vert-align">Room Name:</span></label>
          </div>
          <div className="col-md">
            <input className="room-search" type="text" style={{width: "30%"}} name="roomName" value={this.state.roomName} onChange={this.handleChange} placeholder="Enter a room name"/>
          </div>
        </div>

        <div className="row text-center mt-5">
          <div className="col-md">
            <label htmlFor="roomPass" className="room-styles"><span className="vert-align">Room Password:</span></label>
          </div>
          <div className="col-md">
            <input type="password" className="room-search" style={{width: "30%"}} value={this.state.roomPassword} onChange={this.handleChange} placeholder="Enter a password (Optional)"/>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md">
              <a className="btn btn-outline-danger" style={{width: "100%", fontSize: "20px"}} href={`/show/${roomName}`} onClick={this.handleSubmit}>Create Room</a>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <p>* Please note that an id and a link will be automatically generated for you to copy and send to your person of choice.</p>
            </div>
          </div>
        <hr style={{background: "white"}}/>
          <div className="row text-center">
            <div className="col-md">
              <h2>Join an existing room</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input type="text" placeholder="Search by room name" className="mb-3 room-search"/>
            </div>
            <div className="col-md-4">
              <div className="red"><button className="btn-dark" style={{position: "absolute", height: "50px", width: "350px", top: "150px"}}>Join room</button></div>
            </div>
            <div className="col-md-4">
              <div className="red"><button className="btn-dark" style={{position: "absolute", height: "50px", width: "350px", top: "150px"}}>Join room</button></div>
            </div>
            <div className="col-md-4">
              <div className="red"><button className="btn-dark" style={{position: "absolute", height: "50px", width: "350px", top: "150px"}}>Join room</button></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Room;
