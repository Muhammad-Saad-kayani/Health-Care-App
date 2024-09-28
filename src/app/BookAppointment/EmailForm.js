// components/EmailForm.js
"use client"; // This makes the component a client component

import React, { useState } from 'react';
import { Resend } from 'resend';
import Email from './Email'; // Ensure this import is correct

const resend = new Resend('re_VCZ7cVRV_HTXxTtsontxdEmhq1ThLvkHP'); // Replace with your actual API key

const EmailForm = ({ email }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      await resend.emails.send({
        from: 'you@example.com', // Replace with your sender email
        to: email,
        subject: 'Appointment Confirmation',
        react: <Email url="https://example.com" />, // Pass the Email component here
      });
      setSuccess(true);
    } catch (err) {
      setError('Failed to send email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <h4 className="text-xl font-semibold mb-4">Confirm Your Email</h4>
      <p className="mb-4">A confirmation email will be sent to: {email}</p>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className={`w-full ${loading ? 'bg-gray-400' : 'bg-blue-600'} text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Confirmation Email'}
        </button>
      </form>
      {success && <p className="mt-4 text-green-600">Email sent successfully!</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default EmailForm;
