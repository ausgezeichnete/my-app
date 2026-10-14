import axios from "axios";
import i18n from "./i18n";

//axios instance is created to make API requests with a base URL and interceptors for request and response handling. The base URL is determined based on the environment (development or production). The request interceptor adds an authorization token and language header to the request, while the response interceptor handles the response and errors.
//create an instance of axios with the base URL and interceptors for request and response

const axioInstance = axios.create({
  //1.create an instance of axios with the base URL
  baseURL: import.meta.env.DEV
    ? "/apiAdmin"
    : import.meta.env.VITE_API_BASE_URL,
});
//interceptors are functions that are called before a request is sent or after a response is received. They can be used to modify the request or response, or to handle errors.
axioInstance.interceptors.request.use(
  //2.add an interceptor to the axios instance to add the authorization token and language header to the request
  (config) => {
    //config is the request configuration object that contains the request details
    // const token = store.getState().auth.token;
    const token = import.meta.env.VITE_API_TOKEN;
    if (token) {
      config.headers = config.headers || {}; // ensure headers object exists
      config.headers["Authorization"] = `Bearer ${token}`; // add the authorization token to the request headers
      config.headers["lang"] = i18n.language; // add the language header to the request headers
    }
    if (config.params) {
      config.params = {
        ...config.params, // spread existing params
        page: config.params.page || 1, // set default page to 1 if not provided
        limit: config.params.limit || 10, // set default limit to 10 if not provided
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axioInstance.interceptors.response.use(
  // 3.add an interceptor to the axios instance to handle the response and errors
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axioInstance;
