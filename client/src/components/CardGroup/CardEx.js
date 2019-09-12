import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import "./style.css";

const CardExample = () => {
  return (
    <MDBRow>
      <MDBCol md="4">
        <MDBCard>
          <MDBCardImage
            top
            src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon icon='share-alt' className='black-text' />
            </a>
            <MDBCardTitle id="color-blk">Host Room</MDBCardTitle>
            <hr />
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <a href='#!' className='black-text d-flex justify-content-end'>
              <h5>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default CardExample;