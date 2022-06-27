const express = require("express")
const router = express.Router()

const { registerTeacher, updateTeacher, deleteTeacher, allTeachers, searchTeacher } = require("../controllers/teacherController")

router.post("/new", registerTeacher)
router.get("/all", allTeachers)
router.get("/:id", searchTeacher)
router.put("/", updateTeacher)
router.delete("/", deleteTeacher)



module.exports = router