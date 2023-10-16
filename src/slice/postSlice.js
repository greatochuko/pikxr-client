import { createSlice } from "@reduxjs/toolkit";

const initialState = { createPostModal: false, posts: [] };

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    toggleCreatePostModal: (state) => {
      state.createPostModal = !state.createPostModal;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
      state.createPostModal = false;
    },
  },
});

export const { toggleCreatePostModal, setPosts } = postSlice.actions;
export default postSlice.reducer;
