import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../../server/controllers/userController";
import { fetchUser } from "../services/userServices";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  user: (await fetchUser(token)) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
