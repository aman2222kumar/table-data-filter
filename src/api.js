import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchData = createAsyncThunk("user/fetchdata", function () {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
});

export default fetchData;
