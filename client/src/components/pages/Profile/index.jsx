import React, {Component} from "react";
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";


// @material-ui/icons

// core components
import Navigation from "../../Navigation/index";
import Footer from "../../Footer/index";
// import Card from "../../Card"
import "./style.css"
// import {Col, Row, Container} from "../../Grid";
// import {Row, Container} from "../../GridContainer/GridContainer";
// import {Col} from "../../GridContainer/GridItem";
// import GridItem from "../../GridContainer/GridItem";

// import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import NavPills from "components/NavPills/NavPills.jsx";
// import Parallax from "../Parallax/Parallax";

// import landingPageStyle from "../assets/views/landingPage"
// import "../../assets/css/material-kit-react.css"

class Profile extends Component {
  render() {
    return (
      <div>

        <Navigation>

        </Navigation>

        <div className="container-fluid">
          <div className="row border-bottom">
            <div className="col-6">
              <h1 className="text-left">Your Profile</h1>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-6">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="/overview">Overview</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer>

        </Footer>
      </div>
    )
  }
}

export default Profile;
