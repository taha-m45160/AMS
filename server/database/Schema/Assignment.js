const mongoose = require('mongoose')

const assignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
        required: true
    },
    date_created: {
        type: Date,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    attachment: {
        type: Buffer
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('Assignment', assignmentSchema)