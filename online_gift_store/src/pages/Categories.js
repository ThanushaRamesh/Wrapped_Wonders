import React from "react";
import "./Categories.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBContainer
} from "mdbreact";

const Categories = () => {
  return (
    <MDBContainer size='lg'>
      <p className='heading'> Categories </p>
      <MDBRow className='row-margin'>
        <MDBCol md='4' className='pad'>
          <MDBCard cascade className='card-ht'>
            <MDBCardImage
              cascade
              className='img-fluid'
              overlay='white-light'
              hover
              src={require("../assets/Categories/Birthday.jpg")}
            />

            <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
              <p>Birthday</p>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='4' className='pad'>
          <MDBCard cascade className='card-ht'>
            <MDBCardImage
              cascade
              className='img-fluid'
              overlay='white-light'
              hover
              src={require("../assets/Categories/Anniversary.jpg")}
            />

            <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
              <p>Anniversary</p>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='4' className='pad'>
          <MDBCard cascade className='card-ht'>
            <MDBCardImage
              cascade
              className='img-fluid'
              overlay='white-light'
              hover
              src={require("../assets/Categories/House.jpeg")}
            />

            <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
              <p>House Warming Ceremony</p>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='4' className='pad'>
          <MDBCard cascade className='card-ht'>
            <MDBCardImage
              cascade
              className='img-fluid'
              overlay='white-light'
              hover
              src={require("../assets/Categories/Men.jpg")}
            />

            <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
              <p>Gifts for Men</p>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='4' className='pad'>
          <MDBCard cascade className='card-ht'>
            <MDBCardImage
              cascade
              className='img-fluid'
              overlay='white-light'
              hover
              src={require("../assets/Categories/Women.jpg")}
            />

            <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
              <p>Gifts for Women</p>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='4' className='pad'>
          <MDBCard cascade className='card-ht'>
            <MDBCardImage
              cascade
              className='img-fluid'
              overlay='white-light'
              hover
              src={require("../assets/Categories/Kids.jpg")}
            />

            <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
              <p>Gifts for Kids</p>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Categories;
