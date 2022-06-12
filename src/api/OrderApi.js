import axios from "axios";
import { API_URL } from "../app/constant";

class OrderAPI {
  getAllOrders = () => {
    const url = `${API_URL}/orders`;
    return axios.get(url);
  };
  updateOrder = (order) => {
    const url = `${API_URL}/orders/updateStatus/${order.order_id}`;
    return axios.put(url, order)
  }
}

const orderAPI = new OrderAPI();
export default orderAPI;
