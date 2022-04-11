const Gradebook = require('../Schema/Gradebook.js')
const mongoose = require('mongoose')

async function createGradebook(student_id, section_id, course_id, term, year, component, grade) {
    const section = await mongoose.connection.db.collection('sections').findOne({
        ID: section_id,
        course_ID: course_id, 
        term: term, 
        year: year
    })
    
    const validate = await mongoose.connection.db.collection('takes').findOne({
        student_ID: student_id,
        section: section._id
    })
    if(!validate)
        throw new Error('Invalid student ID. Student must be enrolled in section.')
        
    const gradebook = await Gradebook.create({
        student_ID: student_id,
        section: section._id,
        component: component,
        grade: grade
    })
    await gradebook.save()
}

module.exports = {createGradebook}