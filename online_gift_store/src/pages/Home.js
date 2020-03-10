import React from "react";
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import About from "../components/About"
import FeaturedCategories from "../components/FeaturedCategories"
import FeaturedProducts from "../components/FeaturedProducts"
import Footer from "../components/Footer"
import Mouse from "../components/Mouse";

export default function Home() {
  return(
    <>
    <Hero />
          
            <Mouse />
    <About />
    <FeaturedCategories />
    <FeaturedProducts />
    <Footer />
    </>
  );
}