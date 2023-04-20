import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDesserts = createAsyncThunk('desserts, fetchDessertsStatus', async (params) => {
  const { sortBy, order, search } = params;

  const { data } = await axios.get(
    `https://json-server-vercel-three-mu.vercel.app/desserts?_sort=${sortBy}&_order=${order}&name_like=${search}`,
  );

  return data;
});

const initialState = {
  items: [],
  loadingStatus: 'waiting',
};

export const dessertsSlice = createSlice({
  name: 'desserts',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDesserts.pending, (state) => {
        state.loadingStatus = 'loading';
        state.items = [];
      })
      .addCase(fetchDesserts.fulfilled, (state, action) => {
        state.loadingStatus = 'success';
        state.items = action.payload;
      })
      .addCase(fetchDesserts.rejected, (state) => {
        state.loadingStatus = 'error';
        state.items = [];
      })
      .addDefaultCase(() => {});
  },
});

export const { setItems } = dessertsSlice.actions;

export default dessertsSlice.reducer;
