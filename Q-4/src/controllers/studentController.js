const studentModel = require("../models/student");

const getStudents = async (req, res) => {
  try {
    const students = await studentModel.find();
    res.render("students", { students: students });
  } catch (error) {
    console.log(error);
  }
};

const createStudent = async (req, res) => {
  const { name, email, password, contact } = req.body;
  try {
    const existingStu = await studentModel.findOne({ email: email });
    if (existingStu) {
      return res.render("createStudent", { error: "Student already exist" });
    }

    const student = new studentModel({
      name: name,
      email: email,
      password: password,
      contact: contact,
    });

    await student.save();
    return res.redirect("/student");
  } catch (error) {
    console.log(error);
    res.render("createForm", { error: "Error registering student" });
  }
};

const getStudentToEdit = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await studentModel.findById(id);
    res.render("editStudent", { student: student });
  } catch (error) {
    console.log(error);
  }
};

const editStudent = async (req, res) => {
  const { name, email, password, contact } = req.body;
  try {
    const { id } = req.params;

    const updatedStudent = await studentModel.findByIdAndUpdate(
      id,
      {
        name: name,
        email: email,
        password: password,
        contact: contact,
      },
      { new: true }
    );

    console.log(updatedStudent);
    res.redirect("/student");
  } catch (error) {
    console.log(error);
    res.render("editStudent", { error: "Error updating student" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await studentModel.findByIdAndDelete(id);
    res.redirect("/student");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getStudents,
  createStudent,
  getStudentToEdit,
  editStudent,
  deleteStudent,
};
