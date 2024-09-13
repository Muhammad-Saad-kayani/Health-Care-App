"use client";
import { useState, useEffect } from 'react';

const images = [
  '/brettjordan.webp',
  '/Rectangle2.webp',
  '/Rectangle1.webp',
  '/brett-jordan.webp'
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
    <section className='slider bg-white flex items-center justify-center p-4 py-10'>
      <div className="navsec relative w-96 h-80 rounded-xl overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
              style={{ visibility: index === currentIndex ? 'visible' : 'hidden' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
