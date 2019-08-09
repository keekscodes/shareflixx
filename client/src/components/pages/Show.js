import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import Embed from "../Embed";
import Title from "../Title";
import Button from "../Button";
import ButtonToolbar from "../ButtonToolbar";
import Footer from "../Footer";
import { Col, Row, Container } from "../Grid";

class Show extends Component {
    render() {
        return (
            <div>
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Title>App Name</Title>
                    </Col>
                </Row>
                </Container>
          <Container fluid>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                    <Embed>
                    </Embed>
                  {/* <h1>What Books Should I Read?</h1> */}
                </Jumbotron>
                </Col>
            </Row>
            </Container>
        <Container fluid>
            <Row>
                <Col size="md-6">
                <ButtonToolbar>
                    <Button>▶</Button>
                    <Button>&#9616;&nbsp;&#9612;</Button>
                    <Button>&#9632;</Button>
                    <Button>Invite</Button>
                    <Button>Skip</Button>
                    <Button>Leave</Button>
                </ButtonToolbar>
                </Col>
            </Row>
        </Container>
        <Container fluid>
        <Row>
            <Col size="md-6">
                <Footer>Here's our nice footer</Footer>
            </Col>
        </Row>
        </Container>
            </div>
            );
        }
  
}


export default Show;