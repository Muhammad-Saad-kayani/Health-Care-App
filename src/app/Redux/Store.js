'use client'

import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { getTotals } from './CartSlice'
import doctorReducer from "./DoctorSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    doctor : doctorReducer,
  },
})

store.dispatch(getTotals())