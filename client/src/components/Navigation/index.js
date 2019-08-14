
import React from "react";
import Logo from '../Logo/logo.png';

import "./style.css"

function Navigation() {
  return (

      <nav className="navbar navbar-expand-lg">
        {/* <a className="navbar-brand" href="/">
          Video Phone
        </a> */}
        <a className="navbar-brand js-scroll-trigger" href="/show"><img src={Logo} alt="App logo" height="65px" width="100px" /></a>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end float-left">

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-user-ninja"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  Account Settings
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Log Out
                </a>
              </div>
            </li>
          </ul>
    
        </div>
      </nav>
    
  )
}
export default Navigation;