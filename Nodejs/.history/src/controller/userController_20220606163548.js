import userService from "../services/userService"
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter!",
    });
  }

  let userData = 

  return res.status(200).json({
    errCode: 0,
    message: "hello world",
    yourEmail: email,
  });
};

module.exports = {
  handleLogin: handleLogin,
};
