import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: JSON.parse(localStorage.getItem("user"))?.name } || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user.name = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
