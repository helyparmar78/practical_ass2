const router = require("express").Router()
const { getStudents, editStudent, getStudentToEdit, deleteStudent, createStudent } = require("../controllers/studentController")
const isAuthenticated = require("../middlewares/auth")

router.get("/",isAuthenticated,getStudents)

router.get("/create",isAuthenticated,(req,res) => {
  res.render("createStudent")
})

router.post("/create",isAuthenticated,createStudent)

router.get("/edit/:id",isAuthenticated,getStudentToEdit)

router.post("/edit/:id",isAuthenticated,editStudent)

router.get("/delete/:id",isAuthenticated,deleteStudent)

module.exports = router