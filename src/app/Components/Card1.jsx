'use client'

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CreateSlice";

export const Cardsdata = [
  {
    id: 1,
    img: "/anti.jfif",
    title: "Eziday (25mg) 20 Tablets",
    price: 43.2, 
  },
  {
    id: 2,
    img: "/carveda.jfif",
    title: "Carveda (6.25mg) 30 Tablets",
    price: 102.67,
  },
  {
    id: 3,
    img: "/eziday.jfif",
    title: "Co-Eziday (50/12.5mg) 20 Tab",
    price: 229.5,
  },
  {
    id: 4,
    img: "/xplended.jfif",
    title: "Zurig (40mg) 20 Tablets",
    price: 294.5,
  },
];

const Card1 = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (card) => {
    const itemToAdd = {
      id: card.id,
      name: card.title,
      image: card.img,
      price: card.price,
    };
    dispatch(addToCart(itemToAdd));
    console.log(`Added to cart:`, itemToAdd);
  };

  return (
    <>
      <h2 className="containers font-bold text-2xl mt-8">Top Selling Products</h2>
      <p className="containers mt-2">
        Get your necessities at{" "}
        <span className="text-red-400 px-1">up to 10%</span> discount on all items.
      </p>
      <section className="w-full flex justify-center">
        <div className="navsec w-full justify-items-center pt-8 grid gap-2 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4">
          {Cardsdata.map((card) => (
            <div key={card.id} className="p-4 shadow-sm">
              <div className="bg-slate-100 w-56 h-28 py-2 pl-4">
                <img
                  className="w-48 h-20 bg-slate-300 cursor-pointer"
                  src={card.img}
                  alt={card.title}
                />
              </div>
              <p className="PARA pt-4">{card.title}</p>
              <p className="text-xs pt-2">Rs. {card.price}</p>
              <button
                onClick={() => handleAddToCart(card)}
                className="btn btn-border w-28 h-9 mt-5 text-center text-xs"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Card1;
