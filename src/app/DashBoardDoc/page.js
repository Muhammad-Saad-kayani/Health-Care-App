'use client';

import React from "react";
import DoctorList from "../Components/DoctorList";
import NavBar from "../Components/Navbar";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Slider from "../Components/slider";

const AdminDashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/Pharmacy");
  };

  return (
    <>
      <NavBar />
      <Slider/>
      <div className="min-h-screen bg-gray-50 p-8 -mt-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4">
          <Link href="/Admin-panel">
          <button
          type="submit"
          className="mb-5 bg-green-500 text-white p-2 rounded w-96"
          >
          Go To Panel
          </button>
        </Link>
          </div>
          <h1 className="text-4xl font-bold mb-8 mt-5">Doctors Available</h1>
          <DoctorList />
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white p-2 rounded w-40"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
