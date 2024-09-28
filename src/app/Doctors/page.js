"use client";

import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";

const DoctorList = () => {
  const doctors = useSelector((state) => state.doctor.doctors || []);

  const handleDelete = (index) => {
    // Dispatch your action to remove the doctor here, if needed.
    console.log(`Delete doctor at index: ${index}`);
  };

  return (
    <>
      <NavBar />

      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Doctors Available</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {doctors.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">No Doctors added yet.</p>
          ) : (
            doctors.map((doctor, index) => (
              <div
                key={index}
                className="flex border border-gray-300 rounded-md p-4 shadow-md bg-white"
              >
                {doctor.image ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-40 h-40 object-cover rounded-full border-2 border-gray-300 mr-4"
                  />
                ) : (
                  <div className="w-40 h-40 bg-gray-200 rounded-full border-2 border-gray-300 mr-4 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}

                <div className="flex flex-col justify-between flex-1">
                  <h2 className="text-lg font-bold mb-2">{doctor.name}</h2>
                  <p className="text-gray-600 mb-2">Bio: {doctor.bio}</p>
                  <p className="text-gray-600 mb-2">Degree: {doctor.degree}</p>
                  <p className="text-gray-600 mb-2">Experience: {doctor.experience} years</p>
                  <p className="text-gray-600 mb-2">Category: {doctor.category}</p>

                  <button
                    className="mt-4 bg-red-500 text-white px-4 rounded hover:bg-red-600 w-32"
                  >
                    Book Appointment
                  </button>
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

export default DoctorList;
