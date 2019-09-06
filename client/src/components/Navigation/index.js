import React, {Component} from "react";
import Logo from '../Logo/navWht.png';
import {Link} from 'react-router-dom';
import "./style.css";
import axios from "axios";

class Navigation extends Component {

  state = {
    pathName: "",
    user: []
  };

  logOut = () => {
    sessionStorage.removeItem("token");
  };

  componentDidMount() {
    let token = sessionStorage.getItem("token");

    if (token) {
      axios.get("/api/users/current", {
        headers: {
          'Content-Type': "application/json",
          'Authorization': "Token " + token
        }
      }).then(res => {
        this.setState({
          user: res.data.user
        })
      });
    }
  }


  render() {
    // const {pathname} = window.location;
    console.log("DATA -> ",this.state.user);
    const {image} = this.state.user;
    let token = sessionStorage.getItem("token");
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
                  <i className="fa fa-user-ninja"/>
                </span>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                {/*<span className="dropdown-item">Welcome, {this.props.username ? this.props.username : "User"}</span>*/}
                <img id="profileImage" src={image ? `${image}` : "https://cdn0.iconfinder.com/data/icons/cyptocurrency-line/32/anonymouscryptocurrency_crypto_people-512.png"} alt="" height="50px" width="auto"/>
                <span className="dropdown-item">{this.props.children || "Welcome, User"}</span>
                <a className="dropdown-item upper" href="/profile">
                  Account
                </a>
                <div className="dropdown-divider"/>
                <Link className="dropdown-item upper" to="/login" onClick={this.logOut}>
                  {/*{pathname === "/show" ? ("Log Out") : "Sign In"}*/}
                  {token ? ("Log Out") : "Sign In"}
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
