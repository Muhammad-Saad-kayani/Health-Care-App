'use client'

import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  items : [],
  status : null,
  error : null
}

export const productFetch = createAsyncThunk(
    'products/productFetch',
    async (id=null, { rejectWithValue }) => {
      try{
      const response = await axios.get("http://localhost:5000/products")
      return response?.data
    } catch (error){
        return rejectWithValue("An Error Occured")
    }
      
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder
        .addCase(createAsyncThunk.pending, (state, action) => {
            state.status = "Pending"
        })
        .addCase(createAsyncThunk.fulfilled, (state, action) => {
            state.status = "Sucess"
            state.items = action.payload
        })
        .addCase(createAsyncThunk.rejected, (state, action) => {
            state.status = "rejected"
            state.error = action.payload       
        })
    }
})

export default productSlice.reducer