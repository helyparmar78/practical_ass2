const express = require("express")
const studentRouter = require("./routes/studentRoutes")
const cors = require("cors")
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());
app.use("/student",studentRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
  console.log(`App is listening on port ${PORT}`)
})