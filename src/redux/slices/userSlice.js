import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  id: null,
  userData: {
    name: '',
    mobile: '',
    gender: '',
  },
  userCity: '',
  userDelivary: {
    city: '',
    steet: '',
    homeNumber: '',
    entrance: '',
    apartment: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
    setUserData: (state, action) => {
      state.userData.name = action.payload.name;
      state.userData.mobile = action.payload.mobile;
      state.userData.gender = action.payload.gender;
    },
    setUserDelivary: (state, action) => {
      state.userData.city = action.payload.city;
      state.userData.steet = action.payload.steet;
      state.userData.homeNumber = action.payload.homeNumber;
      state.userData.entrance = action.payload.entrance;
      state.userData.apartment = action.payload.apartment;
    },
    setUserCity: (state, action) => {
      state.userCity = action.payload;
    },
  },
});

export const { setUser, removeUser, setUserData, setUserCity, setUserDelivary } = userSlice.actions;

export default userSlice.reducer;
