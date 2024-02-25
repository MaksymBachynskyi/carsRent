import { createSlice } from '@reduxjs/toolkit';
import { getCars, getMoreCars } from 'fetch';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

export const carsListSlice = createSlice({
  name: 'carsList',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getMoreCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMoreCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = [...state.list, ...action.payload];
      })
      .addCase(getMoreCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
