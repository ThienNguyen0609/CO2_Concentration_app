import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  wssPackageLost: [],
  serverPackageLost: []
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addToData: (state, action) => {
      state.data.push(action.payload);
    },
    clearData: (state, action) => {
      state.data = action.payload
    },
    setWssPackageLost: (state, action) => {
      state.wssPackageLost.push(action.payload)
    },
    setServerPackageLost: (state, action) => {
      state.serverPackageLost.push(...action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToData, clearData, setWssPackageLost, setServerPackageLost } = dataSlice.actions;

export default dataSlice.reducer;
