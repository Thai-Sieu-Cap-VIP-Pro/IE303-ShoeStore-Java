import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { API_URL, HTTP_STATUS } from "../../../app/constant";
import axios from 'axios';
import shippingAPI from '../../../api/ShippingApi';
export const fetchShippingsData = createAsyncThunk(
  'shipping/fetchShippingData',
  async (id) => {
      const {data} = await shippingAPI.getShippingByAccountId(id)
      return data
  }
)

export const saveShipping = createAsyncThunk(
    'shipping/save',
    async (params) => {
        const {data} = await shippingAPI.addShipping(params)
        return data
    }
  )

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
      isShow: false,
      loading: null,
      prevProduct: [],
      listShipping: []
  },
  reducers:{
    
   

  },
  extraReducers: {
      [fetchShippingsData.fulfilled](state, actions) {
         state.listShipping = actions.payload;
      },
     
  }
})
export default checkoutSlice.reducer
const {actions}= checkoutSlice
export const {} = actions;