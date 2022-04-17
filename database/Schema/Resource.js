const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    attachment: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Resource', resourceSchema)