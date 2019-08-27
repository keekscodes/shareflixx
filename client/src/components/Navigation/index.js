import React, {Component} from "react";
import Logo from '../Logo/logo.png';

import "./style.css"

class Navigation extends Component {
  logOut = () => {
    sessionStorage.removeItem("token");
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        {/* <a className="navbar-brand" href="/">
            Video Phone
          </a> */}
        <a className="navbar-brand js-scroll-trigger" href="/show">
          <img src={Logo} alt="App logo" height="70px"width="100px"/>
        </a>
  
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end float-left">
  
            <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-user-ninja"></i>
                </span>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/profile">
                  Account
                </a>
                {/* <a className="dropdown-item" href="/settings">
                  Account Settings
                </a> */}
                <div className="dropdown-divider"/>
                <a className="dropdown-item" href="/login" onClick={this.logOut}>
                  Log Out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation;
