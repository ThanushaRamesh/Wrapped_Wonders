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
              <p>
                <Link to='/products/birthday' className='Link-clr'>
                  Birthday
                </Link>
              </p>
              {/* <button onClick={this.onSubmit}>Birthday</button> */}
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
              <p>
                <Link to='/products/anniversary' className='Link-clr'>
                  Anniversary
                </Link>
              </p>
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
              <p>
                <Link to='/products/house' className='Link-clr'>
                  House Warming Ceremony
                </Link>
              </p>
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
              <p>
                <Link to='/products/men' className='Link-clr'>
                  Gifts for Men
                </Link>
              </p>
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
              <p>
                <Link to='/products/women' className='Link-clr'>
                  Gifts for Women
                </Link>
              </p>
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
              <p>
                <Link to='/products/kids' className='Link-clr'>
                  Gifts for Kids
                </Link>
              </p>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Categories;