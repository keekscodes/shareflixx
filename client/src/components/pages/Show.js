import React, {Component} from "react";
import Chat from "../Chat";
import Youtube from "../Youtube";
import Navigation from "../Navigation/index"
import axios from "axios";

class Show extends Component {
  state = {
    toggle: false,
    user: []
  };

  componentDidMount() {
    // console.log(this.props.location.state.username);
    this.isTokenExpired() ? (this.logOut()) : (this.reloadPage());
    this.getToken()
  }

  getToken = () => {
    let token = sessionStorage.getItem("token");

    axios.get("/api/users/current", {
      headers: {
        'Content-Type': "application/json",
        'Authorization': "Token " + token
      }
    }).then(res => {
      this.setState({
        user: res.data.user
      })
    })
  };

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
        {/*<Navigation username={this.props.location.state.username}/>*/}
        <Navigation>{this.state.user.username}</Navigation>
        <div className="row">
          <div className="col-md-9">
            <Youtube/>
          </div>
          <div id="message-form" className="col-md-3">
            <Chat username={this.state.user.username}/>
          </div>
        </div>
      </div>
    );
  }

}


export default Show;
