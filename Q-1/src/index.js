const express = require("express")
const userRouter = require("./routes/userRoutes")
const path = require("path")

const app = express()

app.use(express.urlencoded({extended:true}))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.set("view engine","ejs")
app.set("views",__dirname+"/views")
app.use("/user",userRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
  console.log(`App is listening on port ${PORT}`)
})