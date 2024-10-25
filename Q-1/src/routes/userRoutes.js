const router = require("express").Router()
const upload = require("../middlewares/fileUpload")
const { getAllUsers, createUser, downloadFile } = require("../controllers/userController")

router.get("/",getAllUsers)

router.get("/create",(req,res) => {
  res.render("register")
})

router.post("/create",upload.array("files",5),createUser)
router.get("/download/:filename",downloadFile)

module.exports = router