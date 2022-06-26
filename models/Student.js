import mongoose from 'mongoose';
const { Schema } = mongoose;

const StudentSchema = new Schema({
    name: String,
    age: String,
    bloodGroup: String,
    course: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
    motherName: String,
    fatherName: String,
    dateOfBirth: Date
},
    {
        timestamps: true
    });

const Student = mongoose.model("Student", StudentSchema)
module.exports = Student