import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteCarsList: [],
};

export const favoriteCarsList = createSlice({
  name: 'favoriteCarsList',
  initialState,
  reducers: {
    addFavoriteCar(state, action) {
      if (state.favoriteCarsList.includes(action.payload)) {
        state.favoriteCarsList = state.favoriteCarsList.filter(
          i => i !== action.payload
        );
      } else {
        state.favoriteCarsList.push(action.payload);
      }
    },
  },
});

export const { addFavoriteCar } = favoriteCarsList.actions;
