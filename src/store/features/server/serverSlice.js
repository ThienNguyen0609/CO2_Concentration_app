import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data1: [],
  data2: [],
  data3: [],
};

export const serverSlice = createSlice({
  name: "server",
  initialState,
  reducers: {
    setData1: (state, action) => {
      state.data1 = action.payload;
    },
    setData2: (state, action) => {
      state.data2 = action.payload;
    },
    setData3: (state, action) => {
      state.data3 = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData1, setData2, setData3 } = serverSlice.actions;

export default serverSlice.reducer;
