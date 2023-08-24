import { createSlice } from "@reduxjs/toolkit";
import fetchData from "./api";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const fetchReducerBro = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default fetchReducerBro.reducer;
