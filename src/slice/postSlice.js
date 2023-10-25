import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../services/postServices";
import { fetchUser } from "../services/userServices";

const { likedPosts, savedPosts } = await fetchUser();

const initialState = {
  posts: await fetchPosts(),
  likedPosts,
  savedPosts,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    filterDeletedPost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
    refreshPostLikes: (state, action) => {
      state.likedPosts = action.payload;
    },
    refreshPostSaves: (state, action) => {
      state.savedPosts = action.payload;
    },
  },
});

export const {
  setPosts,
  filterDeletedPost,
  refreshPostLikes,
  refreshPostSaves,
} = postSlice.actions;
export default postSlice.reducer;
