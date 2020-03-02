import React from "react";
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import About from "../components/About";
import FeaturedCategories from "../components/Categories/FeaturedCategories";
import FeaturedProduct from "../components/Products/FeaturedProduct";
import Footer from "../components/Footer"

export default function Home() {
  return(
    <>
    <Hero />
    <About />
    <FeaturedCategories />
    <FeaturedProduct />
    <Footer />
    </>
  );
}