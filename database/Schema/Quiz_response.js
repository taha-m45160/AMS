const mongoose = require('mongoose')

const quizResponseSchema = new mongoose.Schema({
    student_ID: {
        type: String,
        required: true,
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quizzes',
        required: true
    },
    answers: {
        type: [{
            qs_number: {
                type: Number,
                required: true
            },
            answer: {
                type: String,
                required: true
            }
        }],
        required: true
    },
    submission_date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Quiz_response', quizResponseSchema)