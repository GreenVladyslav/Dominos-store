import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk('pizza, fetchPizzasStatus', async () => {
  const { data } = await axios.get(`http://localhost:3001/categoriesList/`);
  console.log(data);

  return data;
});

const initialState = {
  categories: [],
  loadingStatus: 'waiting',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loadingStatus = 'success';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
