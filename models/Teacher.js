import mongoose from 'mongoose';
const { Schema } = mongoose;

const TeacherSchema = new Schema({
    name: String,
    age: String,
    bloodGroup: String,
    dateOfBirth: Date,
    Subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" }

},
    {
        timestamps: true
    });

const Teacher = mongoose.model("Teacher", TeacherSchema)
module.exports = Teacher