import axios from "axios";
import { store } from "@/store/store";
import i18n from "./i18n";

const axioInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
axioInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Breaer ${token}`;
    }
    config.headers["lang"] = i18n.language;
    if (config.params) {
      config.params = {
        ...config.params,
        page: config.params.page || 1,
        limit: config.params.limit || 10,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axioInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axioInstance;
