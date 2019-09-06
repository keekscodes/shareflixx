import React, {Component} from "react";
import Embed from "./Embed";
import Modal from "./Modal";

// var playerStatus = -1;

class Youtube extends Component {
  state = {
    inputVal: "",
    url: ""
  };

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      url: this.state.inputVal
    })
  };


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <input type="Video" style={{"width": "100%", "marginBottom": ".5em"}}
                   className="form-control" id="inputVideoId" name="inputVal" value={this.state.inputVal} onChange={this.handleChange}
                   placeholder="Enter Video ID / URL"/>
          </div>
          <div className="col-md-3">
            <button className="btn btn-success" style={{width: "100%"}} onClick={this.handleClick}>Go</button>
          </div>
          <Modal/>


          <Embed>
            <iframe id="existing-iframe-example"
                    width="640" height="360"
                    src={this.state.url ? this.state.url : "https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"}
                    // src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"
                    frameBorder="0.7"
                    title="youtube"
                    style={{"border": "solid 5px #37474F"}}
            />
          </Embed>

        </div>

      </div>
    );

  }


}

export default Youtube;
