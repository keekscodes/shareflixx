import React, {Component} from "react";
// @material-ui/icons

// core components
import Navigation from "../../Navigation/index";
import Footer from "../../Footer/index";
import "./style.css"

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row border-bottom">
            <div className="col-6">
              <h1 className="text-left">Manage Your Account</h1>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-6">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="/overview">Settings</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Profile;
