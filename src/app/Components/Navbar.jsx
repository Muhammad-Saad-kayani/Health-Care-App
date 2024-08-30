import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
    <nav className="w-full h-20 bg-white py-5 px-10 flex items-center justify-between gap-2 shadow-custom-light">
      <section className="navsec w-full flex items-center justify-between">
        <section className="logo flex items-center gap-2">
          <div className="">
            <img
              src="./images/healthwire_logo.png"
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="text-xl font-semibold font-sans">Healthwire</div>
        </section>
        <div className="searchsec w-600 flex items-center">
          <div className="search h-12 flex items-center border-2 border-blue-300 rounded-lg overflow-hidden">
            <div className="px-2 h-8 border-r border-blue-400 flex items-center justify-center gap-2 text-center">
              <div className="location flex items-center justify-center text-blue-600">
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
        <div className="btn"></div>
      </section>
    </nav>
  </>
  );
}

export default Navbar;