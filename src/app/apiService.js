import axios from "axios";
// import { BASE_URL } from "./config";

const apiService = axios.create({
  // baseURL: BASE_URL,
  baseURL: "http://localhost:5000",
  // baseURL: "http://localhost:3000",
});

apiService.interceptors.request.use(
  (request) => {
    console.log("Start Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("Response", response);
    return response;
  },
  function (error) {
    console.log("RESPONSE ERROR", error);
    return Promise.reject(error);
  }
);

export default apiService;
