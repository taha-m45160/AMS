const Quizzes = require('../Schema/Quizzes.js')
const mongoose = require('mongoose')

async function createQuiz(title, section_id, course_id, term, year, questions, open_date, duration) {

    const course = await mongoose.connection.db.collection('courses').findOne({
        ID: course_id
    })

    const section = await mongoose.connection.db.collection('sections').findOne({
        ID: section_id, 
        course: course._id, 
        term: term, 
        year: year
    })
    
    const quiz = await Quizzes.create({
        title: title,
        section: section._id,
        questions: questions,
        open_date: open_date,
        duration: duration
    })

    await quiz.save()
}

module.exports = {createQuiz}