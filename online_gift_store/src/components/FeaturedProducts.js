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
import { Link } from "react-router-dom";
import { MDBAnimation } from "mdbreact";



const FeaturedCategories = () => {
  return (
    <div>
            <MDBAnimation reveal type='fadeIn'>

      <MDBContainer size='lg'>
        <p className='home-title'> Best Selling Gifts </p>
        <MDBRow className='row-margin'>
          <MDBCol md='4' className='pad'>
            <MDBCard className='card-ht'>
              <MDBCardImage
                cascade
                className='img-fluid'
                overlay='white-light'
                hover
                src={"https://raw.githubusercontent.com/ThanushaRamesh/Wrapped_Wonders/master/online_gift_store/src/assets/Anniversary/cake.jpg"}
              />
              <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
              <p>
                <Link to='/products' className='Link-clr'>
                Divine Chocolate Cake
                </Link>
              </p>
              </div>
            </MDBCard>
          </MDBCol>

          <MDBCol md='4' className='pad'>
            <MDBCard className='card-ht'>
              <MDBCardImage
                cascade
                className='img-fluid'
                overlay='white-light'
                hover
                src={"https://raw.githubusercontent.com/ThanushaRamesh/Wrapped_Wonders/master/online_gift_store/src/assets/Anniversary/teddy.jpg"}
              />
              <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
                <p>Soft & Cute Teddy Bear</p>
              </div>
            </MDBCard>
          </MDBCol>

          <MDBCol md='4' className='pad'>
            <MDBCard className='card-ht'>
              <MDBCardImage
                cascade
                className='img-fluid'
                overlay='white-light'
                hover
                src={"https://raw.githubusercontent.com/ThanushaRamesh/Wrapped_Wonders/master/online_gift_store/src/assets/Anniversary/dinner.jpg"}
              />
              <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
                <p>Hand-Painted Stoneware Dinner</p>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </MDBAnimation>

    </div>
  );
};
export default FeaturedCategories;
