'use client';

import React from "react";
import DoctorList from "../Components/DoctorList";
import Slider from "../Components/slider";
import AdminNavbar from "../Components/AdminNavbar";

const AdminDashboard = () => {

  return (
    <>
      <AdminNavbar/>
      <Slider/>
      <div className="min-h-screen bg-gray-50 p-8 -mt-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4">
          </div>
          <h1 className="text-4xl font-bold mb-8 mt-5">Doctors Available</h1>
          <DoctorList />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
