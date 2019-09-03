import React, {Component} from "react";
import Chat from "../Chat";
import Youtube from "../Youtube";
import Navigation from "../Navigation/index"

class Show extends Component {
  state = {
    toggle: false
  };

  componentDidMount() {
    console.log(this.props.location.state.username);
    this.isTokenExpired() ? (this.logOut()) : (this.reloadPage());
  }

  logOut = () => {
    window.location.reload();
    return window.location.href = "/login";
  };
  reloadPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 120000)
  };
  isTokenExpired = () => {
    let token = sessionStorage.getItem("token");

    if (token) {
      setTimeout(() => {
        sessionStorage.removeItem("token");
      }, 120000);
      return false
    } else {
      return true
    }
  };

  render() {
    return (
      <div id="show-route" className="container-fluid">
        <Navigation/>
        <div className="row">
          <div className="col-md-9">
            <Youtube/>
          </div>
          <div id="message-form" className="col-md-3">
            <Chat username={this.props.location.state.username}/>
          </div>
        </div>
      </div>
    );
  }

}


export default Show;
