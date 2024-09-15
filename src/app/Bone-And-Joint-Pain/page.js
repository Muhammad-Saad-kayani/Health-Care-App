import Image from "next/image";
import React from "react";
import NavForPhar from "../Components/NavForPhar";
import Footer from "../Components/Footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import BreadCrumb from "../Components/BreadCrum";

export const Cardsdata = [
  {
    img: "/sec1img1.png",
    title: "Eziday (25mg) 20 Tablets",
    price: "Rs. 43.2",
  },
  {
    img: "/sec1img2.png",
    title: "Carveda (6.25mg) 30 Tablets",
    price: "Rs. 102.67",
  },
  {
    img: "/sec1img3.webp",
    title: "Co-Eziday (50/12.5mg) 20 Tab",
    price: "229.5",
  },
  {
    img: "/sec1img4.png",
    title: "Zurig (40mg) 20 Tablets",
    price: "Rs. 294.5",
  },
  {
    img: "/sec2img1.webp",
    title: "Eziday (25mg) 20 Tablets",
    price: "Rs. 43.2",
  },
  {
    img: "/sec2img2.webp",
    title: "Carveda (6.25mg) 30 Tablets",
    price: "Rs. 102.67",
  },
  {
    img: "/sec2img3.webp",
    title: "Co-Eziday (50/12.5mg) 20 Tab",
    price: "229.5",
  },
  {
    img: "/sec2img4.png",
    title: "Zurig (40mg) 20 Tablets",
    price: "Rs. 294.5",
  },
  {
    img: "/sec3img1.webp",
    title: "Eziday (25mg) 20 Tablets",
    price: "Rs. 43.2",
  },
  {
    img: "/sec3img2.webp",
    title: "Carveda (6.25mg) 30 Tablets",
    price: "Rs. 102.67",
  },
  {
    img: "/sec3img3.webp",
    title: "Co-Eziday (50/12.5mg) 20 Tab",
    price: "229.5",
  },
  {
    img: "/sec3img4.webp",
    title: "Zurig (40mg) 20 Tablets",
    price: "Rs. 294.5",
  },
  {
    img: "/sec4img1.webp",
    title: "Eziday (25mg) 20 Tablets",
    price: "Rs. 43.2",
  },
  {
    img: "/sec4img2.png",
    title: "Carveda (6.25mg) 30 Tablets",
    price: "Rs. 102.67",
  },
  {
    img: "/sec4img3.png",
    title: "Co-Eziday (50/12.5mg) 20 Tab",
    price: "229.5",
  },
  {
    img: "/sec4img4.webp",
    title: "Zurig (40mg) 20 Tablets",
    price: "Rs. 294.5",
  },
];

const BonesCare = () => {
  return (
    <>
      <NavForPhar />
      <h1 className="text-2xl font-bold mt-10">Medications</h1>
      <div className=" pt-8 grid-cols-1 gap-2 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4">
        <section className="containers mt-14">
          <div className="w-full navsec">
            <h1 className="font-extrabold text-xl mb-5 ml-4">Wellness And Beauty</h1>
            <Breadcrumb/>
            <BreadCrumb/>
            <a
              href="/Bone-And-Joint-Pain"
              className="p-3 border rounded-full border-gray-400 inline-block mr-2 mb-2"
            >
              Supplements
            </a>
            <a
              href="/Hair-&-Nails"
              className="p-3 border rounded-full border-gray-400 inline-block mr-2 mb-2"
            >
              Hair And Nails Care
            </a>
            <a
              href="/Cardiac-care"
              className="p-3 border rounded-full border-gray-400 inline-block mr-2 mb-2"
            >
              Skin Care
            </a>
            <a
              href="/Oral-Hygiene"
              className="p-3 border rounded-full border-gray-400 inline-block mr-2 mb-2"
            >
              Oral Hygiene
            </a>
            <div className="w-full justify-items-center pt-8 grid grid-cols-1 gap-2 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4">
              {Cardsdata.map((card, index) => (
                <div key={index} className="p-4 shadow-sm">
                  <div className="navsec bg-slate-100 w-56 h-28 py-2 pl-4">
                    <img
                      className="w-48 h-20 bg-slate-300"
                      src={card.img}
                      alt={card.title}
                    />
                  </div>
                  <p className="PARA pt-4">{card.title}</p>
                  <p className="text-xs pt-2">{card.price}</p>
                  <button className="btn btn-border w-28 h-9 mt-5 text-center text-xs">
                    Add To Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BonesCare;
