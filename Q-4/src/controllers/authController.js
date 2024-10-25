const userModel = require("../models/user");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.render("register", { error: "User already exists" });
    }

    const user = new userModel({
      name: name,
      email: email,
      password: password,
    });

    await user.save();
    res.redirect("/user/login");
  } catch (error) {
    console.log(error);
    res.render("register", { error: "Error regsitering user" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({
      email: email,
      password: password,
    });
    if (!existingUser) {
      return res.render("login", { error: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 });
    res.redirect("/student");
  } catch (error) {
    console.log(error);
    res.render("login", { message: "Error in login" });
  }
};

const logout = async (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/user/login");
};

module.exports = { register, login, logout };
