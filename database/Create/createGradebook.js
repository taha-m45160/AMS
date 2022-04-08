const Gradebook = require('../Schema/Gradebook.js')
const mongoose = require('mongoose')

async function createGradebook(student_id, section_id, course_id, term, year, component, grade) {
    const section = await mongoose.connection.db.collection('sections').findOne({
        ID: section_id,
        course_ID: course_id, 
        term: term, 
        year: year
    })
    const gradebook = await Gradebook.create({
        student_ID: student_id,
        section: section._id,
        component: component,
        grade: grade
    })
    await gradebook.save()
}

module.exports = {createGradebook}