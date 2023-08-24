import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("user/fetchData", async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/users");
  return res.data;
});

export default fetchData;
