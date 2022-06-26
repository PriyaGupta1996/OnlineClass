const asyncHandler = require("express-async-handler");
const Student = require("../models/Student")


const registerStudent = asyncHandler(async (req, res) => {
    const { name, email, course, motherName, fatherName, dateOfBirth } = req.body

    if (!name || !email || !course) {
        res.status(400)
        throw new Error("Name, Email-Id & Course are required")
    }

    const StudentExists = await Student.findOne({ email })
    if (StudentExists) {
        res.status(400)
        throw new Error("Email already exists")
    }

    const StudentNew = await Student.create(
        {
            name: name,
            email: email,
            course: course,
            motherName: motherName,
            fatherName: fatherName,
            dateOfBirth: dateOfBirth
        }
    )

    if (!Student) {
        res.status(500)
        throw new Error("Internal Server Error")
    }

    res.status(200).json({
        _id: StudentNew._id,
        name: StudentNew.name,
        email: StudentNew.email,
        course: StudentNew.course,
        motherName: StudentNew.motherName,
        fatherName: StudentNew.fatherName,
        dateOfBirth: StudentNew.dateOfBirth
    })

})

const allStudents = asyncHandler(async (req, res) => {
    await Student.find({}).then((students) => {
        const data = students.map((student) => ({ "id": student._id, "name": student.name }))
        res.send(data)
    })
})


const searchStudent = asyncHandler(async (req, res) => {
    let _id = req.params.id
    await Student.find({ _id }).then((student) => {
        res.status(200)
        res.send(student)
    }).catch((error) => {
        res.status(404)
        throw new Error("Not Found")
    })

})

const updateStudent = asyncHandler(async (req, res) => {
    const query = { _id: req.body._id };
    const newValues = { $set: { ...req.body } };
    await Student.updateOne(query, newValues).then((student) => {
        res.status(200)
        res.send(student)
    })
})

const deleteStudent = asyncHandler(async (req, res) => {
    const _id = req.body.id
    await Student.deleteOne({ _id }).then((student) => {
        res.status(200)
        res.send(student)
    })
})

module.exports = { registerStudent, updateStudent, deleteStudent, allStudents, searchStudent }