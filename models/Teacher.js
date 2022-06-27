const mongoose = require('mongoose')
const { Schema } = mongoose;
const autoIncrement = require('mongoose-auto-increment');

const TeacherSchema = new Schema({
    _id: { type: String, required: true },
    name: String,
    email: String,
    Subject: { type: String, ref: "Subject" }

},
    {
        timestamps: true
    });


autoIncrement.initialize(mongoose.connection)

TeacherSchema.plugin(autoIncrement.plugin, {
    model: 'Teacher',
    startAt: 100001,
    field: '_id'
});
const Teacher = mongoose.model("Teacher", TeacherSchema)
module.exports = Teacher