import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Products.css";

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

const Products = () => {
  return (
    <MDBContainer size='lg'>
      <p className='heading'> Products </p>
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
                <Link to='/giftdetails' className='Link-clr'>
                  Title
                </Link>
              </p>
              {/* <button onClick={this.onSubmit}>Birthday</button> */}
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Products;
