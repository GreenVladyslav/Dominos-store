import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginForm: false,
  registrationForm: false,
  activeCityPopup: false,
  thanksPopup: false,
  loadingStatus: 'waiting',
  lngActive: 'Укр',
};

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setLoginForm: (state, action) => {
      state.loginForm = action.payload;
    },
    setRegistrationForm: (state, action) => {
      state.registrationForm = action.payload;
    },
    setCityPopup: (state, action) => {
      state.activeCityPopup = action.payload;
    },
    setThanksPopup: (state, action) => {
      state.thanksPopup = action.payload;
    },
    setLoadingStatus: (state, action) => {
      state.loadingStatus = action.payload;
    },
    setLngActive: (state, action) => {
      state.lngActive = action.payload;
    },
  },
});

export const {
  setLoginForm,
  setRegistrationForm,
  setCityPopup,
  setThanksPopup,
  setLoadingStatus,
  setLngActive,
} = formSlice.actions;

export default formSlice.reducer;
