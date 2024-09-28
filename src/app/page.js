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
import Email from './BookAppointment/Email'; // Assuming you have this component created as well
import BookAppointment from './BookAppointment/page';

   

import React from 'react'
import AppointmentAndEmail from "./BookAppointment/page";

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
   <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Welcome</h2>
      <Email />
      <BookAppointment />
    </div>
 </>
  )
}

export default page
