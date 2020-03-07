import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { FaShoppingCart} from "react-icons/fa"


class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text"></strong>
        </MDBNavbarBrand>
        {/* <MDBNavbarToggler onClick={this.toggleCollapse} /> */}
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          {/* <MDBNavLink to="/"><img src={logo}/></MDBNavLink> */}
          <MDBNavLink to="/">Wrapped Wonders</MDBNavLink>

          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem >
              <MDBNavLink to="/about" activeClassName="active">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/categories" activeClassName="active">Categories</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/login" activeClassName="active">Signup</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/cart" activeClassName="active">
              <h2> <FaShoppingCart /> </h2>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;