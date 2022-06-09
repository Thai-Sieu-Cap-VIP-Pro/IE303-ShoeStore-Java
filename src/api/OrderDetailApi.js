import axios from "axios";
import { API_URL } from "../app/constant";

class OrderDetailAPI {
  getOrderDetailsByOrderId = (orderId) => {
    const url = `${API_URL}/orderDetails/order/${orderId}`;
    return axios.get(url);
  };
}

const orderDetailAPI = new OrderDetailAPI();
export default orderDetailAPI;
