import React, { Component } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import "./Cart.css";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBIcon,
  MDBInput,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

//import Button from "react-bootstrap/Button";

import LocalCart from "../utils/localCart";

const Cart = props => {
  return (
    <>
      <Modal
        show={props.modalOpen}
        onHide={props.handleModalOpen}
        color='#64006c'>
        <MDBCardBody className='body'>
          <MDBModalHeader className='center'>Your Cart</MDBModalHeader>
          <MDBModalBody>
            <article className='cart-item'>
              <img
                src={
                  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1574719863/iorxuhfensblqhn6jy5d.png"
                }
                alt='mac vintage computer'
              />
              <div>
                <a className='title-clr'>Mac vintage computer</a>
                <h6 className='price-clr'>200.99</h6>

                <button
                  type='button'
                  className='cart-btn remove-btn remove-btn'>
                  remove
                </button>
              </div>
              <div>
                <button type='button' className='cart-btn amount-btn body'>
                  <FaAngleUp />
                </button>
                <p className='item-amount'>{LocalCart.amount}</p>
                <button type='button' className='cart-btn amount-btn body'>
                  <FaAngleDown />
                </button>
              </div>
            </article>
          </MDBModalBody>
          <MDBModalFooter className='center-footer'>
            <MDBBtn color='#64006c' className='Check-btn'>
              Proceed to Checkout
            </MDBBtn>
          </MDBModalFooter>
        </MDBCardBody>
      </Modal>
    </>
  );
};

export default Cart;
