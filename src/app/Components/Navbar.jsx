"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faMagnifyingGlass, faCartShopping, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { setQuery, clearSuggestions } from '../Redux/SearchSlice';

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { suggestions, query } = useSelector((state) => state.search); // Access search data from Redux
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(setQuery(value));
  };

  const handleInputClick = () => {
    if (query.trim() === '') {
      dispatch(clearSuggestions());
    }
  };

  return (
    <>
      <nav className="w-full bg-white py-5 px-10 flex flex-wrap gap-2 shadow-custom-light fixed top-0 z-50">
        <section className="navsec w-full flex items-center justify-between mb-2">
          <section className="logo flex items-center gap-2">
            <img src="/logo.png" alt="Logo" width={40} height={40} />
            <div className="text-xl font-semibold font-sans">Healthwire</div>
          </section>

          <div className="searchsec w-600 flex items-center">
            <div className="search h-12 flex items-center border-2 border-blue-300 rounded-lg overflow-hidden relative">
              <div className="px-2 h-8 border-r border-blue-400 flex items-center justify-center gap-2 text-center">
                <FontAwesomeIcon icon={faLocationCrosshairs} className="size-4 text-blue-700" />
                <select name="" id="" className="w-20 border-0 outline-none">
                  <option value="">Select</option>
                  <option value="">Islamabad</option>
                  <option value="">Karachi</option>
                  <option value="">Lahore</option>
                  <option value="">Multan</option>
                </select>
              </div>

              <input
                className="w-96 outline-none border-0 text-gray-600 px-4"
                placeholder="Search for medicines, lab tests, and doctors..."
                type="text"
                value={query}
                onChange={handleInputChange}
                onClick={handleInputClick}
              />

              <button className="searchbtn w-16 h-12 flex items-center justify-center bg-[#3f7fe0] text-white border-none">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="size-4" />
              </button>

              {/* Suggestions Box */}
              {suggestions.length > 0 && (
                <div className="absolute bg-white w-full top-12 left-0 shadow-lg rounded-lg z-50">
                  <ul>
                    {suggestions.map((item) => (
                      <li key={item.id} className="px-4 py-2 hover:bg-gray-100">
                        <Link href={`/Cardiac-care/${item.id}`} className="flex items-center gap-4">
                          <img src={item.img} alt={item.title} className="w-8 h-8" />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="btnCart flex items-center gap-8">
            <Link href="/Cart" className="text-blue-900">
              <FontAwesomeIcon icon={faCartShopping} className="size-6" />
              <span className="ml-2">{cartTotalQuantity}</span>
            </Link>

            <Link href="/Admin">
              <div className="btn-sign w-36 h-9 border-2 rounded-lg border-blue-900 flex items-center justify-center gap-2 size-4 text-blue-900 font-sans font-semibold">
                <button className="login">Login</button> / <button className="signup">Signup</button>
              </div>
            </Link>
          </div>
        </section>

        <section className="navsec nav-links w-full py-2 flex justify-between gap-8">
          <div className="flex justify-center gap-8">
            <Link href="/" className="text-blue-900 hover:underline">Home</Link>
            <Link href="/Pharmacy" className="text-blue-900 hover:underline">Pharmacy</Link>
            <a href="#" className="text-blue-900 hover:underline">Lab Tests</a>
            <a href="/Doctors" className="text-blue-900 hover:underline">Doctors</a>
            <a href="#" className="text-blue-900 hover:underline">Hospitals</a>
            <Link href="/Blogs" className="text-blue-900 hover:underline">
              Health Blogs <FontAwesomeIcon icon={faArrowRight} className="size-4" />
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
