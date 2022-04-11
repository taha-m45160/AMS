const Takes = require('../Schema/Takes.js')
const mongoose = require('mongoose')

async function createTakes(student_id, section_id, course_id, term, year) {
    const section = await mongoose.connection.db.collection('sections').findOne({
        ID: section_id, 
        course_ID: course_id, 
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