import React from "react";
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import About from "../components/About"
import FeaturedCategories from "../components/FeaturedCategories"
import FeaturedProducts from "../components/FeaturedProducts"
import Footer from "../components/Footer"

export default function Home() {
  return(
    <>
    <Hero />
    <About />
    <FeaturedCategories />
    <FeaturedProducts />
    <Footer />
    </>
  );
}