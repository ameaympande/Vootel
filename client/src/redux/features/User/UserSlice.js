import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    userId: "",
    name: "",
    email: "",
    firstName: "",
    lastName: "",
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUser, setLoggedIn } = UserSlice.actions;

export const selectUser = (state) => state.User;

export default UserSlice.reducer;
