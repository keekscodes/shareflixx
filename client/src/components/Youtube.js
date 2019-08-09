import React, {Component} from "react";
import io from "socket.io-client";

class Youtube extends Component {

    state = {
      }

    render() {

        return (

        <div >

        <iframe id="existing-iframe-example"
                width="640" height="360"
                src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"
                frameborder="1"
                style={{"border": "solid 4px #37474F"}}
        ></iframe>


        <button id="playButton" onClick="playVideo(roomnum)" style={{"marginTop": "0.5em"}} className="btn btn-primary"><i className="fa fa-play"></i> Play / <i className="fa fa-pause"></i> Pause</button>

        <button id="syncbutton" onClick="syncVideo(roomnum);syncAlert()" style={{"marginTop": "0.5em"}} className="btn btn-primary"><i className="fa fa-sync"></i> Sync</button>
        <br/>
        <button id="hostbutton" onClick="changeHost(roomnum)" style={{"marginTop": "0.5em"}} className="btn btn-primary"><i className="fas fa-users"></i> Make me the host!</button>
        </div>



        );

    }





}

export default Youtube;