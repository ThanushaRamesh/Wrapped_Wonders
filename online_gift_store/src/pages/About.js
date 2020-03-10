import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBBox, MDBCol } from
"mdbreact";
import img1 from "../assets/Carousel1.jpg";
import img2 from "../assets/Carousel2.jpg";
import img3 from "../assets/Carousel3.jpg";

const CarouselPage = () => {
  return (
    <MDBContainer className="aboutus-container">
    <p className='heading'> About Us </p>

      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
          <MDBCol >
                 <MDBBox>
                   <img 
                   className="d-block w-100"
                   src={img1} alt='tst' />
                 </MDBBox>
               </MDBCol>
     </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
          <MDBCol>
                 <MDBBox>
                   <img src={img2} alt='tst' />
                 </MDBBox>
               </MDBCol>
         </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
          <MDBCol >
                 <MDBBox>
                   <img src={img3} alt='tst' />
                 </MDBBox>
              </MDBCol>
         </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <p>Hello from about us</p>
    </MDBContainer>
  );
}

export default CarouselPage;