import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Signup from "../components/Signup";
import Cart from "../components/Cart";
import logo from "../assets/wrapped2.png";

class Navbar extends Component {
  state = {
    modalOpen: false,
    modalOpenCart: false
  };

  handleModalOpen = () => {
    this.setState(prevState => {
      return {
        modalOpen: !prevState.modalOpen
      };
    });
  };
  handleModalOpenCart = () => {
    this.setState(prevState => {
      return {
        modalOpenCart: !prevState.modalOpenCart
      };
    });
  };

  render() {
    return (
      <div>
        <MDBNavbar dark expand='md' fixed="top">
          
          {/* <MDBNavbarToggler onClick={this.toggleCollapse} /> */}
          <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavLink to='/'>
              <img src={logo} className="logo" alt='tst' />
              </MDBNavLink>
            </MDBNavbarNav>
            <MDBNavbarNav right >
              <MDBNavItem >
                <MDBNavLink to='/about' activeClassName='active'>
                  About
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/categories' activeClassName='active'>
                  Categories
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                {/* <MDBNavLink to="/" activeClassName="active">       */}
                <a onClick={this.handleModalOpen} className='nav-link'>
                  Signup
                </a>
                {/* </MDBNavLink> */}
              </MDBNavItem>
              <MDBNavItem>
                {/* <MDBNavLink to='/cart' activeClassName='active'> */}
                  <h4 onClick={this.handleModalOpenCart} className='nav-link'>
                    <FaShoppingCart />
                  </h4>
                {/* </MDBNavLink> */}
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        <Signup
          modalOpen={this.state.modalOpen}
          handleModalOpen={this.handleModalOpen}
        />
        <Cart
          modalOpen={this.state.modalOpenCart}
          handleModalOpen={this.handleModalOpenCart}
        />
      </div>
    );
  }
}

export default Navbar;
