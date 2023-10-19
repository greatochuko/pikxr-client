import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../services/postServices";

const initialState = {
  modalIsOpen: false,
  modalType: "",
  posts: await fetchPosts(),
  post: {},
  story: {},
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    togglemodal: (state, action) => {
      state.modalIsOpen = !state.modalIsOpen;
      state.modalType = action.payload ? action.payload : "";
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
      state.modalIsOpen = false;
    },
    setModalPost: (state, action) => {
      state.post = action.payload;
    },
    setModalStory: (state, action) => {
      state.story = action.payload;
    },
  },
});

export const { togglemodal, setPosts, setModalPost, setModalStory } =
  postSlice.actions;
export default postSlice.reducer;
