import React, {Component} from "react";
import Jumbotron from "../Jumbotron";
import Navigation from "../Navigation";
// import Embed from "../Embed";
import Title from "../Title";
import Button from "../Button";
// import ButtonToolbar from "../ButtonToolbar";
import Footer from "../Footer";
import Card from "../Card";
import Chat from "../Chat";
import Youtube from "../Youtube";
import {Col, Row, Container} from "../Grid";
import Modal from "../Modal";
import Logo from '../Logo/logo.png';

class Show extends Component {
  render() {
    return (
      <div>

        
       <div className="mb-5">

        <Navigation></Navigation>
       </div>
        
          {/* <Container fluid> */}
        
          {/* <Row> */}
            {/* <Col size="md-6">
              {/* <Title>App Name</Title> */}
            {/* </Col>  */}

            {/* <Col size="md-3">
            <button style={{"backgroundColor": "#06088d"}} type="button" className="nonmobile-hide btn btn-info btn-sm invite-button" data-toggle="modal" data-target="#inviteModal"><i style={{"width": "30px", "height": "30px"}} className="fas fa-user-plus"></i><h5>Invite</h5></button>
            <Modal></Modal>
            <a class="navbar-brand js-scroll-trigger" href="/show"><img src={Logo} alt="App logo" height="40px" width="100px" /></a>
            </Col> */}

            {/* <Col size="md-3">
            {/* <Container> */}
            {/* <Button>Home</Button>
            <Button>Logout</Button>
            {/* </Container> */}
            {/* </Col>  */}


          {/* </Row> */}
        {/* </Container> */}

        <Container fluid>
         
              {/* <h5
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
                  // backgroundImage:`url(${"http://images4.fanpop.com/image/photos/23100000/Green-leaf-close-up-green-23162757-2560-1920.jpg"})`,
                  // backgroundSize: "100px"
                }}>Group Name</h5> */}
      
        </Container>

        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                {/* <Embed>
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/lXMskKTw3Bc" title="The best thing you'll ever see"></iframe>
                    </Embed> */}
                <Youtube></Youtube>
              </Jumbotron>
            </Col>

            <Col size="md-6">
              <Jumbotron>
                <Row>
                  <Col size="md-6">
                    <Container fluid>
                      <Chat/>
                    </Container>
                    {/* <Card>
                            <div class="card-body">
                                <h5 class="card-title">Chat Window</h5>
                                <p class="card-text">Hello.</p>
                            </div>
                        </Card> */}
                  </Col>
                  <Col size="md-6">
                    <Card>
                      <div className="card-body">
                        <h5 className="card-title">Users</h5>
                        <ul>
                          <li>Me</li>
                        </ul>
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  {/* <Container fluid
                        style={{
                           backgroundColor:"white"
                        }}>
                        <Chat></Chat>
                        </Container> */}
                </Row>
              </Jumbotron>
            </Col>

          </Row>
        </Container>
        {/* <Container fluid>
          <Row>
            <Col size="md-6">
              <ButtonToolbar>
                <Button>▶</Button>
                <Button>&#9616;&nbsp;&#9612;</Button>
                <Button>&#9632;</Button>
                <Button>Invite</Button>
                <Button>Skip</Button>
                <Button>Make me the host</Button>
                <Button>Leave</Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container> */}

        <Footer></Footer>

      </div>
    );
  }

}


export default Show;
