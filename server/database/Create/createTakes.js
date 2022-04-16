const Takes = require('../Schema/Takes.js')
const mongoose = require('mongoose')

async function createTakes(student_id, section_id, course_id, term, year) {

    const course = await mongoose.connection.db.collection('courses').findOne({
        ID: course_id
    })
    
    const section = await mongoose.connection.db.collection('sections').findOne({
        ID: section_id, 
        course: course._id, 
        term: term, 
        year: year
    })

    const takes = await Takes.create({
        student_ID: student_id,
        section: section._id,
    })
    await takes.save()
}

module.exports = {createTakes}