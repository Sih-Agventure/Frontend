import axios from "axios";
// import dotenv from "dotenv";
// import Cookies from "js-cookie";
// import { useSelector } from "react-redux";

// dotenv.config();
const base = "http:///127.0.0.1:5000/";

const baseAxios = axios.create({
  baseURL: base,
});

export const getHeaders = () => {
  return {
    headers: {
      Authorization: window.sessionStorage.getItem("access")
        ? `Bearer ${window.sessionStorage.getItem("access")}`
        : null,
      "Content-Type": "application/json",
    },
  };
};

export default baseAxios;
