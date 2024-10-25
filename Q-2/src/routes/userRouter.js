const { register, login, logout } = require("../controllers/userController")
const isAuthenticated = require("../middlewares/auth")
const router = require("express").Router()

router.get("/register",(req,res) => {
  res.render("register")
})

router.post("/register",register)

router.get("/login",(req,res) => {
  res.render("login")
})

router.post("/login",login)

router.get("/logout",isAuthenticated,logout)

module.exports = router