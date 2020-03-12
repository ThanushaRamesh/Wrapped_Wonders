import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
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
    <MDBContainer className="aboutus-container">
      <p className='heading'> Categories </p>
      <MDBRow className='row-margin'>
        <MDBCol md='4' className='pad'>
        <Link to='/products/birthday' className='Link-clr'>
          <MDBCard  className='card-ht'>
            <MDBCardImage
              cascade
              className='img-fluid'
              overlay='white-light'
              hover
              src={require("../assets/Categories/Birthday.jpg")}
            />

            <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
              <p>
                  Birthday
              </p>
              {/* <button onClick={this.onSubmit}>Birthday</button> */}
            </div>
          </MDBCard>
          </Link>

        </MDBCol>
        <MDBCol md='4' className='pad'>
        <Link to='/products/anniversary' className='Link-clr'>

          <MDBCard  className='card-ht'>
            <MDBCardImage
              cascade
              className='img-fluid'
              overlay='white-light'
              hover
              src={require("../assets/Categories/Anniversary.jpg")}
            />

            <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
              <p>
                  Anniversary
              </p>
            </div>
          </MDBCard>
          </Link>
        </MDBCol>
        <MDBCol md='4' className='pad'>
        <Link to='/products/house' className='Link-clr'>
          <MDBCard  className='card-ht'>
            <MDBCardImage
              cascade
              className='img-fluid'
              overlay='white-light'
              hover
              src={require("../assets/Categories/House.jpeg")}
            />

            <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
              <p>
                  House Warming Ceremony
              </p>
            </div>
          </MDBCard>
          </Link>
        </MDBCol>
        <MDBCol md='4' className='pad'>
        <Link to='/products/men' className='Link-clr'>
          <MDBCard  className='card-ht'>
            <MDBCardImage
              cascade
              className='img-fluid'
              overlay='white-light'
              hover
              src={require("../assets/Categories/Men.jpg")}
            />

            <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
              <p>
                  Gifts for Men
              </p>
            </div>
          </MDBCard>
          </Link>
        </MDBCol>
        <MDBCol md='4' className='pad'>
        <Link to='/products/women' className='Link-clr'>
          <MDBCard  className='card-ht'>
            <MDBCardImage
              cascade
              className='img-fluid'
              overlay='white-light'
              hover
              src={require("../assets/Categories/Women.jpg")}
            />

            <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
              <p>
                  Gifts for Women
              </p>
            </div>
          </MDBCard>
          </Link>
        </MDBCol>
        <MDBCol md='4' className='pad'>
        <Link to='/products/kids' className='Link-clr'>
          <MDBCard  className='card-ht'>
            <MDBCardImage
              cascade
              className='img-fluid'
              overlay='white-light'
              hover
              src={require("../assets/Categories/Kids.jpg")}
            />

            <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
              <p>
                  Gifts for Kids
              </p>
            </div>
          </MDBCard>
          </Link>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Categories;