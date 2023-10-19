import { createSlice } from "@reduxjs/toolkit";
import { fetchStories } from "../services/storyServices";

const initialState = { stories: await fetchStories() };

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    setStories: (state, action) => {
      state.stories = action.payload;
    },
  },
});

export const { setStories } = storySlice.actions;

export default storySlice.reducer;
