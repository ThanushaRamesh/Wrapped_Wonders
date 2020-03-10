import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Products.css";
import PRODUCT_DATA from "./product.data";
import Categories from "./Categories";

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

const queryString = require("query-string");
class Products extends React.Component {
  render() {
    console.log(this.props.catagory);
    //var parsed = queryString.parse(props.location.search);
    //console.log(parsed.cate);
    //console.log(this.props.match.params.id);
    const idi = this.props.catagory;

    var products = PRODUCT_DATA.filter(x => x.id == idi);
    return (
      <MDBContainer size='lg'>
        {products.map((i, index) => {
          return (
            <div>
              <p className='heading'> {i.title} </p>
              <MDBRow className='row-margin'>
                {i.items.map((c, i) => (
                  <MDBCol md='4' className='pad'>
                    <MDBCard cascade className='card-ht'>
                      <MDBCardImage
                        cascade
                        className='img-fluid'
                        overlay='white-light'
                        hover
                        src={c.imageUrl}
                      />
                      <div className='rounded-bottom lighten-3 text-center pt-3 title-css'>
                        <p>
                          <Link to='/giftdetails' className='Link-clr'>
                            {c.name}
                          </Link>
                        </p>
                      </div>
                    </MDBCard>
                  </MDBCol>
                ))}
              </MDBRow>
            </div>
          );
        })}
      </MDBContainer>
    );
  }
}

export default Products;
