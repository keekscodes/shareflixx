import React, {Component} from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// @material-ui/icons

// core components
import Button from "../CustomButtons/Button";
import GridContainer from "../GridContainer/GridContainer";
import GridItem from "../GridContainer/GridItem";
import Logo from "../Logo/logo2.png";
import landingPageStyle from "../../assets/views/landingPage"
import "../../assets/css/material-kit-react.css"
import Navigation from "../Navigation";
import axios from "axios";


class LandingPage extends Component {
  state = {
    user: []
  };

  componentDidMount() {
    // console.log(this.props.location.state.username);
    let token = sessionStorage.getItem("token");
    axios.get("/api/users/current", {
      headers: {
        'Content-Type': "application/json",
        'Authorization': "Token " + token
      }
    }).then(response => {
      console.log(response);
      this.setState({
        user: response.data.user
      });
      console.log(this.state.user)
    })
  };

  render() {
    const {classes} = this.props;
    // const {username} = this.state.user;
    return (
      <nav className="bg">
        <Navigation>{this.state.user.username}</Navigation>
        <div className={classes.container}>
          <GridContainer>
            <GridItem className="col-12">

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



