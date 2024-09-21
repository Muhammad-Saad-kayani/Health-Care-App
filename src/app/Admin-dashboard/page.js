// /components/DoctorForm.jsx

"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDoctor } from "../Redux/CreateSlice";

const DoctorForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    degree: "",
    experience: "",
    category: "",
    image: null, // Base64 string
  });

  const [imagePreview, setImagePreview] = useState(null); // For image preview

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert image file to Base64 string
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
    dispatch(addDoctor(formData));
    setFormData({
      name: "",
      bio: "",
      degree: "",
      experience: "",
      category: "",
      image: null,
    });
    setImagePreview(null);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-8 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add Doctor</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full max-w-md"
        encType="multipart/form-data"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Doctor's Name
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
          <label htmlFor="bio" className="block text-sm font-medium">
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            value={formData.bio}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label htmlFor="degree" className="block text-sm font-medium">
            Degree
          </label>
          <input
            type="text"
            name="degree"
            id="degree"
            value={formData.degree}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium">
            Experience (in years)
          </label>
          <input
            type="number"
            name="experience"
            id="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium">
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium">
            Doctor's Image
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
          <div className="mt-4">
            <p className="text-sm text-gray-600">Image Preview:</p>
            <img
              src={imagePreview}
              alt="Image Preview"
              className="w-32 h-32 object-cover rounded-md mt-2"
            />
          </div>
        )}

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default DoctorForm;
