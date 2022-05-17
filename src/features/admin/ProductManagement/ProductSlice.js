import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { API_URL, HTTP_STATUS } from "../../../app/constant";
import axios from 'axios';
export const fetchProductsData = createAsyncThunk(
  'products/fetchProductsData',
  async () => {
      const {data} = await axios.get(`${API_URL}/products`, {headers: {'Access-Control-Allow-Origin': '*'}})
      return data
  }
)
export const fetchDeleteProduct = createAsyncThunk(
    'products/fetchDeleteProduct',
    async (productId) => {
        await axios.delete(`${API_URL}/products/${productId}`)
        return productId
    }
  )
  export const fetchAddProduct = createAsyncThunk(
    'products/fetchAddProduct',
    async (product) => {
        await axios.add(`${API_URL}/products`, product)
        return product
    }
  )
const productsSlice = createSlice({
  name: "products",
  initialState: {
      loading: null,
      data: []
  },
  reducers:{},
  extraReducers: {
      [fetchProductsData.pending](state) {
          state.loading = HTTP_STATUS.PENDING
      },
      [fetchProductsData.fulfilled](state, {payload}) {
          state.loading = HTTP_STATUS.FULFILLED
          state.data = payload
      },
      [fetchProductsData.rejected](state) {
          state.loading = HTTP_STATUS.REJECTED
      },
      [fetchDeleteProduct.pending](state) {
        state.loading = HTTP_STATUS.PENDING
      },
      [fetchDeleteProduct.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED
        // const index = current(state).data.foreach((product, index) => {
        //     if(product.product_id = action.payload) {
        //         return index;
        //     }
        //     return 0;
        // })
        // current(state).splice(index, 1);
      },
      [fetchDeleteProduct.rejected](state) {
        state.loading = HTTP_STATUS.REJECTED
      },
  }
})
export const selectProducts = (state) => state.products.data;
export default productsSlice.reducer
