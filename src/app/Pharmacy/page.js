"use client";

import React, { useState, useRef } from 'react';
import Footer from '../Components/Footer';
import Card1 from '../Components/Card1';
import Slider from '../Components/slider';
import NavForPhar from '../Components/NavForPhar';
import ExploreCategory from '../Components/ExploreCategory';


const NavBar = () => {

  return (
    <>
      <NavForPhar/>
      <Slider/>
      <ExploreCategory/>
      <Card1/>
      <Footer/>
    </>
  );
}

export default NavBar;
