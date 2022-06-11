import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const createNewUserService = (data) => {
  console.log("check data from service:", data);
  return axios.post("api/crate-new-user", data);
};

export { handleLoginApi, getAllUsers, createNewUserService };