const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    overview: {
        type: String
    },
    gradeBreakup: {
        type: String
    }
})

module.exports = mongoose.model('Course', courseSchema)