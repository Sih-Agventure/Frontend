import axios from "../baseUrl";
import { getHeaders } from "../baseUrl";


export const register = (data) =>
  axios.post("/api/auth/register/", data);

export const login = async (data) =>    
  axios.post("/api/auth/login",data);

export const postEquipment = async (data) =>    
axios.post("/api/equipments/list",data);

export const listEquipment = async () =>    
axios.get("/api/equipments/list");

export const uploadOffer = async (data) =>    
axios.post("/api/offers/received",data);

export const getEquipmentOffers = async (id) =>    
axios.get(`/api/offers/received/${id}`);

export const getEquipmentData = async (id) =>    
axios.get(`/api/offers/equipment/${id}`);
