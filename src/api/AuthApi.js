import axios from "axios";
import { API_URL } from "../app/constant";
import axiosClient from "./AxiosClient";

class AuthAPI {

  getInfoUser = (id) => {
    const url = `${API_URL}/account/${id}`
    return axios.get(url);
  }
  getAccount = (params) => {
    const url = "api/auth/login";
    return axiosClient.post(url, params);
  };

  logout = (params) => {
    localStorage.removeItem("authTokens");
    const url = "api/auth/lout";
    return axios.get(url, params);
  };
}

const authAPI = new AuthAPI();
export default authAPI;
