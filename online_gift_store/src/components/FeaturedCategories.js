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
        <p className='heading'> Categories </p>
        <MDBRow className='row-margin'>
          <MDBCol md='4' className='pad'>
            <MDBCard className='card-ht'>
              <MDBCardImage
                cascade
                className='img-fluid'
                overlay='white-light'
                hover
                src={require("../assets/Categories/Birthday.jpg")}
              />
              <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
              <p>
                <Link to='/products' className='Link-clr'>
                  Birthday
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
                src={require("../assets/Categories/Anniversary.jpg")}
              />
              <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
                <p>Anniversary</p>
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
                src={require("../assets/Categories/House.jpeg")}
              />
              <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
                <p>House Warming Ceremony</p>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <a href='Categories' className="category-link">See all Categories</a>
      </MDBAnimation>

    </div>
  );
};
export default FeaturedCategories;
