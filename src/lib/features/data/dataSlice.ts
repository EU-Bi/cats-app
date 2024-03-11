import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};
const dataSlice = createSlice({
  name: "fetchData",
  initialState,
  reducers: {
    getData: (state, action) => {
        
    }
  },
});
