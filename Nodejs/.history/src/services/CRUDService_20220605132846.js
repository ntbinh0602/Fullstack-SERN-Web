import bcrypt from "bcryptjs";
let salt = bcrypt.genSaltSync(10);

let createNewUser = (data) => {
  console.log("data from service");
  console.log(data);
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
};
