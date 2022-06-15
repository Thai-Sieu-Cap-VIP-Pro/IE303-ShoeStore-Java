import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../../api/AuthApi";


const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
    },
    logout: (state, action) => {
      state.isLoggedIn = false
    }
  },
});

export const { reducer: AuthReducer, actions } = AuthSlice;
export const { login, logout } = actions;
export default AuthReducer;
