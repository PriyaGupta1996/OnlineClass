const asyncHandler = require("express-async-handler");
const Teacher = require("../models/Teacher")


const registerTeacher = asyncHandler(async (req, res) => {
    const { name, email, subject } = req.body

    if (!name || !email || !subject) {
        res.status(400)
        throw new Error("Name, Email-Id & Subject are required")
    }

    const TeacherExists = await Teacher.findOne({ email })
    if (TeacherExists) {
        res.status(400)
        throw new Error("Email already exists")
    }

    const TeacherNew = await Teacher.create(
        {
            name: name,
            email: email,
            subject: subject
        }
    )

    if (!TeacherNew) {
        res.status(500)
        throw new Error("Internal Server Error")
    }

    res.status(200).json({
        _id: TeacherNew._id,
        name: TeacherNew.name,
        email: TeacherNew.email,
        subject: TeacherNew.subject

    })

})

const allTeachers = asyncHandler(async (req, res) => {
    await Teacher.find({}).then((teachers) => {
        const data = teachers.map((teacher) => ({ "id": teacher._id, "name": teacher.name, "subject": teacher.Subject }))
        res.send(data)
    })
})


const searchTeacher = asyncHandler(async (req, res) => {
    let _id = req.params.id
    await Teacher.find({ _id }).then((teacher) => {
        res.status(200)
        res.send(teacher)
    }).catch((error) => {
        res.status(404)
        throw new Error("Not Found")
    })

})

const updateTeacher = asyncHandler(async (req, res) => {
    const query = { _id: req.body._id };
    const newValues = { $set: { ...req.body } };
    await Teacher.updateOne(query, newValues).then((teacher) => {
        res.status(200)
        res.send(teacher)
    })
})

const deleteTeacher = asyncHandler(async (req, res) => {
    const _id = req.body.id
    await Teacher.deleteOne({ _id }).then((teacher) => {
        res.status(200)
        res.send(teacher)
    })
})

module.exports = { registerTeacher, updateTeacher, deleteTeacher, allTeachers, searchTeacher }