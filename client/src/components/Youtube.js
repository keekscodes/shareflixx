import React, {Component} from "react";
import io from "socket.io-client";
import Embed from "./Embed";

var playerStatus = -1;

class Youtube extends Component {

    
    state = {
      }




    render() {

        return (

        <div>
           
        <input type="Video" style={{"maxWidth": "300px", "marginRight": ".5em", "marginBottom": ".5em"}} className="form-control" id="inputVideoId" placeholder="Enter Video ID / URL" />
        <Embed>
        <iframe id="existing-iframe-example"
                width="640" height="360"
                src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"
                frameborder="0.7"
                style={{"border": "solid 4px #37474F"}}
        ></iframe>
        </Embed>

        {/* <script id='iframe-demo' src='https://www.youtube.com/iframe_api' >
        </script> */}
        <br></br>
        <button id="playButton" onClick="playVideo(roomnum)" style={{"marginTop": "0.5em"}} className="btn btn-primary"><i className="fa fa-play"></i> Play / <i className="fa fa-pause"></i> Pause</button>

        <button id="syncbutton" onClick="syncVideo(roomnum);syncAlert()" style={{"marginTop": "0.5em"}} className="btn btn-primary"><i className="fa fa-sync"></i> Sync</button>
        <br/>
        <button id="hostbutton" onClick="changeHost(roomnum)" style={{"marginTop": "0.5em"}} className="btn btn-primary"><i className="fas fa-users"></i> Make me the host!</button>
        </div>



        );

    }





}

export default Youtube;