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
          <MDBCol className="no_padding">
                 <MDBBox>
                   <img 
                   className="d-block w-100"
                   src={img1} alt='tst' />
                 </MDBBox>
               </MDBCol>
     </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
          <MDBCol className="no_padding">
                 <MDBBox>
                   <img src={img2} alt='tst' />
                 </MDBBox>
               </MDBCol>
         </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
          <MDBCol className="no_padding">
                 <MDBBox>
                   <img src={img3} alt='tst' />
                 </MDBBox>
              </MDBCol>
         </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>

<ul className = "about_ww">
  <li>
  We at Wrapped Wonders are committed to giving you and loved one's experiences that are sure to be cherished for a very long time.Help us stride through tough times and make our lives meaningful.
  </li>
  <br/>
  <li>
  Making the right gift selection takes planning. While selecting the best gifts for loved ones, you need to take into consideration the recipients likes and dislikes, their personality,and preferences.
  </li>
  <br/>

  <li>
  When choosing a gift for someone special, you need to put in that extra effort to ensure a wow moment for the receiver when the wrapping paper comes off.
  </li>
</ul>
    </MDBContainer>
  );
}

export default CarouselPage;