import React, {Component} from "react";
import io from "socket.io-client";
import Embed from "./Embed";
import ButtonToolbar from "./ButtonToolbar";
import Button from "./Button";
import Modal from "./Modal";

var playerStatus = -1;

class Youtube extends Component {
  state = {}

  playVideo = () => {
    return "playVideo(roomnum)"
  }

  syncVideo = () => {
    return "syncVideo(roomnum);syncAlert();"
  }

  changeHost = () => {
    return "changeHost(roomnum)"
  }

  render() {
    return (
      <div>
        <input type="Video" style={{"maxWidth": "300px", "marginRight": ".5em", "marginBottom": ".5em"}}
               className="form-control" id="inputVideoId" placeholder="Enter Video ID / URL"/>

        <button style={{"float": "left", "backgroundColor": "indigo", "height" : "auto" , "marginBottom": ".5em"}} type="button" className="nonmobile-hide btn btn-info btn-sm invite-button" data-toggle="modal" data-target="#inviteModal"><span>Invite   </span><i style={{"width": "20px", "height": "20px"}} className="fas fa-user-plus"></i></button>
        <Modal></Modal>


        <Embed>
          <iframe id="existing-iframe-example"
                  width="640" height="360"
                  src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"
                  frameBorder="0.7"
                  title="youtube"
                  style={{"border": "solid 4px #37474F"}}
          ></iframe>
        </Embed>

        {/* <script id='iframe-demo' src='https://www.youtube.com/iframe_api' >
        </script> */}
        <br></br>
       <ButtonToolbar>

        <Button id="playButton" onClick={this.playVideo}>
          <i className="fa fa-play"></i> Play / <i className="fa fa-pause"></i> Pause
        </Button>

        {/* <button id="playButton" onClick={this.playVideo}style={{"marginTop": "0.5em"}} className="btn btn-primary">
          <i className="fa fa-play"></i> Play / <i className="fa fa-pause"></i> Pause
        </button> */}

        <Button id="syncbutton" onClick={this.syncVideo}>
        <i className="fa fa-sync"></i> Sync
        </Button>

        {/* <button id="syncbutton" onClick={this.syncVideo} style={{"marginTop": "0.5em"}}
                className="btn btn-primary"><i className="fa fa-sync"></i> Sync
        </button> */}
       
       <Button id="hostbutton" onClick={this.changeHost}>
       <i className="fas fa-users"></i> Make me the host!
        </Button>

       

        {/* <button id="hostbutton" onClick={this.changeHost} style={{"marginTop": "0.5em"}}
                className="btn btn-primary"><i className="fas fa-users"></i> Make me the host!
        </button> */}

      </ButtonToolbar>
      </div>
    );

  }


}

export default Youtube;
