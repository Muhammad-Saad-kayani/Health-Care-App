"use client"


import React from "react";
import NavForPhar from "../Components/NavForPhar";
import Footer from "../Components/Footer";
import BreadCrumb from "../Components/BreadCrumb";
import { useCartHandler } from "../Components/CartReusable";


export const Cardsdata = [
  {
    img: "/sec1img1.png",
    title: "Eziday (25mg) 20 Tablets",
    price: 43.2,
  },
  {
    img: "/sec1img2.png",
    title: "Carveda (6.25mg) 30 Tablets",
    price: 102.67,
  },
  {
    img: "/sec1img3.webp",
    title: "Co-Eziday (50/12.5mg) 20 Tab",
    price: 229.5,
  },
  {
    img: "/sec1img4.png",
    title: "Zurig (40mg) 20 Tablets",
    price:  294.5,
  },
  {
    img: "/sec2img1.webp",
    title: "Eziday (25mg) 20 Tablets",
    price: 43.2,
  },
  {
    img: "/sec2img2.webp",
    title: "Carveda (6.25mg) 30 Tablets",
    price:  102.67,
  },
  {
    img: "/sec2img3.webp",
    title: "Co-Eziday (50/12.5mg) 20 Tab",
    price: 229.5,
  },
  {
    img: "/sec2img4.png",
    title: "Zurig (40mg) 20 Tablets",
    price: 294.5,
  },
  {
    img: "/sec3img1.webp",
    title: "Eziday (25mg) 20 Tablets",
    price: 43.2,
  },
  {
    img: "/sec3img2.webp",
    title: "Carveda (6.25mg) 30 Tablets",
    price:  102.67,
  },
  {
    img: "/sec3img3.webp",
    title: "Co-Eziday (50/12.5mg) 20 Tab",
    price: 229.5,
  },
  {
    img: "/sec3img4.webp",
    title: "Zurig (40mg) 20 Tablets",
    price: 294.5,
  },
  {
    img: "/sec4img1.webp",
    title: "Eziday (25mg) 20 Tablets",
    price: 43.2,
  },
  {
    img: "/sec4img2.png",
    title: "Carveda (6.25mg) 30 Tablets",
    price: 102.67,
  },
  {
    img: "/sec4img3.png",
    title: "Co-Eziday (50/12.5mg) 20 Tab",
    price: 229.5,
  },
  {
    img: "/sec4img4.webp",
    title: "Zurig (40mg) 20 Tablets",
    price: 294.5,
  },
];

const page = () => {
  const { handleAddToCart } = useCartHandler();

  return (
    <>
      <NavForPhar />
      <p className="font-extrabold text-xl mt-40 ml-10">Wellness And Beauty</p>
      <p className="font-extrabold text-xl mt-40 ml-10 mb-3">
        Wellness And Beauty
      </p>
      <BreadCrumb />
      <div className="mt-6 ml-10">
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
      </div>
      <section className="w-full flex justify-center">
        <div className="navsec w-full justify-items-center pt-8 grid gap-2 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4">
          {Cardsdata.map((card, index) => (
            <div key={index} className="p-4 shadow-sm">
              <div className="bg-slate-100 w-56 h-28 py-2 pl-4">
                <img
                  className="w-48 h-20 bg-slate-300 cursor-pointer"
                  src={card.img}
                  alt={card.title}
                />
              </div>
              <p className="PARA pt-4">{card.title}</p>
              <p className="text-xs pt-2">{card.price}</p>
              <button
                className="btn btn-border w-28 h-9  mt-5 text-center text-xs mb-12"
                onClick={() => handleAddToCart(card)}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
