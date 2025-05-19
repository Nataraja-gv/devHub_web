import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0, // assuming total requests is a number
};

export const totalRequestSlice = createSlice({
  name: "totalRequests",
  initialState,
  reducers: {
    setTotalRequests: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setTotalRequests } = totalRequestSlice.actions;

export default totalRequestSlice.reducer;
