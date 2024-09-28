"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faMagnifyingGlass,
  faCartShopping,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Link from "next/link";


const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const [modalType, setModalType] = useState(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);

  const handleModalOpen = (type) => {
    setModalType(type);
    setIsHoveringDropdown(false); // Ensure dropdown closes only when not hovering
  };

  const handleModalClose = () => {
    if (!isHoveringDropdown) {
      setModalType(null);
    }
  };

  return (
    <>
      <nav className="w-full bg-white py-5 px-10 flex flex-wrap gap-2 shadow-custom-light fixed top-0 z-50">
        {/* Top Row */}
        <section className="navsec w-full flex items-center justify-between mb-2">
          <section className="logo flex items-center gap-2">
            <div>
              <img src="/logo.png" alt="Logo" width={40} height={40} />
            </div>
            <div className="text-xl font-semibold font-sans">Healthwire</div>
          </section>
          <div className="searchsec w-600 flex items-center">
            <div className="search h-12 flex items-center border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="px-2 h-8 border-r border-blue-400 flex items-center justify-center gap-2 text-center">
                <div className="location flex items-center justify-center text-blue-700">
                  <FontAwesomeIcon
                    icon={faLocationCrosshairs}
                    className="size-4"
                  />
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
                <button className="searchbtn w-16 h-12 flex items-center text-center justify-center bg-[#3f7fe0] text-white border-none">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="size-4"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="btnCart flex items-center justify-between gap-8">
            <div className="cart text-blue-900">
              <Link href="/Cart">
                <FontAwesomeIcon icon={faCartShopping} className="size-6 " />
                <span className="ml-2">{cartTotalQuantity}</span>
              </Link>
            </div>
            <Link href="/Admin">
              <div className="btn-sign w-36 h-9 border-2 rounded-lg border-blue-900 flex items-center justify-center gap-2 size-4 text-blue-900 font-sans font-semibold">
                <button className="login">Login</button>/
                <button className="signup">Signup</button>
              </div>
            </Link>
          </div>
        </section>

        {/* Bottom Row with Navigation Links */}
        <section className="navsec nav-links w-full py-2 flex justify-between gap-8">
          <div className="flex justify-center gap-8">
            <Link href="/" className="text-blue-900 hover:underline">
              Home
            </Link>

            <Link
              href="/Pharmacy"
              onMouseEnter={() => handleModalOpen("pharmacy")}
              onMouseLeave={handleModalClose}
              className="text-blue-900 hover:underline"
            >
              Pharmacy
            </Link>

            {/* Lab Tests Link */}
            <a
              href="#"
              onMouseEnter={() => handleModalOpen("labTests")}
              onMouseLeave={handleModalClose}
              className="text-blue-900 hover:underline relative" // Added relative class
            >
              Lab Tests
              {/* Dropdown Menu for Lab Tests */}
              {modalType === "labTests" && (
                <div
                  className="absolute mt-2 bg-white shadow-lg p-4 rounded-md z-10" // Adjusted styling for dropdown
                  onMouseEnter={() => setIsHoveringDropdown(true)}
                  onMouseLeave={() => setIsHoveringDropdown(false)}
                >
                  <ul className="space-y-2 text-black">
                   <li className="hover:bg-gray-100 px-4 py-2 rounded">
                   <Link href="/cbc"> CBC </Link> 
                    </li>
                   
                    <li className="hover:bg-gray-100 px-4 py-2 rounded">
                      Urine Test
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2 rounded">
                      X-Ray
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2 rounded">MRI</li>
                    <li className="hover:bg-gray-100 px-4 py-2 rounded">
                      CT Scan
                    </li>
                  </ul>
                </div>
              )}
            </a>

            <a
              href="/Doctors"
              onMouseEnter={() => handleModalOpen("doctors")}
              onMouseLeave={handleModalClose}
              className="text-blue-900 hover:underline"
            >
              Doctors
            </a>
            <a
              href="#"
              onMouseEnter={() => handleModalOpen("hospitals")}
              onMouseLeave={handleModalClose}
              className="text-blue-900 hover:underline"
            >
              Hospitals
            </a>
            <Link
              href="/Blogs"
              onMouseEnter={() => handleModalOpen("Healthcare")}
              onMouseLeave={handleModalClose}
              className="text-blue-900 hover:underline"
            >
              Health Blogs{" "}
              <FontAwesomeIcon icon={faArrowRight} className="size-4" />
            </Link>
          </div>
          <div className="pharm text-blue-900 font-semibold font-sans border-b border-blue-900">
            <a href="/Franchises">Pharmacy Franchise</a>
          </div>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
