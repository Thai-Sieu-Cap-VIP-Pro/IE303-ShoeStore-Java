import axios from "axios";
import { API_URL } from "../app/constant";

class cartDetailAPI {
  getAllCartDetails = () => {
    const url = `${API_URL}/cartDetails`;
    return axios.get(url);
  };
  getCartDetailsByAccountId = (id) => {
    const url = `${API_URL}/cartDetails/accountId/${id}`;
    return axios.get(url);
  };
  addCartDetail = (cartDetail) => {
    const url = `${API_URL}/cartDetail`;
    return axios.post(url, cartDetail)
  }
  updateCartDetail = (cartDetail) => {
    const url = `${API_URL}/cartDetail/${cartDetail.cartDetailId}`;
    return axios.put(url, cartDetail)
  }
  deleteCartDetail = (id) => {
    const url = `${API_URL}/cartDetail/${id}`;
    return axios.delete(url);
  };
}

const CartDetailAPI = new cartDetailAPI();
export default CartDetailAPI;
