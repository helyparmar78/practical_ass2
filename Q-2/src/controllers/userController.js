const userModel = require("../models/user")

const register = async (req,res) => {
  const {username,email,password} = req.body

  try{
    const existingUser = await userModel.findOne({email:email})
    if(existingUser){
      return res.render("register",{message : "User already exists"})
    }

    const newUser = await userModel.create({
      username : username,
      email : email,
      password : password
    })

    if(newUser){
      return res.redirect("/user/login")
    }
    
  }
  catch(error){
    console.log(error)
    res.render("register",{message : "Error in user registration"})
  }
}

const login = async (req,res) => {
  const {email,password} = req.body
  try{
    const existingUser = await userModel.findOne({email:email})
    if(!existingUser){
      return res.render("login",{message : "User not found"})
    }

    if(existingUser.password == password){
      req.session.loggedin = true
      req.session.email = existingUser.email
      return res.redirect("/")
    } 
    else{
      return res.render("login",{message : "Invalid Credentials"})
    }
  }
  catch(error){
    console.log(error)
    return res.render("login",{message : "Something went wrong"})
  }
}

const logout = async (req,res) => {
  if(req.session.loggedin){
    req.session.destroy((err) => {
      if(err){
        return next(err)
      }
      else{
        res.clearCookie("connect.sid")
        res.redirect("/user/login")
      }
    })
  }
}

module.exports = {register,login,logout}