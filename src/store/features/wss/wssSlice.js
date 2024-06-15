import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flag: false,
};

export const wssSlice = createSlice({
  name: "wss",
  initialState,
  reducers: {
    changeFlag: (state, action) => {
      state.flag = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeFlag } = wssSlice.actions;

export default wssSlice.reducer;
