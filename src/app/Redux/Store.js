'use client'

import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { getTotals } from './CartSlice'
import doctorReducer from "./DoctorSlice";
import hospitalReducer from "./HospitalSlice";
import searchReducer from './SearchSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    doctor : doctorReducer,
    hospital : hospitalReducer,
    search: searchReducer,
  },
})

store.dispatch(getTotals())