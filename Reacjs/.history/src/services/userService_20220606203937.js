import axios from "../axios";

export default const handleLogin = () => {
  return axios.post("/api/login");
};
