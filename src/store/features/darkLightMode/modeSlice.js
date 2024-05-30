import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  light: false,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.light = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
