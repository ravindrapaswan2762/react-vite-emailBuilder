
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  subject: "",
  emails: "",
  message: "",
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (state) => {
      state.isOpen = true;
    },
    closePopup: (state) => {
      state.isOpen = false;
    },
    updateSubject: (state, action) => {
      state.subject = action.payload;
    },
    updateEmails: (state, action) => {
      state.emails = action.payload;
    },
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const {
  openPopup,
  closePopup,
  updateSubject,
  updateEmails,
  updateMessage,
} = popupSlice.actions;

export default popupSlice.reducer;
