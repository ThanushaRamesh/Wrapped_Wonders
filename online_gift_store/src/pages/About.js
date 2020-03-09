// import React from "react";
// import {
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBView,
//   MDBContainer,
//   MDBCol,
//   MDBBox
// } from "mdbreact";
// import img1 from "../assets/Carousel1.jpg";
// import img2 from "../assets/Carousel2.jpg";
// import img3 from "../assets/Carousel3.jpg";


// const About = () => {
//   return (
//     <MDBContainer>
//           <p className='heading'> About Us </p>
//       <MDBCarousel
//         activeItem={1}
//         length={3}
//         showControls={false}
//         showIndicators={false}
//         className='z-depth-1'
//         slide>
//         <MDBCarouselInner className="pet-carousel img">
//           <MDBCarouselItem itemId='1'>
//             {/* <MDBView>
//               <img className='d-block w-100' src={img1} alt='First slide' />
//             </MDBView> */}
//             <MDBCol md='8'>
//                 <MDBBox>
//                   <img src={img1} alt='tst' />
//                 </MDBBox>
//               </MDBCol>
//           </MDBCarouselItem>
//           <MDBCarouselItem itemId='2'>
//           {/* <MDBView>
//               <img className='d-block w-100' src={img2} alt='Second slide' />
//             </MDBView> */}
//             <MDBCol md='8'>
//                 <MDBBox>
//                   <img src={img2} alt='tst' />
//                 </MDBBox>
//               </MDBCol>
//           </MDBCarouselItem>
//           <MDBCarouselItem itemId='3'>
//           {/* <MDBView>
//               <img className='d-block w-100' src={img3} alt='Third slide' />
//             </MDBView> */}
//             <MDBCol md='8'>
//                 <MDBBox>
//                   <img src={img3} alt='tst' />
//                 </MDBBox>
//               </MDBCol>
//           </MDBCarouselItem>
//         </MDBCarouselInner>
//       </MDBCarousel>
//     </MDBContainer>
//   );
// };

// export default About;

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