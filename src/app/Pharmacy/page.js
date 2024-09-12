"use client";

import React, { useState, useRef } from 'react';
import Footer from '../Components/Footer';
import Card1 from '../Components/Card1';
import Slider from '../Components/slider';
import NavForPhar from '../Components/NavForPhar';
import ExploreCategory from '../Components/ExploreCategory';
import TopArticles from '../Components/TopArticles';
import ExploreMedicine from '../Components/ExploreMedicine';


const NavBar = () => {

  return (
    <>
      <NavForPhar/>
      <Slider/>
      <ExploreCategory/>
      <Card1/>
      <TopArticles/>
      <ExploreMedicine/>
      <Footer/>
    </>
  );
}

export default NavBar;
