import axios from "axios";
import { API_URL } from "../app/constant";

class ShippingAPI {
  getShippingByOrderId = (id) => {
    const url = `${API_URL}/shippings/${id}`;
    return axios.get(url);
  };
}
const shippingAPI = new ShippingAPI();
export default shippingAPI;