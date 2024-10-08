"use client";

import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../Components/Footer';
import Card1 from '../Components/Card1';
import Slider from '../Components/slider';

const NestedNav = () => {
  const [dropdown, setDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const dropdownRef = useRef(null);

  const handleDropdownOpen = (type) => {
    if (timeoutId) clearTimeout(timeoutId);
    setDropdown(type);
  };

  const handleDropdownClose = () => {
    // Set a timeout to delay hiding the dropdown
    const id = setTimeout(() => {
      setDropdown(null);
    }, 300); // Adjust the delay as needed
    setTimeoutId(id);
  };

  const handleDropdownContentMouseEnter = () => {
    // Clear the timeout if the mouse enters the dropdown content
    if (timeoutId) clearTimeout(timeoutId);
  };

  const handleDropdownContentMouseLeave = () => {
    // Hide the dropdown after delay
    const id = setTimeout(() => {
      setDropdown(null);
    }, 300); // Adjust the delay as needed
    setTimeoutId(id);
  };

  return (
    <>
      <nav className="w-full bg-white py-5 px-10 flex flex-wrap gap-2 shadow-custom-light">
        {/* Top Row */}
        <section className="navsec w-full flex items-center justify-between mb-2">
          <section className="logo flex items-center gap-2 ">
            <div>
              <img
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </div>
            <div className="text-xl font-semibold font-sans">Healthwire</div>
          </section>
          <div className="searchsec w-600 flex items-center">
            <div className="search h-12 flex items-center border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="px-2 h-8 border-r border-blue-400 flex items-center justify-center gap-2 text-center">
                <div className="location flex items-center justify-center text-blue-700">
                  <FontAwesomeIcon icon={faLocationCrosshairs} className="size-4" />
                </div>
                <div className="drop flex items-center justify-center text-center">
                  <select name="" id="" className="w-20 border-0 outline-none">
                    <option value="">Select</option>
                    <option value="">Islamabad</option>
                    <option value="">Karachi</option>
                    <option value="">Lahore</option>
                    <option value="">Multan</option>
                  </select>
                </div>
              </div>
              <div className="inp px-4">
                <input
                  className="w-96 outline-none border-0 text-gray-600"
                  placeholder="Search for medicines, lab tests, and doctors...."
                  type="text"
                />
              </div>
              <div className="flex items-center justify-center text-center">
                <button
                  className="searchbtn w-16 h-12 flex items-center text-center justify-center bg-blue-500 text-white border-none"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="size-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="btnCart flex items-center justify-between gap-8">
            <div className="cart text-blue-900">
              <FontAwesomeIcon icon={faCartShopping} className="size-6" />
            </div>
            <div className="btn-sign w-36 h-9 border-2 rounded-lg border-blue-900 flex items-center justify-center gap-2 size-4 text-blue-900 font-sans font-semibold">
              <button className="login">Login</button>
              /
              <button className="signup">Signup</button>
            </div>
          </div>
        </section>

        {/* Bottom Row with Navigation Links */}
        <section className="navsec nav-links w-full py-2 flex justify-between gap-8">
          <div className="flex justify-center gap-8">
            <Link href="/" className="text-blue-900 hover:underline">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => handleDropdownOpen('medications')}
              onMouseLeave={handleDropdownClose}
            >
              <a className="text-blue-900 hover:underline cursor-pointer">
                Medications
              </a>
              {dropdown === 'medications' && (
                <div
                  className="absolute bg-white shadow-md border border-gray-300 rounded-md mt-2 z-10"
                  onMouseEnter={handleDropdownContentMouseEnter}
                  onMouseLeave={handleDropdownContentMouseLeave}
                >
                  <Link href="/Bone-And-Joint-Pain" className="block px-6 py-2 hover:bg-gray-100">Bone And Joint Pain</Link>
                  <Link href="/Cardiac-care" className="block px-6 py-2 hover:bg-gray-100">Cardiac Care</Link>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => handleDropdownOpen('wellness')}
              onMouseLeave={handleDropdownClose}
            >
              <a className="text-blue-900 hover:underline cursor-pointer">
                Wellness And Beauty
              </a>
              {dropdown === 'wellness' && (
                <div
                  className="absolute bg-white shadow-md border border-gray-300 rounded-md mt-2 z-10"
                  onMouseEnter={handleDropdownContentMouseEnter}
                  onMouseLeave={handleDropdownContentMouseLeave}
                >
                  <Link href="/wellness/beauty1" className="block px-4 py-2 hover:bg-gray-100">Hair And Nails Care</Link>
                  <Link href="/wellness/beauty2" className="block px-4 py-2 hover:bg-gray-100">Oral Hygiene</Link>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => handleDropdownOpen('devices')}
              onMouseLeave={handleDropdownClose}
            >
              <a className="text-blue-900 hover:underline cursor-pointer">
                Devices And Injectables
              </a>
              {dropdown === 'devices' && (
                <div
                  className="absolute bg-white shadow-md border border-gray-300 rounded-md mt-2 z-10"
                  onMouseEnter={handleDropdownContentMouseEnter}
                  onMouseLeave={handleDropdownContentMouseLeave}
                >
                  <Link href="/devices/device1" className="block px-4 py-2 hover:bg-gray-100">Devices</Link>
                  <Link href="/devices/device2" className="block px-4 py-2 hover:bg-gray-100">Drips</Link>
                </div>
              )}
            </div>
            <a
              href="#"
              onMouseEnter={() => handleDropdownOpen('categories')}
              onMouseLeave={handleDropdownClose}
              className="text-blue-900 hover:underline cursor-pointer"
            >
              View All Categories
            </a>
          </div>
          <div className="pharm text-blue-900 font-semibold font-sans border-b border-blue-900">
            <a href="/">Pharmacy Franchise</a>
          </div>
        </section>
      </nav>
      <div className=""><h1 className=""></h1></div>
    </>
  );
};

export default NestedNav;
