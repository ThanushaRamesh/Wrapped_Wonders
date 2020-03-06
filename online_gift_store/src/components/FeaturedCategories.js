import React from "react";
// import "./Categories.css";
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

const FeaturedCategories = () => {
  return (
    <div>
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
        </MDBRow>
      </MDBContainer>
      <a href='Categories'>See all Categories</a>
    </div>
  );
};
export default FeaturedCategories;
