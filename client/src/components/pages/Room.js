import React, {Component} from "react";
import Navigation from "../Navigation";

class Room extends Component {
  render() {
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
            <input className="room-styles" type="text" style={{width: "30%"}} name="roomName" placeholder="Enter a room name"/>
          </div>
        </div>

        <div className="row text-center mt-5">
          <div className="col-md">
            <label htmlFor="roomPass" className="room-styles"><span className="vert-align">Room Password:</span></label>
          </div>
          <div className="col-md">
            <input type="password" className="room-styles" style={{width: "30%"}} placeholder="Enter a password (Optional)"/>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md">
              <a className="btn btn-outline-danger" style={{width: "100%", fontSize: "20px"}} href="/show">Create Room</a>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <p>* Please note that an id and a link will be automatically generated for you to copy and send to your person of choice.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Room;
