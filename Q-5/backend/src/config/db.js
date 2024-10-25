const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log("Datbase is connected")
}).catch((error) => {
  console.log(error)
})

module.exports = mongoose