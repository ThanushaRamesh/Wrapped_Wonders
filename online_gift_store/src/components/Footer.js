import React from 'react';
// import { FaPaw } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter} from "react-icons/fa";
// import { FaHeart} from "react-icons/fa"
// import { FaCopyright} from "react-icons/fa"
// import Popup from "reactjs-popup";

export default function Footer({ footer,children,contact }) {
    return (
    <div className="col-md-12 footer">
        <div className="row footer-1  text-center">
            <div className="col-md-4 logo text-center">
                <h1> Wrapped Wonders </h1> 
            </div>

            <div className="col-md-4 links text-center">
                <a href="About">About</a>
                <a href="About">Categories</a>
                <a href="About">Team</a>
                {/* <Popup modal trigger={<a href="#">Contact Us</a>}>
                          {close => <MyForm name="" slug="" id="" uemail={"nithinbs18@gmail.com"} close={close} msg={"Hello!! Contact us to put up your pet for adoption."}/>}
                </Popup> */}
            </div>

            {/* <div className="col-md-4 social text-center">
                <h2> <FaInstagram /> </h2>
                <h2> <FaTwitter /> </h2> 
                <h2> <FaFacebook /> </h2> 
            </div> */}
        </div>

        <div className="footer-2">
            <div className="col-md-12 text-center">
                <p>Made with remotely from Heidelberg, Germany</p>
                <p>2020 Wrapped Wonders. All Rights Reserved.</p>
            </div>
        </div>
    </div>
    );
}