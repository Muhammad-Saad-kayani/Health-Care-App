"use client";

import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import Slider from '../Components/slider'
import HospitalList from '../Components/HospitalList'

const page = () => {
  return (
    <>
      <AdminNavbar/>
      <Slider/>
      <div className="min-h-screen bg-gray-50 p-8 -mt-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4">
          </div>
          <h1 className="text-4xl font-bold mb-8 mt-5">Hospitals Available</h1>
          <HospitalList/>
        </div>
      </div>
    </>
  )
}

export default page