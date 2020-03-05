import React from 'react';
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="">
            <nav>
                <div className="nav-wrapper">
                <a href="/" className="brand-logo">Wrapped Wonders</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/about">About</Link></li>
                    <li><NavLink to="/categories">Categories</NavLink></li>
                    <li><NavLink to="/cart">Cart</NavLink></li>
                    <li><NavLink to="/login">Signup</NavLink></li>

                </ul>
                </div>
  </nav>
        </div>
    )
}
export default Navbar