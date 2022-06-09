import bcrypt from "bcryptjs";
let salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  let hashPasswordFromBcrypt = await hashUserPassword(data.password);
  console.log(hashPasswordFromBcrypt);
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync("B4c0//", salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
};
