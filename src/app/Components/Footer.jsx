import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons/faSquareFacebook";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

function Footer() {
  return (
    <footer className="w-full  bg-blue py-5">
      <section className="navsec w-full flex gap-12 mb-2 py-8">
        <div className="flex py-2 flex-wrap w-72">
          <div className="img rounded">
            <img
              className="rounded-lg"
              src="/logof.jpeg"
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="title text-white font-sans text-xl font-bold  w-full">
            Aapki Sehat, Hamari Tarjeeh
          </div>
          <div className="get w-full text-white font-sans text-lg font-semibold">Get The Healthwire App</div>
          <div className="play w-full">
            <a href="/"><img
             src="/playstore.png" 
             alt="" 
             width={40}
             height={40}
             />
            </a>
          </div>
        </div>
        <div className="text-white w-72  font-sans">
          <h1 className="font-bold py-2">Company</h1>
          <ul className="text-blue-100">
            <li>Home</li>
            <li>About</li>
            <li>News</li>
            <li>Diseases</li>
            <li>Editorial Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="text-white w-72 font-sans">
          <h1 className="font-bold py-2">Top Specialities</h1>
          <ul className="text-blue-100">
            <li>Dermatologist</li>
            <li>Gynecologist</li>
            <li>Neurologist</li>
            <li>Gastroenterologist</li>
            <li>Orthopedic Surgeon</li>
            <li>Dentist Us</li>
            <li>Ophthalmologist</li>
            <li>Psychiatrist</li>
            <li>Urologist</li>
            <li>Ear Nose Throat Specialist</li>
          </ul>
        </div>
        <div className="text-white w-72 font-sans">
          <h1 className="font-bold py-2">Resources</h1>
          <ul className="text-blue-100">
            <li>Blogs</li>
            <li>Hospital</li>
            <li>Labs</li>
            <li>Pharmacy</li>
            <li>A-to-Z Medicine</li>
            <li>Doctors</li>
            <li></li>
          </ul>
        </div>
      </section>

      <section className="foot navsec w-full h-32 border-t border-blue-200 flex items-center justify-between gap-2 text-blue-50  font-sans">
        <div className="">
          <a href="">© Healthwire 2024 Terms Privacy</a>
        </div>
        <div className="flex items-center justify-between gap-4">
          <a href="">
            <FontAwesomeIcon icon={faYoutube} className="size-6" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faSquareFacebook} className="size-6" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faTwitter} className="size-6" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} className="size-6" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
