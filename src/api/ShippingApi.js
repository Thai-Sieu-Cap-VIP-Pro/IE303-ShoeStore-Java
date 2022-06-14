import axios from "axios";
import { API_URL } from "../app/constant";

class ShippingAPI {
  getShippingByOrderId = (id) => {
    const url = `${API_URL}/shippings/${id}`;
    return axios.get(url);
  };

  getShippingByAccountId = (id) => {
    const url = `${API_URL}/shippings/accountId/${id}`;
    return axios.get(url);
  };

  addShipping = (param) => {
    const url = `${API_URL}/shipping`;
    return axios.post(url,param );
  };
}
const shippingAPI = new ShippingAPI();
export default shippingAPI;