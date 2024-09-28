"use client";

import { useState, useEffect } from 'react';

const images = [
  '/slider1.webp',
  '/slider2.webp',
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <section className='slider bg-white w-full flex items-center justify-center p-4 mt-20 py-20'>
    <div className="navsec relative w-full h-80 rounded-xl overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
    </section>
  );
}
