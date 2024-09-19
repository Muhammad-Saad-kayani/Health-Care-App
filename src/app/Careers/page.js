"use client"
import NavForPhar from "../Components/NavForPhar";
import Footer from "../Components/Footer";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import Slider from "../Components/SliderForCarrers";


const testimonials = [
  {
    id: 1,
    name: "Abdul Ghaffar",
    text: "I am proud of being a part of Healthwire Pvt Ltd for the past 2 years. Since I joined Healthwire as a fresh graduate, I have had various chances to build up my career working in a pleasant multicultural environment surrounded by great individuals; who really care about their jobs and are generous in sharing knowledge for the purpose of serving customers better. This is a company where your opinion is valued and your voice is heard, I am glad to be part of it!",
    image: "/sliderimage.webp", 
  },
  {
    id: 2,
    name : "Abdul Ghaffar",
    text: "From appointment booking to visiting the doctor, everything goes so easy and smooth. I recommend this to everyone if you want a stress-free experience with the best physicians.",
    image: "/sliderimage.webp",
}
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(testimonials) || testimonials.length <= 0) {
    return null; 
  }

  return (
    <div className="flex justify-center items-center bg-blue-50 py-10 px-5 mb-20">
      <div className="relative w-full md:w-3/4 flex items-center">
        
        {/* Left Arrow */}
        <div className="absolute left-0 z-10 cursor-pointer" onClick={prevSlide}>
          <FontAwesomeIcon icon={faArrowLeft} className="text-3xl text-gray-500" />
        </div>

        {/* Testimonial Content */}
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`flex flex-col md:flex-row items-center justify-between transition-all duration-500 ease-in-out transform ${
              index === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            } ${index === current ? "block" : "hidden"}`}
          >
            {/* Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={300}
                height={300}
                className="rounded-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-2/3 text-left pl-0 md:pl-10">
              <p className="text-2xl mb-5 mr-5 text-gray-600">
                &#8220;{testimonial.text}&#8221;
              </p>
              <p className="text-xl font-semibold text-gray-900 mt-5">
                {testimonial.name}
              </p>
            </div>
          </div>
        ))}

        {/* Right Arrow */}
        <div className="absolute right-0 z-10 cursor-pointer" onClick={nextSlide}>
          <FontAwesomeIcon icon={faCoffee} className="text-3xl text-gray-500" />
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <>
      <NavForPhar />

      {/* Career Section */}
      <div className="mt-40 flex flex-col md:flex-row items-center md:justify-between px-5">
        <div className="text-left md:w-1/2">
          <p className="containers text-2xl md:text-4xl font-bold">
            Lift your career
          </p>
          <p className="containers -ml-16 text-2xl md:text-4xl font-bold">
            beyond
          </p>
          <p className="containers -ml-3 text-2xl md:text-4xl font-bold">
            expectations.
          </p>

          <p className="containers ml-20 mt-5 text-lg">
            Join us on our journey to solve real world problems
          </p>
          <p className="containers ml-14 text-lg">
            through Pakistan's leading Digital Healthcare
          </p>
          <p className="containers -ml-20 text-lg">Company.</p>
        </div>

        <div className="mt-5 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/Rectangle.webp"
            alt="Career Image"
            className="w-full md:w-auto max-w-xs md:max-w-sm"
          />
        </div>
      </div>

      {/* Core Values Section */}
      <div className="flex flex-col md:flex-row md:justify-between mt-10 px-5">
        <div className="left md:w-1/3 text-left">
          <p className="containers text-blue-500 font-semibold mb-3">OUR STORY</p>
          <p className="containers text-3xl font-bold mb-3 leading-tight">Our Core</p>
          <p className="containers text-3xl font-bold mb-3 leading-tight">Values</p>
        </div>

        <div className="right md:w-2/3 mb-10">
          <p className="text-lg text-gray-700">
            Healthwire culture is obsessed with prioritizing customer-centric
            standards. Our values are driven by transparent, blunt, respectful,
            open, and well-defined processes. We strongly believe that improving
            our user journey will subsequently refine our product. Everyone at
            Healthwire believes in ‘people, products, and profits in the same
            order’, as a reminder of the value they bring to our users.
          </p>
        </div>
      </div>
      <div className="">
        <p className="containers text-blue-600 mb-3 mt-2">CULTURE</p>
        <p className="containers font-bold text-3xl">Life at Healthwire</p>
      </div>
        <Slider/>
        <div className="">
            <p className="containers text-blue-600 mb-3 mt-2">Testimonials</p>
            <p className="containers font-bold text-3xl mb-5">What people are saying</p>
        </div>
      <TestimonialSlider />
      <Footer />
    </>
  );
};

export default Page;
