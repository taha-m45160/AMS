const mongoose = require('mongoose')

const sectionSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    term: {
        type: String,
        enum: ['Fall', 'Spring'],
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 2010,
        max: new Date().getFullYear()
    }
})

module.exports = mongoose.model('Section', sectionSchema)