import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    userId: "",
    name: "",
    email: "",
    isLoggedIn: false,
    chatList: [],
    messages: [],
  },
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    setChatList: (state, action) => {
      const chat = action.payload;
      const chatExist = state.chatList.some((item) => item._id === chat._id);
      if (!chatExist) {
        state.chatList.push(chat);
      }
    },
    removeFromChatList: (state, action) => {
      const id = action.payload;
      state.chatList = state.chatList.filter((item) => item._id !== id);
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUser, setChatList, setLoggedIn, removeFromChatList } =
  UserSlice.actions;

export const selectUser = (state) => state.User;

export default UserSlice.reducer;
