import db from "../models/index"

let getHomePage = async (req, res) => {
  let data = await
  return res.render("homepage.ejs");
};

let getaboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  getaboutPage: getaboutPage,
};
