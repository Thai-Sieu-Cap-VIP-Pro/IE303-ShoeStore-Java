import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import {  HTTP_STATUS } from "../../../app/constant";
import CartDetailAPI from "../../../api/CartDetailApi"

export const fetchCartDetailData = createAsyncThunk(
  'cartDetails/fetchCartDetailData',
  async (id) => {
      const {data} = await CartDetailAPI.getCartDetailsByAccountId(id)
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

export const fetchUpdateCartDetail = createAsyncThunk(
    'cartDetails/fetchUpdateCartDetail',
    async (cartDetail) => {
        console.log(cartDetail)
        const {data} = await CartDetailAPI.updateCartDetail(cartDetail)
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

        IncreaseQuantity: (state, action) => {
            console.log(action.payload)
            state.data = state.data.map(item=> {
                if (item.cartDetailId === action.payload.cartDetailId )
                {
                    let x = item.cartProductQuanity + 1;
             
                    return {...item, cartProductQuanity : x,}
                }

                return item;
            }
                )

     },
    
     DecreaseQuantity: (state, action) => {
        console.log(action.payload)
        state.data = state.data.map(item=> {
            if (item.cartDetailId === action.payload.cartDetailId )
            {
                let x = item.cartProductQuanity - 1;
         
                return {...item, cartProductQuanity : x,}
            }

            return item;
        }
            )

 }},

     
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
  const {actions}= cartDetailsSlice
export const {IncreaseQuantity, DecreaseQuantity} = actions;