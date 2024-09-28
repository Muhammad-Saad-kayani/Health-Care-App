"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHospital } from "../Redux/HospitalSlice"; 
import { useRouter } from "next/navigation";
import Link from "next/link";

const HospitalForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const hospitals = useSelector((state) => state?.hospital?.hospitals || []);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    location: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHospital(formData));
    router.push("/DashboardHospital");
    setFormData({
      name: "",
      address: "",
      location: "",
      image: null,
    });
    setImagePreview(null);
  };

  const handleLogout = () => {
    router.push("/Pharmacy");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto mt-5">
      <div className="flex items-center mb-6">
        <div className="rounded-full bg-blue-500 mr-4 flex items-center justify-center">
          <img
            src="/hospital.webp"
            alt="Hospital Logo"
            className="h-20 w-20 rounded-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold">Add Hospital</h1>
      </div>

      <Link href="/DashboardHospital">
        <button className="mb-5 w-50 bg-green-500 text-white p-2 rounded-full flex items-center justify-center space-x-2">
          Dashboard
        </button>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full"
        encType="multipart/form-data"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Hospital's Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="col-span-2">
            <label htmlFor="image" className="block text-sm font-medium">
              Hospital's Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {imagePreview && (
            <div className="col-span-2 mt-4">
              <p className="text-sm text-gray-600">Image Preview:</p>
              <img
                src={imagePreview}
                alt="Image Preview"
                className="w-32 h-32 object-cover rounded-md mt-2"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Hospital
        </button>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white p-2 rounded w-full"
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default HospitalForm;
