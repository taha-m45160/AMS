const mongoose = require('mongoose')

const quizzesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
        required: true
    },
    questions: {
        type: [{
            qs_number: {
                type: Number,
                required: true,
                unique: true
            },
            qs_type: {
                type: String,
                enum: ['MCQ', 'Short'],
                required: true
            },
            text: {
                type: String,
                required: true
            },
            correct_answer: {
                type: String
            }
        }],
        required: true
    },
    open_date: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Quizzes', quizzesSchema)