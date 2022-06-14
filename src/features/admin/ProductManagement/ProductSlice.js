import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { API_URL, HTTP_STATUS } from "../../../app/constant";
import axios from 'axios';
export const fetchProductsData = createAsyncThunk(
  'products/fetchProductsData',
  async () => {
      const {data} = await axios.get(`${API_URL}/products`)
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
        console.log(product)
        const {data} = await axios.post(`${API_URL}/products`, product)
        return data
    }
  )
export const fetchUpdateProduct = createAsyncThunk(
  'products/fetchUpdateProduct',
  async (product) => {
    console.log(product)
    await axios.put(`${API_URL}/products/${product.product_id}`, product)
    return product;
  }
)
const productsSlice = createSlice({
  name: "products",
  initialState: {
      isShow: false,
      loading: null,
      prevProduct: [],
      data: []
  },
  reducers:{
    showAddProductForm: (state, action) => {
      state.isShow = true;
    },
    hideAddProductForm: (state, action) => {
      state.isShow = false;
    },
    filterProductByBrand: (state, action) => {
      if(action.payload == -1) {
        state.data = current(state).prevProduct;
      }
      else {
        state.data = current(state).prevProduct.filter(product => product.category_id == action.payload)
      }
    },
    sortProduct: (state, action) => {
      console.log(typeof(action.payload), action.payload)
      switch(action.payload) {
        case "1":
          state.data.sort((firstProduct, secondProduct) => firstProduct.product_id - secondProduct.product_id);
          break;
        case "2":
          state.data.sort((firstProduct, secondProduct) => firstProduct.product_price - secondProduct.product_price);
          break;
        case "3":
          state.data.sort((firstProduct, secondProduct) => secondProduct.product_price - firstProduct.product_price);
          break;
        case "4":
          state.data.sort((firstProduct, secondProduct) => secondProduct.product_id - firstProduct.product_id);
        default:
          // code block
      }
    } 

  },
  extraReducers: {
      [fetchProductsData.pending](state) {
          state.loading = HTTP_STATUS.PENDING
      },
      [fetchProductsData.fulfilled](state, {payload}) {
          state.loading = HTTP_STATUS.FULFILLED
          state.data = payload
          state.prevProduct = payload
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
      [fetchAddProduct.pending](state) {
        state.loading = HTTP_STATUS.PENDING
      },
      [fetchAddProduct.fulfilled](state, action) {
          state.loading = HTTP_STATUS.FULFILLED
          //state.data.push(action.payload)
      },
      [fetchAddProduct.rejected](state) {
          state.loading = HTTP_STATUS.REJECTED
      },
      [fetchUpdateProduct.pending](state) {
        state.loading = HTTP_STATUS.PENDING
      },
      [fetchUpdateProduct.fulfilled](state, action) {
          state.loading = HTTP_STATUS.FULFILLED
          // state.data = current(state).data.find(item => (
          //   item.product_id === action.payload.product_id
          // ))
      },
      [fetchUpdateProduct.rejected](state) {
          state.loading = HTTP_STATUS.REJECTED
      },
  }
})
export const selectProducts = (state) => state.products.data;
export default productsSlice.reducer
const {actions}= productsSlice
export const {showAddProductForm, hideAddProductForm, filterProductByBrand, sortProduct} = actions;