import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.DEV ? "http://localhost:3001" : "https://e-commerce-backend-a93m.onrender.com",
  validateStatus() {
    return true;
  },
});
