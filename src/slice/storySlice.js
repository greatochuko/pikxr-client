import { createSlice } from "@reduxjs/toolkit";
import { fetchStories } from "../services/storyServices";

const stories = (await fetchStories())
  .map((a) => a)
  .sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

const initialState = { stories };

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
