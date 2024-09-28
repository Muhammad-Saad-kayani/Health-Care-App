"use client";

import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";

const HospitalList = () => {
  const hospitals = useSelector((state) => state.hospital.hospitals || []);

  return (
    <>
      <NavBar />

      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Hospitals Available</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"> 
          {hospitals.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">No Hospitals added yet.</p>
          ) : (
            hospitals.map((hospital, index) => (
              <div
                key={index}
                className="flex border border-gray-300 rounded-md p-4 shadow-md bg-white"
              >
                {hospital.image ? (
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-40 h-40 object-cover rounded-full border-2 border-gray-300 mr-4"
                  />
                ) : (
                  <div className="w-40 h-40 bg-gray-200 rounded-full border-2 border-gray-300 mr-4 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}

                <div className="flex flex-col justify-between flex-1">
                  <h2 className="text-lg font-bold mb-2">{hospital.name}</h2>
                  <p className="text-gray-600 mb-2">Address: {hospital.address}</p>
                  <p className="text-gray-600 mb-2">Location: {hospital.location}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HospitalList;
