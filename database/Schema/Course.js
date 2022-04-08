const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Course', courseSchema)