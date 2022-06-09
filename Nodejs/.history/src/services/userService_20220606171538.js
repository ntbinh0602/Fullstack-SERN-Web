import db from "../models/index";
import bcrypt from "bcryptjs";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        //user already exist
        //compare password
        // bcrypt.compareSync("not_bacon", hash);
        let user = await db.User.findOne({ where: { email: email } });
        resolve();
      } else {
        //return error
        userData.errCode = 1;
        userData.errMessage = `Your's Email isn'n exist in your system. Plz try other email`;
        resolve(userData);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let compareUserPassword = () => {
  return new Promise(async (resolve, reject) => {
    try {
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { email: userEmail } });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
};
