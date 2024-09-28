"use client"


import { createSlice } from '@reduxjs/toolkit';
import Cardsdata from "../Components/Card1";


const searchSuggestions = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return Cardsdata.filter((item) =>
    item.title.toLowerCase().includes(lowercaseQuery)
  );
};

const initialState = {
  query: '',
  suggestions: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
      state.suggestions = action.payload.length
        ? searchSuggestions(action.payload)
        : [];
    },
    clearSuggestions: (state) => {
      state.suggestions = [];
    },
  },
});

export const { setQuery, clearSuggestions } = searchSlice.actions;
export default searchSlice.reducer;
