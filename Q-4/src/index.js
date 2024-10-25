const express = require("express")
const studentRouter = require("./routes/studentRoutes")
const authRouter = require("./routes/authRoutes")
const cookieParser = require("cookie-parser")

const app = express()

app.use(cookieParser())
app.use(express.urlencoded({extended : true}))

app.set("view engine","ejs")
app.set("views",__dirname+"/views")

app.use("/user",authRouter)
app.use("/student",studentRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
  console.log(`App is listening on port ${PORT}`)
})