const userModel = require("../models/user")
const fs = require("fs")
const path = require("path")

const getAllUsers = async (req,res) => {
  try{
    const users = await userModel.find()
    res.render("userLists",{users:users})
  }
  catch(error){
    console.log(error)
  }
}

const createUser = async (req,res) => {
  const {name,email,password,age} = req.body

  try{
    const files = req.files ? req.files.map((file) => file.filename) : []

    const newUser = new userModel({
      name : name,
      email : email,
      password : password,
      age : age,
      files
    })

    await newUser.save()
    res.redirect("/user")
  }
  catch(error){
    console.log(error)
    res.render("register",{messgae : "Error registering a user"})
  }
}

const downloadFile = async (req,res) => {
  const {filename} = req.params
  const filePath = path.join(__dirname,"../uploads",filename)
  if(fs.existsSync(filePath)){
    res.download(filePath)
  }
  else{
    res.status(404).send("File not found")
  }
}

module.exports = {
  getAllUsers,
  createUser,
  downloadFile
}