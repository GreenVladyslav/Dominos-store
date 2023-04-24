import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getCartFromLS';
import calcTotalPrice from '../../utils/calcTotalPrice';

const { items, totalPrice } = getCartFromLS();

const initialState = {
  totalPrice: totalPrice,
  items: items,
  emptyPopup: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      findItem ? findItem.count++ : state.items.push({ ...action.payload, count: 1 });

      // if (findItem) {
      //   findItem.count++;
      // } else {
      //   state.items.push({
      //     ...action.payload,
      //     count: 1,
      //   });
      // }

      // state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
      state.totalPrice = calcTotalPrice(state.items);
    },
    plusItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      }

      // state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      // state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      // state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeAllItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    activeEmptyPopup: (state, action) => {
      state.emptyPopup = action.payload;
    },
  },
});

// const calcTotalPrice = (state) => {
//   state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
// };

export const { addItem, plusItem, minusItem, removeItem, removeAllItems, activeEmptyPopup } =
  cartSlice.actions;

export default cartSlice.reducer;
