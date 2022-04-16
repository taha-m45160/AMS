const Assignment_response = require('../Schema/Assignment_response.js')
const mongoose = require('mongoose')

async function createAssignmentResponse(student_id, title, section_id, course_id, term, year, attachment) {
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

    const assignment = await mongoose.connection.db.collection('assignments').findOne({
        title: title,
        section: section._id
    })

    const assignment_response = await Assignment_response.create({
        student_ID: student_id,
        assignment: assignment._id,
        date_submitted: new Date(),
        attachment: attachment
    })
    await assignment_response.save()
}

module.exports = {createAssignmentResponse}