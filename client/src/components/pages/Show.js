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
              <Title>App Name</Title>
            </Col>  */}

            {/* <Col size="md-3"> */}

            {/* <Modal></Modal> */}

            {/* </Col> */}

            {/* <Col size="md-3">
            <Container> 
            <Button>Home</Button>
            <Button>Logout</Button>
            </Container> 
            </Col>  */}


          {/* </Row>
        </Container> */}

        {/* <Container fluid> */}
         
              {/* <h5
              
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
                  // backgroundImage:`url(${"http://images4.fanpop.com/image/photos/23100000/Green-leaf-close-up-green-23162757-2560-1920.jpg"})`,
                  // backgroundSize: "100px"

                }}>Group Name</h5> */}
      
        {/* </Container> */}

                {/* }}>Group Name</h5>
            </Col>
          </Row>
        </Container> */}

        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                {/* <Embed>
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/lXMskKTw3Bc" title="The best thing you'll ever see"></iframe>
                    </Embed> */}
                <Youtube></Youtube>
                {/* <h1>What Books Should I Read?</h1> */}
              </Jumbotron>
            </Col>

            <Col size="md-6">
              <Jumbotron>
                <Row>
                  <Col size="md-12">
                    <Container fluid>
                      <div style={{height: "440px", overflow: "scroll"}}>
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
