import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./LocalStorage";
import UserReducer from "./features/User/UserSlice";

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    User: UserReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
