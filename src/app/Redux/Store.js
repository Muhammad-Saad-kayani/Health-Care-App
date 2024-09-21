'use client'

import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { getTotals } from './CreateSlice'
import doctorReducer from "./CreateSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    doctor : doctorReducer,
  },
})

store.dispatch(getTotals())