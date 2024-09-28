// src/utils/cartUtils.js

"use client"

import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

export const useCartHandler = () => {
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

  return { handleAddToCart };
};
