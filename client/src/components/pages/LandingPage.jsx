import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// @material-ui/icons

// core components
// import Logo from "../Logo/logo.png";
// import Navigation from "../Navigation";
import Footer from "../Footer";
import Button from "../CustomButtons/Button";
import GridContainer from "../GridContainer/GridContainer";
import GridItem from "../GridContainer/GridItem";
// import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "../Parallax/Parallax";

import landingPageStyle from "../../assets/views/landingPage"
import "../../assets/css/material-kit-react.css"


class LandingPage extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Parallax filter image={require("../../assets/img/projector.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>ShareFlix</h1>
                <h3>
                  {/* Every landing page needs a small description after the big
                  bold title, that{"'"}s why we added this text here. Add here
                  all the information that can make you or your product create
                  the first impression. */}

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
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
        </div>
        <Footer/>
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(LandingPage);
