import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    LoginUser: {},
    isLogin: false,
  },
  reducers: {},
});

export const { reducers: AuthReducer } = AuthSlice;

export default AuthReducer;
