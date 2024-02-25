import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d64f40f6967ba8e3bde860.mockapi.io/';

export const getCars = createAsyncThunk('cars/fetchAll', async thunkAPI => {
  try {
    const controller = new AbortController();
    const response = await axios.get(`advert?page=${1}&limit=${12}`, {
      signal: controller.signal,
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getMoreCars = createAsyncThunk(
  'cars/fetchMore',
  async (page, thunkAPI) => {
    try {
      const controller = new AbortController();
      const response = await axios.get(`advert?page=${page}&limit=${12}`, {
        signal: controller.signal,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
