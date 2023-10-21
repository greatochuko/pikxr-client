import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../services/postServices";

const initialState = {
  posts: await fetchPosts(),
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
      state.modalIsOpen = false;
    },
  },
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
