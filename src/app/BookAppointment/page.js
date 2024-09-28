// components/BookAppointment.js
"use client"; // This makes the component a client component

import React, { useState } from 'react';
import EmailForm from './EmailForm'; // Import EmailForm to send the confirmation email

const BookAppointment = () => {
  const [name, setName] = useState('');
  const [appointmentEmail, setAppointmentEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [isBooked, setIsBooked] = useState(false); // Track if appointment is booked

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform additional validation or logic here if needed
    console.log("Appointment booked:", { name, appointmentEmail, date, timeSlot });
    setIsBooked(true); // Mark as booked
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-3xl font-semibold text-center mb-4 text-blue-600">Book Your Appointment</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="appointmentEmail">Email</label>
          <input
            type="email"
            id="appointmentEmail"
            value={appointmentEmail}
            onChange={(e) => setAppointmentEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="time">Time Slot</label>
          <select
            id="time"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled>Select a time slot</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Book Appointment
        </button>
      </form>

      {isBooked && <EmailForm email={appointmentEmail} />} {/* Show EmailForm after booking */}
    </div>
  );
};

export default BookAppointment;
