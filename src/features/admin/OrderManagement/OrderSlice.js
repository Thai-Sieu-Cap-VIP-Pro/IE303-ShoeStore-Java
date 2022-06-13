import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { HTTP_STATUS } from "../../../app/constant";
import OrderApi from "../../../api/OrderApi"
export const fetchOrdersData = createAsyncThunk(
  'orders/fetchOrdersData',
  async () => {
      const {data} = await OrderApi.getAllOrders()
      return data
  }
)

export const updateOrderData = createAsyncThunk(
  'orders/updateOrderData',
  async (order) => {
      const {data} = await OrderApi.updateOrder(order)
      return order.order_id
  }
)

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
      isShow: false,
      OrderId: null,
      loading: null,
      prevOrders: [],
      data: []
  },
  reducers:{
        showDetailOrder: (state, action) => {
          state.isShow = true;
          state.OrderId = action.payload;
        },
        hideDetailOrder: (state, action) => {
          state.isShow = false;
          state.OrderId = null;
        },
        sortOrder: (state, action) => {
          switch(action.payload) {
            case "1":
              state.data.sort((firstOrder, secondOrder) => firstOrder.order_id - secondOrder.order_id);
              break;
            case "2":
              state.data.sort((firstOrder, secondOrder) => firstOrder.total - secondOrder.total);
              break;
            case "3":
              state.data.sort((firstOrder, secondOrder) => secondOrder.total - firstOrder.total);
              break;
            case "4":
              state.data.sort((firstOrder, secondOrder) => secondOrder.order_id - firstOrder.order_id);
            default:
              // code block
          }
        } 
  },
  extraReducers: {
      [fetchOrdersData.pending](state) {
        state.loading = HTTP_STATUS.PENDING
      },
      [fetchOrdersData.fulfilled](state, {payload}) {
          state.loading = HTTP_STATUS.FULFILLED
          state.data = payload
          state.prevOrders = payload
      },
      [fetchOrdersData.rejected](state) {
        state.loading = HTTP_STATUS.REJECTED
      },

      [updateOrderData.pending](state) {
        state.loading = HTTP_STATUS.PENDING
      },
      [updateOrderData.fulfilled](state, {payload}) {
          state.loading = HTTP_STATUS.FULFILLED
      },
      [updateOrderData.rejected](state) {
        state.loading = HTTP_STATUS.REJECTED
      },
    }
})
export const selectOrders = (state) => state.orders.data;
export default ordersSlice.reducer
const {actions}= ordersSlice
export const {showDetailOrder, hideDetailOrder, sortOrder} = actions;