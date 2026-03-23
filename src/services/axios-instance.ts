import axios from "axios";
import { getCookie } from "./cookie";

const apiKey = import.meta.env.VITE_FNP_API_KEY;
const baseURL = import.meta.env.VITE_BASE_URL;

export const apiInstance = axios.create({
  baseURL: baseURL,
});

export const instaceWithoutAuth = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  },
});

export const request = async (axiosConfig: any) => {
  try {
    const res = await apiInstance(axiosConfig);
    return res;
  } catch (err: any) {
    if (!globalThis.navigator.onLine) {
      return;
    }
    if (err?.response?.status === 401) {
      return;
    }
    return err;
  }
};

apiInstance.interceptors.request.use((config) => {
  const token = getCookie("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
