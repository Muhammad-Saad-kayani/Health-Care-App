"use client";

import { createSlice } from "@reduxjs/toolkit";

const loadhospitalStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("hospitalState");
    return serializedState ? JSON.parse(serializedState) : { hospitals : [] };
  } catch (e) {
    console.error("Could not load state from localStorage", e);
    return { hospitals : [] };
  }
};

const savehospitalStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("doctorState", serializedState);
  } catch (e) {
    console.error("Could not save state to localStorage", e);
  }
};

const initialHospitalState = loadhospitalStateFromLocalStorage();

const hospitalSlice = createSlice({
  name: "hospitals",
  initialState: initialHospitalState,
  reducers: {
    addHospital: (state, action) => {
      const hospital = {
        name: action.payload.name,
        bio: action.payload.bio,
        degree: action.payload.degree,
        experience: action.payload.experience,
        category: action.payload.category,
        image: action.payload.image,
      };
      state.hospitals.push(hospital);
      savehospitalStateToLocalStorage(state);
    },
    removeHospital: (state, action) => {
      state.hospitals.splice(action.payload, 1);
      savehospitalStateToLocalStorage(state);
    },
  },
});

export const { addHospital, removeHospital } = hospitalSlice.actions;

export default hospitalSlice.reducer;
