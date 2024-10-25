const { getAllStudent, createStudent, editStudent, getStudentById, deleteStudent } = require("../controllers/studentController")
const router = require("express").Router()

router.get("/",getAllStudent)
router.post("/create",createStudent)
router.get("/edit/:id",getStudentById)
router.post("/edit/:id",editStudent)
router.get("/delete/:id",deleteStudent)

module.exports = router