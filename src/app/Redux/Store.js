'use client'

import { configureStore} from '@reduxjs/toolkit'
import productReducer, { productFetch } from "./Slice"
import { productsApi } from './RTKQuery'

export const store = configureStore({
  reducer: {
    products : productReducer,
    [productsApi.reducerPath]: productsApi.reducer,  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

store.dispatch(productFetch())
    