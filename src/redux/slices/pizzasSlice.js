import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchPizzas = createAsyncThunk('pizza, fetchPizzas', async (params) => {
//   const { order, sortBy, search } = params;

//   const { data } = await axios.get(
//     `https://63e656b27eef5b223383cd98.mockapi.io/dominos?&orderBy=${sortBy}&order=${order}${search}`,
//   );
//   return data;
// });

export const fetchPizzas = createAsyncThunk('pizza, fetchPizzasStatus', async (params) => {
  const { sortBy, order, search } = params;

  const { data } = await axios.get(
    `https://json-server-vercel-three-mu.vercel.app/pizza?_sort=${sortBy}&_order=${order}&name_like=${search}`,
  );
  return data;
});

const initialState = {
  items: [],
  loadingStatus: 'waiting',
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.loadingStatus = 'success';
        state.items = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.loadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

// export const sortPizzaData = createSelector(
//   (state) => state.pizza.activeSort.sortProperty,
//   (state) => state.pizza.items,
//   (active, elements) => {
//     switch (active) {
//       case '':
//         return elements;
//       case '-price':
//         return elements.slice().sort((a, b) => (a.price[0] > b.price[0] ? 1 : -1));
//       case 'price':
//         return elements.slice().sort((a, b) => (b.price[0] > a.price[0] ? 1 : -1));
//       case '-rating':
//         return elements.slice().sort((a, b) => (a.rating > b.rating ? 1 : -1));
//       case 'rating':
//         return elements.slice().sort((a, b) => (b.rating > a.rating ? 1 : -1));
//       default:
//         throw new Error('I dont want sorting');
//     }
//   },
// );

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
