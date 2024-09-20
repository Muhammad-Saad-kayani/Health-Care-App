'use client'

import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { getTotals } from './CreateSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

store.dispatch(getTotals())