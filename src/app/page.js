"use client"
import Image from "next/image";
import Footer from "./Components/Footer";
import Slider from "./Components/slider";
import LandingCard from "./Components/landingPage";
import MedicineCard from "./Components/medicineCard";
import Service from "./Components/service";
import Career from "./Components/career";
import Article from "./Components/article";
import Footer1 from "./Components/footer1";
import NavBar from "./Components/Navbar";


   

import React from 'react'

const page = () => {
  return (
   <>
   <NavBar />
   <Slider />
   <LandingCard />
   <MedicineCard />
   <Service />
   <Career />
   <Article />
   <Footer1 />
   <Footer />
 </>
  )
}

export default page
