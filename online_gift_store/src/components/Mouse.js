import React from "react";
import { MDBIcon, MDBAnimation } from "mdbreact";

const Mouse = () => {
  return (
    <div
      className='col-md-12 text-center hide-mouse'
      style={{ padding: "2vh" }}
    >
      <div>
        <MDBAnimation type='bounce' infinite duration='2s' delay='2s'>
          <MDBIcon
            style={{
              color: "#64006c",
              right: "0",
              marginTop:"-6rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            
            }}
            icon='mouse'
            size='2x'
          />
          <p
            className='text-center'
            style={{ color: "#64006c", marginTop: "10px" }}
          >
            Or Scroll Down
          </p>
        </MDBAnimation>
      </div>
    </div>
  );
};

export default Mouse;