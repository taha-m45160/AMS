const mongoose = require('mongoose')

const assignmentResponseSchema = new mongoose.Schema({
    student_ID: {
        type: Number,
        required: true
    },
    assignment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment',
        required: true
    },
    date_submitted: {
        type: Date,
        required: true
    },
    attachment: {
        type: Buffer,
        required: true
    }
})

module.exports = mongoose.model('Assignment_response', assignmentResponseSchema)