import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import totalSlice  from "../features/demoslice"
const store = configureStore({
  reducer: {
    user: userReducer,
    totalRequest :totalSlice
  },
});

export default store;
