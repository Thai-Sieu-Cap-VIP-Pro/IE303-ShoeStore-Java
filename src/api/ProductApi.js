import axios from "axios";
import { API_URL } from "../app/constant";

class ProductAPI {
  getProductById = (id) => {
    const url = `${API_URL}/products/${id}`;
    return axios.get(url);
  };
}
const productAPI = new ProductAPI();
export default productAPI;