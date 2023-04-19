import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFilters = createAsyncThunk('filters, fetchFilters', async (params) => {
  const { url } = params;

  const { data } = await axios.get(`http://localhost:3001/${url}/`);
  return data;
});

const initialState = {
  filters: [],
  loadingStatus: 'waiting',
  activeSideBar: false,
  activeSort: {
    name: '',
    sortProperty: '',
  },
  inputValue: '',
  activeCategory: 0,
  nameCategory: 'Всі',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setSideBar: (state, action) => {
      state.activeSideBar = action.payload;
    },
    selectActiveSort: (state, action) => {
      state.activeSort = action.payload;
    },

    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setNameCategory: (state, action) => {
      state.nameCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.loadingStatus = 'success';
        state.filters = action.payload;
      })
      .addCase(fetchFilters.rejected, (state) => {
        state.loadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

export const {
  setFilters,
  setSideBar,
  selectActiveSort,
  setInputValue,
  setActiveCategory,
  setNameCategory,
} = filtersSlice.actions;

export default filtersSlice.reducer;
