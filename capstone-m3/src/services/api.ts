import axios from "axios";

export const Api = axios.create({
  baseURL: "https://projeto-final.onrender.com",
  timeout: 6000,
});
