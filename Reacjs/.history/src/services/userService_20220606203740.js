import axios from "../axios";

export const handleLogin = () => {
  return axios.post("/api/login");
};
