"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeDoctor } from "../Redux/DoctorSlice";

const DoctorList = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.doctors || []);

  const handleDelete = (index) => {
    dispatch(removeDoctor(index));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {doctors.length === 0 ? (
        <p className="text-center col-span-full text-gray-500">No doctors added yet.</p>
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

            <div className="flex flex-col justify-between">
              <h2 className="text-lg font-bold mb-2">{doctor.name}</h2>
              <p className="text-gray-600 mb-2">{doctor.bio}</p>
              <p className="text-sm text-gray-500">Degree: {doctor.degree}</p>
              <p className="text-sm text-gray-500">Experience: {doctor.experience} years</p>
              <p className="text-sm text-gray-500">Category: {doctor.category}</p>

              <button
                onClick={() => handleDelete(index)}
                className="mt-2 bg-red-500 w-20 h-8 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DoctorList;
