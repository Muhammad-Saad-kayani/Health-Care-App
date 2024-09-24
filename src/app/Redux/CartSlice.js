"use client";

import { createSlice } from "@reduxjs/toolkit";

const loadCartStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    return serializedState
      ? JSON.parse(serializedState)
      : {
          cartItems: [],
          cartTotalQuantity: 0,
          cartTotalAmount: 0,
        };
  } catch (e) {
    console.error("Could not load state from localStorage", e);
    return {
      cartItems: [],
      cartTotalQuantity: 0,
      cartTotalAmount: 0,
    };
  }
};

const saveCartStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (e) {
    console.error("Could not save state to localStorage", e);
  }
};

const initialCartState = loadCartStateFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
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

      state.cartTotalAmount = parseFloat(
        state.cartItems.reduce(
          (total, item) => total + item.price * item.cartQuantity,
          0
        ).toFixed(2)
      );
      saveCartStateToLocalStorage(state);
    },
    
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      saveCartStateToLocalStorage(state);
    },
    
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }
      }
      saveCartStateToLocalStorage(state);
    },
    
    clearCart(state) {
      state.cartItems = [];
      saveCartStateToLocalStorage(state);
    },

    getTotals(state) {
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

      saveCartStateToLocalStorage(state);
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
