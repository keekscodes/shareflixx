import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import "../CardGroup/style.css";

const CardGroup = () => {
  return (
    <MDBCardGroup>
      <div className="row p-5">
        <div className="col-md-4">
      <MDBCard className="text-center">
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/11.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="bg-elegant-color-dark">
          <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
          <MDBBtn color="primary" size="md">
            Join Room
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
        </div>

        <div className="col-md-4">
      <MDBCard className="text-center">
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="bg-elegant-color-dark">
          <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
          <MDBBtn color="primary" size="md">
            Join Room
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
        </div>

        <div className="col-md-4">
      <MDBCard className="text-center">
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="bg-elegant-color-dark">
          <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
          <MDBBtn color="primary" size="md">
            Join Room
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
        </div>
      
      </div>

{/* SECOND ROW */}

      <div className="row p-5">
        <div className="col-md-4">
      <MDBCard className="text-center">
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/11.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="bg-elegant-color-dark">
          <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
          <MDBBtn color="primary" size="md">
            Join Room
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
        </div>

        <div className="col-md-4">
      <MDBCard className="text-center">
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="bg-elegant-color-dark">
          <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
          <MDBBtn color="primary" size="md">
            Join Room
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
        </div>

        <div className="col-md-4">
      <MDBCard className="text-center">
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="bg-elegant-color-dark">
          <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
          <MDBBtn color="primary" size="md">
            Join Room
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
        </div>
      
      </div>

      {/* THIRD ROW */}
      <div className="row p-5">
        <div className="col-md-4">
      <MDBCard className="text-center">
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/11.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="bg-elegant-color-dark">
          <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
          <MDBBtn color="primary" size="md">
            Join Room
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
        </div>

        <div className="col-md-4">
      <MDBCard className="text-center">
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="bg-elegant-color-dark">
          <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
          <MDBBtn color="primary" size="md">
            Join Room
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
        </div>

        <div className="col-md-4">
      <MDBCard className="text-center">
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody className="bg-elegant-color-dark">
          <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
          <MDBBtn color="primary" size="md">
            Join Room
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
        </div>
      
      </div>

    </MDBCardGroup>
  );
}

export default CardGroup;