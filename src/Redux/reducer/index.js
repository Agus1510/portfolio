import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "", // anda
  theme: "dark", // anda
};

export const appSlice = createSlice({
  name: "reducerAll",
  initialState,
  reducers: {
    themeSwitcher: (state, action) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { themeSwitcher, setLanguage } = appSlice.actions;

export default appSlice.reducer;
