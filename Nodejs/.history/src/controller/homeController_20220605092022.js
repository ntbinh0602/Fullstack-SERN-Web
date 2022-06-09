import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (e) {
    console.log(e);
  }
};

let getaboutPage = (req, res) => {
  return res.render("about.ejs");
};

let getCRUD = (req, res) => {
  return res.send("get CRUD with Eric");
};

module.exports = {
  getHomePage: getHomePage,
  getaboutPage: getaboutPage,
};
