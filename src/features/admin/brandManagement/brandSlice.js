import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BrandAPI from "../../../api/BrandApi";

export const getAllBrands = createAsyncThunk(
  "brand/getAllBrands",
  async (params, thunkAPI) => {
    const allBrands = await BrandAPI.getAllBrands();
    return allBrands;
  }
);

export const deleteBrand = createAsyncThunk(
  "brand/deleteBrand",
  async (params, thunkAPI) => {
    const response = await BrandAPI.deleteBrand(params);
    return response;
  }
);

const BrandSlice = createSlice({
  name: "auth",
  initialState: {
    loginUser: "625283db28644968034d08a3",
    current: {},
    loading: false,
    error: "",
    isLogin: false,
    listBrands: [],
  },
  reducers: {},
  extraReducers: {
    [getAllBrands.pending]: (state, action) => {},

    [getAllBrands.rejected]: (state, action) => {},
    [getAllBrands.fulfilled]: (state, action) => {
      state.listBrands = action.payload.data;
    },
    [deleteBrand.pending]: (state, action) => {},

    [deleteBrand.rejected]: (state, action) => {},
    [deleteBrand.fulfilled]: (state, action) => {
      // state.listBrands = action.payload.data;
    },
  },
});

export const { reducer: BrandReducer, actions } = BrandSlice;
export const {} = actions;
export default BrandReducer;
