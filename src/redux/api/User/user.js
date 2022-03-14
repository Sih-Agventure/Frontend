import axios from "../baseUrl";
import { getHeaders } from "../baseUrl";


export const register = (data) =>
  axios.post("/api/auth/register", data);

export const login = async () =>
  axios.get("/api/auth/login");
