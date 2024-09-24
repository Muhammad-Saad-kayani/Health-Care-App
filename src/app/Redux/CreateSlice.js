"use client";

import { createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("doctorState");
    return serializedState
      ? JSON.parse(serializedState)
      : {
          cartItems: [],
          cartTotalQuantity: 0,
          cartTotalAmount: 0,
          doctors: [],
        };
  } catch (e) {
    console.error("Could not load state from localStorage", e);
    return {
      cartItems: [],
      cartTotalQuantity: 0,
      cartTotalAmount: 0,
      doctors: [],
    };
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("doctorState", serializedState);
  } catch (e) {
    console.error("Could not save state to localStorage", e);
  }
};

const initialState = loadStateFromLocalStorage();

const doctorSlice = createSlice({
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
    
      state.cartTotalAmount = parseFloat(
        state.cartItems.reduce(
          (total, item) => total + item.price * item.cartQuantity,
          0
        ).toFixed(2)
      );
      saveStateToLocalStorage(state);
    }, 

    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      saveStateToLocalStorage(state);
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
      saveStateToLocalStorage(state);
    },
    clearCart(state) {
      state.cartItems = [];
      saveStateToLocalStorage(state);
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

      saveStateToLocalStorage(state);
    },
    addDoctor: (state, action) => {
      const doctor = {
        name: action.payload.name,
        bio: action.payload.bio,
        degree: action.payload.degree,
        experience: action.payload.experience,
        category: action.payload.category,
        image: action.payload.image,
      };
      state.doctors.push(doctor);
      saveStateToLocalStorage(state);
    },
    deleteDoctor: (state, action) => {
      state.doctors.splice(action.payload, 1);
      saveStateToLocalStorage(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
  addDoctor,
  deleteDoctor,
} = doctorSlice.actions;

export default doctorSlice.reducer;
