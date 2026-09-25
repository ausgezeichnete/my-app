import axios from "axios";
import i18n from "./i18n";

const axioInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
axioInstance.interceptors.request.use(
    config => {
        const token = Store
    }
)