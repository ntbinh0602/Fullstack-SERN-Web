import userService from "../services/userService";
let userData = await userService.handleUserLogin(email, password);
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      errCode: userData.errCode,
      message: userData.errMessage,
      userData,
    });
  }

  return res.status(200).json({
    userData,
  });
};

module.exports = {
  handleLogin: handleLogin,
};
