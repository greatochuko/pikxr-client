import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: JSON.parse(localStorage.getItem("user"))?.name } || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user.name = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
