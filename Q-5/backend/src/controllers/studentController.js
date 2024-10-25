const studentModel = require("../models/student")

const getAllStudent = async(req,res) => {
  try{
    const students = await studentModel.find()
    res.status(200).send(students)
  }catch(error){
    return res.status(400).send(error)
  }
}

const createStudent = async(req,res) => {
  const {name,email,password,contact} = req.body
  try{
    const newstudent = new studentModel({
      name : name,
      email : email,
      password : password,
      contact : contact
    })

    await newstudent.save()
    return res.status(200).send(newstudent)
  }
  catch(error){
    return res.status(400).send(error)
  }
}

const getStudentById = async(req,res) => {
  const {id} = req.params
  try {
    const student = await studentModel.findById(id)
    return res.status(200).send(student)
  } catch (error) {
    return res.status(400).send(error)
  }
}

const editStudent = async(req,res) => {
  const {id} = req.params
  const {name,email,password,contact} = req.body
  try {
    const updatedStudent = await studentModel.findByIdAndUpdate(id,{
      name:name,
      email:email,
      password:password,
      contact:contact,
    },{new:true})

    return res.status(200).send(updatedStudent)
  } catch (error) {
    return res.status(400).send(error)
  }
}

const deleteStudent = async(req,res) => {
  const {id} = req.params
  try {
    const student = await studentModel.findByIdAndDelete(id)
    return res.status(200).send(student)
  } catch (error) {
    return res.status(400).send(error)
  }
}

module.exports = {
  getAllStudent,
  getStudentById,
  createStudent,
  editStudent,
  deleteStudent
}