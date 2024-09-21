
import React from "react";
import DoctorList from "../Components/DoctorList";
import NavBar from "../Components/Navbar";

const AdminDashboard = () => {
  return (
    <>
    <NavBar/>
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 mt-40">Doctors Available</h1>
        <DoctorList/>
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;
