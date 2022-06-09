import db from "../models/index";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let isExist = await checkUserEmail(email);
      if (isExist) {
        //user already exist
        //compare password
      } else {
        //return error
        userData.errCode = 1;
        userData.errMessage = `Your's Email isn'n exist in your system. Plz try other email`;
        resolve();
      }
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (email) => {
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
