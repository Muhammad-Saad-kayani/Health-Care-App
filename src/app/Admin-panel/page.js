"use client";

import Image from 'next/image';
import Link from "next/link";

const AdminPanel = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="border-4 border-gray-300 p-10 rounded-lg shadow-lg bg-white text-center">
        <Image
          src="/admin.jpg" 
          alt="Admin Logo"
          width={120} 
          height={120} 
          className="mb-4 mx-auto object-contain" 
        />
        <h1 className="text-3xl font-bold mb-7">Admin Panel</h1>
        <div className="flex justify-center space-x-4">
        <Link href="/Admin-dashboard">
          <button className="bg-blue-500 mb-4 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
            Manage Doctors
          </button>
          </Link>
          <button className="bg-green-500 mb-4  text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition">
            Manage Hospitals
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
