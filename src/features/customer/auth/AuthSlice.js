import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = user 
  ? { isLoggedIn: true }
  : { isLoggedIn: false };
const AuthSlice = createSlice({
  name: "authcus",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
    },
    logout: (state, action) => {
      state.isLoggedIn = false
    }
  },
});

export const {actions,reducers: AuthReducer } = AuthSlice;

export const {login, logout} = actions

export default AuthReducer;
