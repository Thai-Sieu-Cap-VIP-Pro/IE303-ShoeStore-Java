import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "../../../app/constant";
import axios from "axios";
// export const fetchProductsData = createAsyncThunk(
//   "products/fetchProductsData",
//   async () => {
//     const { data } = await axios.get(`${API_URL}/products`, {
//       headers: { "Access-Control-Allow-Origin": "*" },
//     });
//     return data;
//   }
// );

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    DetailProduct: {},
  },
  reducers: {
    getDetailproduct: (state, action) => {
      state.DetailProduct = action.payload;
    },
  },
  extraReducers: {},
});
export default HomeSlice.reducer;
const { actions } = HomeSlice;
export const { getDetailproduct } = actions;
