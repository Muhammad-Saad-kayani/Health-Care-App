"use client";

import React, { useState, useRef } from 'react';
import Footer from '../Components/Footer';
import Card1 from '../Components/Card1';
import Slider from '../Components/slider';
import NavForPhar from '../Components/NavForPhar';

const NavBar = () => {

  return (
    <>
      <NavForPhar/>
      <div className=""><h1 className=""></h1></div>
      <Slider/>
      <Card1/>
      <Footer/>
    </>
  );
}

export default NavBar;
