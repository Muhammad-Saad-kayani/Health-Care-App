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
      <div className='flex content-between justify-center '>
      <Card col="#ebfaf8" heading="Order Medicine" paraOne="Get them Deliverd at your doorstep" paraTwo="up to" head="10 &#37;"/>
      <Card col="red" heading="Order Medicine" paraOne="Get them Deliverd at your doorstep" paraTwo="up to" head="10 &#37;"/>
      </div>
      <Card1/>
      <Footer/>
    </>
  );
}

export default NavBar;
