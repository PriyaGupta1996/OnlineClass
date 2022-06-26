
const express = require("express")
const router = express.Router()

const { registerStudent, allStudents, searchStudent, updateStudent, deleteStudent } = require("../controllers/studentController")

router.post("/new", registerStudent)
router.get("/all", allStudents)
router.get("/:id", searchStudent)
router.put("/", updateStudent)
router.delete("/", deleteStudent)



module.exports = router