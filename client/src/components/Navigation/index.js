import React, {Component} from "react";
import Logo from '../Logo/navWht.png';
import {Link} from 'react-router-dom';
import "./style.css";

class Navigation extends Component {

  state = {
    pathName: ""
  }
  
  logOut = () => {
    sessionStorage.removeItem("token");
  }
  render() {
    const {pathname} = window.location;
    return (
      <div className="navbar navbar-expand-lg">
        <a className="navbar-brand js-scroll-trigger" href="/show">
          <img src={Logo} alt="App logo"/>
          {/* <img src="../assets/img/logo.png" alt="App logo" height="70px"width="100px"/> */}

        </a>
  
        <div className="collapse navbar-collapse justify-content-end">
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
                <div className="dropdown-divider"/>
                <Link className="dropdown-item" to="/login" onClick={this.logOut}>
                  {pathname === "/show" ? ("Log Out") : "Sign In"}
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navigation;
