import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "", // anda
  theme: "dark", // anda
  authToken: "", //anda
  user: {}, // anda
  isLogged: false, // anda
  addRoom: false,
  allRooms: [],
  aboutProject: ``,
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
    logout: (state, action) => {
      state.user = {};
      state.isLogged = false;
    },
    setValidateUser: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    setAddRoom: (state, action) => {
      state.addRoom = action.payload;
    },
    setAllRooms: (state, action) => {
      state.allRooms = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setAboutProject: (state, action) => {
      state.aboutProject = action.payload;
    },
  },
});

export const {
  themeSwitcher,
  setLanguage,
  logout,
  setValidateUser,
  updateUser,
  setAddRoom,
  setAllRooms,
  setAuthToken,
  setAboutProject,
} = appSlice.actions;

export default appSlice.reducer;
