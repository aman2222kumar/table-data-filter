import { configureStore } from "@reduxjs/toolkit";
import reducer_data from "./fetchReducer";

const store = configureStore({
  reducer: {
    apiData: reducer_data,
  },
});

export default store;
