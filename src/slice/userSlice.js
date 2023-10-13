import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { id: JSON.parse(localStorage.getItem("user"))?.id } || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user.id = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
