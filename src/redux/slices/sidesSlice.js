import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSides = createAsyncThunk('sides, fetchSideStatus', async (params) => {
  const { sortBy, order, search, category } = params;

  const { data } = await axios.get(
    `http://localhost:3001/sides?_sort=${sortBy}&_order=${order}&name_like=${search}&${category}`,
  );

  return data;
});

const initialState = {
  items: [],
  loadingStatus: 'waiting',
};

export const sidesSlice = createSlice({
  name: 'sides',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSides.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchSides.fulfilled, (state, action) => {
        state.loadingStatus = 'success';
        state.items = action.payload;
      })
      .addCase(fetchSides.rejected, (state) => {
        state.loadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

export const { setItems } = sidesSlice.actions;

export default sidesSlice.reducer;
