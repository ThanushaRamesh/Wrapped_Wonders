import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaHeart} from "react-icons/fa"
import { FaCopyright} from "react-icons/fa"

export default function Footer({ footer,children,contact }) {
    return (
    <div className="col-md-12 footer">
        <div className="row footer-1  text-center">
            <div className="col-md-4 logo text-center">
                <h1>  Wrapped Wonders </h1> 
            </div>

            <div className="col-md-4 links text-center">
                <a href="About">About</a>
                <a href="About">Events</a>
                <a href="About">Team</a>
            </div>

            <div className="col-md-4 social text-center">
                <h2> <FaInstagram /> </h2>
                <h2> <FaTwitter /> </h2> 
                <h2> <FaFacebook /> </h2> 
            </div>
        </div>

        <div className="footer-2">
            <div className="col-md-12 text-center">
                <p>Made with <FaHeart /> remotely from Heidelberg, Germany</p>
                <p><FaCopyright /> 2020 Wrapped Wonders. All Rights Reserved.</p>
            </div>
        </div>
    </div>
    );
}