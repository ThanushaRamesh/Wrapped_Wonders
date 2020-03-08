import React, { Component } from 'react';
import {
    MDBContainer,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBIcon, MDBInput, MDBModalHeader, MDBModalFooter
} from 'mdbreact';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const Signup = (props) => {
    return (
        <>
            <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
                <Modal.Header closeButton>

                </Modal.Header>
                <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Signup
                </h3>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                  a href="/"
                >
                  Signup
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Already a member?</p><a href="/login"> Login</a>
                </div>
              </MDBModalFooter>
              
            </MDBCardBody>

                
            </Modal>
        </>
    );
}

export default Signup