import { createSlice } from "@reduxjs/toolkit";

const initialState = { createPostModal: false };

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    toggleCreatePostModal: (state) => {
      state.createPostModal = !state.createPostModal;
    },
  },
});

export const { toggleCreatePostModal } = postSlice.actions;
export default postSlice.reducer;
