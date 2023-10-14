import { createSlice } from "@reduxjs/toolkit";

console.log(JSON.parse(localStorage.getItem("user")));

const initialState = {
  user: { ...JSON.parse(localStorage.getItem("user")) } || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload);
      state.user.id = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
