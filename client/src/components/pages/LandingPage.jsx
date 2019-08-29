import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


// @material-ui/icons

// core components
// import Logo from "../Logo/logo.png";
// import Footer from "../Footer";
import Button from "../CustomButtons/Button";
import GridContainer from "../GridContainer/GridContainer";
import GridItem from "../GridContainer/GridItem";
// import Grid, { Container, Col, Row } from "../Grid/index";
// import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import NavPills from "components/NavPills/NavPills.jsx";
import Logo from "../Logo/logo2.png";

import landingPageStyle from "../../assets/views/landingPage"
import "../../assets/css/material-kit-react.css"
import { conatinerFluid } from "../../assets/jss/material-kit-react";
import Navigation from "../Navigation";



class LandingPage extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <nav className="bg">
          <div className={conatinerFluid}>
            <GridContainer >
              <GridItem className="col-12">

              <Navigation></Navigation>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <img className="mb-5" src={Logo} alt="App logo"/>
                <h3>
                  ShareFlix & Chill? We've got you covered. Browse our MERN Full Stack application today to watch movies
                  with Friends & Family. ANYWHERE | ANYTIME!
                </h3>
                <br/>
                <Button
                  color="danger"
                  size="lg"
                  href="/login"
                  rel="noopener noreferrer"
                >
                  Get Started
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        <div className={classNames(classes.main, classes.mainRaised)}>
        </div>
        {/* <Footer/> */}
      </nav>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object
};

// export default withStyles(landingPageStyle)(LandingPage);
export default withStyles(landingPageStyle)(LandingPage);



