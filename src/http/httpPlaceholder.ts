import axios from "axios";

const apiUrl = "https://online-weather-backend.herokuapp.com";

export const apiGet = axios.create({baseURL: apiUrl});
export const apiPost = axios.create({baseURL: apiUrl});
export const apiDelete = axios.create({baseURL: apiUrl});
export const apiPut = axios.create({baseURL: apiUrl});

apiGet.interceptors.request.use((config) => {
  config.method = "get";
  const token = localStorage.getItem("token");
  if (token)
    config.headers = {
      Authorization: "Bearer " + token,
    };
  return config;
});

apiPost.interceptors.request.use((config) => {
  config.method = "post";
  const token = localStorage.getItem("token");
  if (token)
    config.headers = {
      Authorization: "Bearer " + token,
    };
  return config;
});

apiDelete.interceptors.request.use((config) => {
  config.method = "delete";
  const token = localStorage.getItem("token");
  if (token)
    config.headers = {
      Authorization: "Bearer " + token,
    };
  return config;
});

apiPut.interceptors.request.use((config) => {
  config.method = "put";
  const token = localStorage.getItem("token");
  if (token)
    config.headers = {
      Authorization: "Bearer " + token,
    };
  return config;
});
