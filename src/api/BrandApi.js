import axios from "axios";
import axiosClient from "./AxiosClient";

class brandAPI {
  getAllBrands = () => {
    const url = "http://localhost:8080/category";
    return axios.get(url);
  };
  deleteBrand = (params) => {
    const url = "http://localhost:8080/category/" + params;
    return axios.delete(url);
  };
}

const BrandAPI = new brandAPI();
export default BrandAPI;
