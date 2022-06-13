import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import {  HTTP_STATUS } from "../../../app/constant";
import CartDetailAPI from "../../../api/CartDetailApi"

export const fetchCartDetailData = createAsyncThunk(
  'cartDetails/fetchCartDetailData',
  async () => {
      const {data} = await CartDetailAPI.getAllCartDetails()
      return data
  }
)
export const fetchDeleteCartDetail = createAsyncThunk(
    'cartDetails/fetchDeleteCartDetail',
    async (id) => {
        const {data} = await CartDetailAPI.deleteCartDetail(id)
        return data
    }
)
export const fetchAddCartDetail = createAsyncThunk(
    'cartDetails/fetchDeleteCartDetail',
    async (cardDetail) => {
        const {data} = await CartDetailAPI.addCartDetail(cardDetail)
        return data
    }
)


// export const fetchCartDetailData = createAsyncThunk(
//     'orders/fetchCartDetailData',
//     async () => {
//         const {data} = await CartDetailAPI.getAllCartDetails()
//         return data
//     }
// )

// export const fetchCartDetailData = createAsyncThunk(
//     'orders/fetchCartDetailData',
//     async () => {
//         const {data} = await CartDetailAPI.getAllCartDetails()
//         return data
//     }
// )

const cartDetailsSlice = createSlice({
    name: "cartDetails",
    initialState: {
        loading: null,
        data: []
    },
    reducers:{
    },
    extraReducers: {
        [fetchCartDetailData.pending](state) {
            state.loading = HTTP_STATUS.PENDING
        },
        [fetchCartDetailData.fulfilled](state, {payload}) {
            state.loading = HTTP_STATUS.FULFILLED
            state.data = payload
        },
        [fetchCartDetailData.rejected](state) {
            state.loading = HTTP_STATUS.REJECTED
        },
        [fetchDeleteCartDetail.pending](state) {
            state.loading = HTTP_STATUS.PENDING
        },
        [fetchDeleteCartDetail.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED
        },
        [fetchDeleteCartDetail.rejected](state) {
        state.loading = HTTP_STATUS.REJECTED
        },
        [fetchAddCartDetail.pending](state) {
        state.loading = HTTP_STATUS.PENDING
        },
        [fetchAddCartDetail.fulfilled](state, action) {
            state.loading = HTTP_STATUS.FULFILLED
        },
        [fetchAddCartDetail.rejected](state) {
            state.loading = HTTP_STATUS.REJECTED
        },
    }
  })
  export const selectCartDetails = (state) => state.cartDetails.data;
  export default cartDetailsSlice.reducer