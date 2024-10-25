const mongoose = require("../config/db")

const studentSchema = mongoose.Schema({
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

const Student = mongoose.model("Student",studentSchema)

module.exports = Student