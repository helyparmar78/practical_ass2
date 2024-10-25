const mongoose = require("../config/db")

const userSchema = mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  age : {
    type : Number,
    required : true
  },
  files : [String]
})

const User = mongoose.model("User",userSchema,"userTB")

module.exports = User