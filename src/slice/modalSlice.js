import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false, type: "" };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.type = action.payload;
    },
    closeModal: (state) => {
      state.open = false;
      state.type = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
