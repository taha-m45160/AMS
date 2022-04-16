const Quiz_response = require('../Schema/Quiz_response.js')
const mongoose = require('mongoose')

async function createQuizResponse(student_id, title, section_id, course_id, term, year, answers) {
    
    const course = await mongoose.connection.db.collection('courses').findOne({
        ID: course_id
    })

    const section = await mongoose.connection.db.collection('sections').findOne({
        ID: section_id, 
        course: course._id, 
        term: term, 
        year: year
    })

    const validate = await mongoose.connection.db.collection('takes').findOne({
        student_ID: student_id,
        section: section._id
    })
    if(!validate)
        throw new Error('Invalid student ID. Student must be enrolled in section.')
        
    const quiz = await mongoose.connection.db.collection('quizzes').findOne({
        title: title,
        section: section._id
    })

    const quiz_response = await Quiz_response.create({
        student_ID: student_id,
        Quiz: quiz._id,
        answers: answers,
        date_submitted: new Date()
    })
    await quiz_response.save()
}

module.exports = {createQuizResponse}