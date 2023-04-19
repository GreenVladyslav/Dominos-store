import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchById = createAsyncThunk('getById, fetchByIdStatus', async (params) => {
  const { currentUrl, id } = params;

  const { data } = await axios.get(`http://localhost:3001/${currentUrl}/${id}`);

  return data;
});

const initialState = {
  itemsId: {},
  loadingStatus: 'waiting',
};

export const singlePageSlice = createSlice({
  name: 'getById',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.itemsId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchById.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        state.loadingStatus = 'success';
        state.itemsId = action.payload;
      })
      .addCase(fetchById.rejected, (state) => {
        state.loadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

export const { setId } = singlePageSlice.actions;

export default singlePageSlice.reducer;
