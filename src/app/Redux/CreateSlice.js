"use client";

import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    return serializedCart ? JSON.parse(serializedCart) : { cartItems: [], cartTotalQuantity: 0, cartTotalAmount: 0 };
  } catch (e) {
    console.error("Could not load cart from localStorage", e);
    return { cartItems: [], cartTotalQuantity: 0, cartTotalAmount: 0 };
  }
};

const saveCartToLocalStorage = (state) => {
  try {
    const serializedCart = JSON.stringify(state);
    localStorage.setItem("cart", serializedCart);
  } catch (e) {
    console.error("Could not save cart to localStorage", e);
  }
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }

      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.cartQuantity,
        0
      );

      saveCartToLocalStorage(state); 
    },
    removeFromCart(state, action) {
      const nextCartItem = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItem;
      saveCartToLocalStorage(state); 
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItem = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItem;
      }
      saveCartToLocalStorage(state); 
    },
    clearCart(state, action) {
      state.cartItems = [];
      saveCartToLocalStorage(state); 
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;

      saveCartToLocalStorage(state); 
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
