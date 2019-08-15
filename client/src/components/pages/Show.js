import React, {Component} from "react";
import Jumbotron from "../Jumbotron";
import Chat from "../Chat";
import Youtube from "../Youtube";
import {Col, Row, Container} from "../Grid";


class Show extends Component {
  state = {
    toggle: false
  };

  componentDidMount() {
    this.isTokenExpired() ? (this.logOut()) : (this.reloadPage());
  }

  logOut = () => {
    window.location.reload();
    return window.location.href = "/login";
  };
  reloadPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 120000)
  };
  isTokenExpired = () => {
    let token = sessionStorage.getItem("token");

    if (token) {
      setTimeout(() => {
        sessionStorage.removeItem("token");
      }, 120000);
      return false
    } else {
      return true
    }
  };

  render() {
    return (
      <div className="mt-5">
        <Container fluid>
          <Col size="md-6">
            <h5
              style={{
                backgroundColor: "#dc3545",
                fontSize: "20px",
                borderColor: "black",
                borderStyle: "solid",
                margin: "0%",
                padding: "0%",
                position: "relative",
                top: "0px",
                textAlign: "center",
                color: "white",
                width: "30%",
                borderTopLeftRadius: "4em",

                borderTopRightRadius: "4em",
              }}>Group Name</h5>
          </Col>
        </Container>

        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <Youtube/>
              </Jumbotron>
            </Col>

            <Col size="md-6">
              <Jumbotron>
                <Row>
                  <Col size="md-12">
                    <Container fluid>
                      <div style={{height: "440px", overflow: "auto"}}>
                        <Chat/>
                      </div>
                    </Container>
                  </Col>
                </Row>
                <Row>
                </Row>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}


export default Show;
