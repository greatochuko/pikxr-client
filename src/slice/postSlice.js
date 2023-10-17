import { createSlice } from "@reduxjs/toolkit";

const initialState = { modalIsOpen: false, modalType: "", posts: [], post: {} };

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
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { togglemodal, setPosts, setPost } = postSlice.actions;
export default postSlice.reducer;
