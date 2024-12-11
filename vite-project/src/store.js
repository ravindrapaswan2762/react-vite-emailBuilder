// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import popupReducer from './redux/popupSlice'

const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});

export default store;
