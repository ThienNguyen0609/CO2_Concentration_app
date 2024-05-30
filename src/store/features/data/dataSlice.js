import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
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
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToData, clearData } = dataSlice.actions;

export default dataSlice.reducer;
