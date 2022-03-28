const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
        unique: true,
        index: 1 
    },
    title: {
        type: String,
        required: true
    }
})

courseSchema.index({ID: 1}, {unique: true})

module.exports = mongoose.model('Course', courseSchema)