"use client";

import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import Card1 from '../Components/Card1';
import NavBar from '../Pharmacy/page';
import NavForPhar from '../Components/NavForPhar';

const page = () => {
  const [dropdown, setDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const dropdownRef = useRef(null);

  const handleDropdownOpen = (type) => {
    if (timeoutId) clearTimeout(timeoutId);
    setDropdown(type);
  };

  const handleDropdownClose = () => {
    const id = setTimeout(() => {
      setDropdown(null);
    }, 300);
    setTimeoutId(id);
  };

  const handleDropdownContentMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
  };

  const handleDropdownContentMouseLeave = () => {
    const id = setTimeout(() => {
      setDropdown(null);
    }, 300); 
    setTimeoutId(id);
  };

  return (
    <>
      <NavForPhar/>
      <Card1/>
    </>
  );
};

export default page;
