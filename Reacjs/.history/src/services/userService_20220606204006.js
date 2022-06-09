import axios from "../axios";

const handleLogin = () => {
  return axios.post("/api/login");
};

module.exports = {
  handleLogin: handleLogin,
};
