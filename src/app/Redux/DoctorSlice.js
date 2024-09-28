"use client";

import { createSlice } from "@reduxjs/toolkit";

const loadDoctorStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("doctorState");
    return serializedState ? JSON.parse(serializedState) : { doctors: [] };
  } catch (e) {
    console.error("Could not load state from localStorage", e);
    return { doctors: [] };
  }
};

const saveDoctorStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("doctorState", serializedState);
  } catch (e) {
    console.error("Could not save state to localStorage", e);
  }
};

const initialDoctorState = loadDoctorStateFromLocalStorage();

const doctorSlice = createSlice({
  name: "doctors",
  initialState: initialDoctorState,
  reducers: {
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
      saveDoctorStateToLocalStorage(state);
    },
    removeDoctor: (state, action) => {
      state.doctors.splice(action.payload, 1);
      saveDoctorStateToLocalStorage(state);
    },
  },
});

export const { addDoctor, removeDoctor } = doctorSlice.actions;

export default doctorSlice.reducer;
