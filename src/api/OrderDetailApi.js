import axios from "axios";
import { API_URL } from "../app/constant";

class OrderDetailAPI {
  getAllOrderDetails = () => {
    const url = `${API_URL}/orderDetails`;
    return axios.get(url);
  }
  getOrderDetailsByOrderId = (orderId) => {
    const url = `${API_URL}/orderDetails/order/${orderId}`;
    return axios.get(url);
  };
  addOrderDetail = (orderDetail) => {
    const url = `${API_URL}/orderDetail`;
    console.log(orderDetail)
    return axios.post(url, orderDetail)
  }

  
}

const orderDetailAPI = new OrderDetailAPI();
export default orderDetailAPI;
