const mongoose = require("../config/db")

const studentschema = mongoose.Schema({
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
  contact : {
    type : String,
    required : true
  }
})

const student = mongoose.model("student",studentschema,"students")

module.exports = student