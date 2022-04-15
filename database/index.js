const mongoose = require('mongoose')

async function createIndexes(){
    const db = await mongoose.connection.db
    await db.collection('users').createIndex({ID:1}, {unique: true})
    await db.collection('courses').createIndex({ID:1}, {unique: true})
    await db.collection('sections').createIndex({ID: 1, course: 1, term: 1, year: 1}, {unique: true})
    await db.collection('takes').createIndex({student_ID: 1, section: 1}, {unique: true})
    await db.collection('teaches').createIndex({teacher_ID: 1, section: 1}, {unique: true})
    await db.collection('resources').createIndex({ID: 1, section: 1}, {unique: true})
    await db.collection('assignments').createIndex({title: 1, section: 1}, {unique: true})
    await db.collection('assignment_responses').createIndex({student_ID: 1, assignment: 1}, {unique: true})
    await db.collection('quizzes').createIndex({title: 1, section: 1}, {unique: true})
    await db.collection('quiz_responses').createIndex({student_ID: 1, quiz: 1}, {unique: true})
    await db.collection('gradebooks').createIndex({student_ID: 1, section: 1, component: 1}, {unique: true})
}

module.exports = {createIndexes}