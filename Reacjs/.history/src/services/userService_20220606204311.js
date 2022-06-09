import axios from "../axios";

export default handleLogin = (email, password) => {
  return axios.post("/api/login");
};
