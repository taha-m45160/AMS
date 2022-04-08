const Assignment_response = require('../Schema/Assignment_response.js')
const mongoose = require('mongoose')

async function createAssignmentResponse(student_id, title, section_id, course_id, term, year, attachment) {
    const section = await mongoose.connection.db.collection('sections').findOne({
        ID: section_id,
        course_ID: course_id, 
        term: term, 
        year: year
    })
    const assignment = await mongoose.connection.db.collection('assignments').findOne({
        title: title,
        section: section._id
    })

    const assignment_response = await Assignment_response.create({
        student_ID: students_id,
        assignment: assignment._id,
        date_submitted: new Date(),
        attachment: attachment
    })
    await assignment_response.save()
}

module.exports = {createAssignmentResponse}