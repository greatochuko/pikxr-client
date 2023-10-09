import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userID: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userID = action.payload;
    },
    logout: (state) => {
      state.userID = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
