import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
