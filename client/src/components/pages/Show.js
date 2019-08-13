import React, {Component} from "react";
import Jumbotron from "../Jumbotron";
import Navigation from "../Navigation";
import Title from "../Title";
import Button from "../Button";
import Footer from "../Footer";
import Card from "../Card";
import Chat from "../Chat";
import Youtube from "../Youtube";
import {Col, Row, Container} from "../Grid";



class Show extends Component {
  render() {
    return (
      <div>
        <div className="mb-5">
          <Navigation/>
        </div>
        <Container fluid>

          <Row>
            <Col size="md-6">
              <h5          
                style={{
                  backgroundColor: "indigo",
                  fontSize: "20px",
                  borderColor: "black",
                  borderStyle: "solid",
                  margin: "0%",
                  padding: "0%",
                  position: "relative",
                  top: "20px",
                  textAlign: "center",
                  color: "white",
                  width: "30%",
                  borderTopLeftRadius: "4em",
                  borderTopRightRadius: "4em",                
                }}>Group Name</h5> 
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>            
                <Youtube></Youtube>              
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
        <Footer></Footer>
      </div>
    );
  }

}


export default Show;
