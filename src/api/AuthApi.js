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
  login = (data) => {
    console.log(data)
    const url = `${API_URL}/account/login`
    console.log(axios.post(url, data))
    return axios.post(url, data)
  }
  register = (newAccount) => {
    console.log(newAccount)
    const url = `${API_URL}/account`
    return axios.post(url, newAccount);
  }
  logout = () => {
    localStorage.removeItem("user");
  };
}

const authAPI = new AuthAPI();
export default authAPI;
