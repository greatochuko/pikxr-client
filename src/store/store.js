import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import storyReducer from "../slice/storySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    story: storyReducer,
  },
});

export default store;
