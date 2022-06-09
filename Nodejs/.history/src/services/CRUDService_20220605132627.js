import bcript from "bcryptjs";

let createNewUser = (data) => {
  console.log("data from service");
  console.log(data);
};

let hashUserPassword = (password) => {
  return new Promise((resolve, reject) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("B4c0//", salt);
  });
};

module.exports = {
  createNewUser: createNewUser,
};
