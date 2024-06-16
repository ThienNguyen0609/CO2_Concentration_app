import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  packageLosing: []
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
    setPackageLose: (state, action) => {
      state.packageLosing.push(action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToData, clearData, setPackageLose } = dataSlice.actions;

export default dataSlice.reducer;
