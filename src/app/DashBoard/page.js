
import React from "react";
import DoctorList from "../Components/DoctorList";
import DoctorForm from "../Admin-dashboard/page";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        <DoctorForm/>
        <DoctorList/>
      </div>
    </div>
  );
};

export default AdminDashboard;
