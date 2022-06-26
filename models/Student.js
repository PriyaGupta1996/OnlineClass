const mongoose = require('mongoose')
const { Schema } = mongoose;
const autoIncrement = require('mongoose-auto-increment');


const StudentSchema = new Schema({
    name: String,
    _id: { type: String, required: true },
    email: String,
    course: [{ type: String, ref: "Subject" }],
    motherName: String,
    fatherName: String,
    dateOfBirth: Date
},
    {
        timestamps: true
    });

autoIncrement.initialize(mongoose.connection)

StudentSchema.plugin(autoIncrement.plugin, {
    model: 'Student',
    startAt: 1001,
    field: '_id'
});

const Student = mongoose.model("Student", StudentSchema)
module.exports = Student