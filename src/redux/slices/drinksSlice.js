import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDrinks = createAsyncThunk('drinks, fetchDrinksStatus', async (params) => {
  const { sortBy, order, search, category } = params;

  const { data } = await axios.get(
    `http://localhost:3001/drinks?_sort=${sortBy}&_order=${order}&name_like=${search}&${category}`,
  );

  return data;
});

const initialState = {
  items: [],
  loadingStatus: 'waiting',
};

export const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrinks.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchDrinks.fulfilled, (state, action) => {
        state.loadingStatus = 'success';
        state.items = action.payload;
      })
      .addCase(fetchDrinks.rejected, (state) => {
        state.loadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

export const { setItems } = drinksSlice.actions;

export default drinksSlice.reducer;
