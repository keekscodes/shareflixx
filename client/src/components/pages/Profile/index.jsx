import React, {Component} from "react";
import Navigation from "../../Navigation/index";
// @material-ui/icons

// core components
import "./style.css"

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Navigation />
          <div className="row border-bottom">
            <div className="col-6">
              <h2 className="text-left">Manage Your Account</h2>
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
