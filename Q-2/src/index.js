const express = require("express")
const session = require("express-session")
const fileStore = require("session-file-store")(session)
const userRouter = require("./routes/userRouter")
const isAuthenticated = require("./middlewares/auth")

const app = express()

app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("views",__dirname+"/views")

app.use(session({
  secret: "SECRET_KEY",
  saveUninitialized: false,
  resave: false,
  store: new fileStore({path: './session-dir'})
}))

app.use("/user",userRouter)

app.get("/",isAuthenticated,(req,res) => {
  res.render("home")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
  console.log(`App is listening on port ${PORT}`)
})