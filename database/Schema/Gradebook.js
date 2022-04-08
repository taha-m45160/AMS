const mongoose = require('mongoose')

const gradebookSchema = new mongoose.Schema({
    student_ID: {
        type: String,
        required: true,
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
        required: true
    },
    component: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true,
        enum: ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F']
    }
})

module.exports = mongoose.model('Gradebook', gradebookSchema)