import mongoose from 'mongoose';
const { Schema } = mongoose;

const SubjectSchema = new Schema({
    name: String,
    teachers: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Teacher"
    }],
    days: [{ type: String }]
},
    {
        timestamps: true
    });

const Subject = mongoose.model("Subject", SubjectSchema)
module.exports = Subject