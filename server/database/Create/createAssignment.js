const Assignment = require('../Schema/Assignment.js')
const mongoose = require('mongoose')

async function createAssignment(title, section_id, course_id, term, year, deadline, attachment=false, description=false) {
    const course = await mongoose.connection.db.collection('courses').findOne({
        ID: course_id
    })

    const section = await mongoose.connection.db.collection('sections').findOne({
        ID: section_id, 
        course: course._id, 
        term: term, 
        year: year
    })
    const assignment = await Assignment.create({
        title: title,
        section: section._id,
        date_created: new Date(),
        deadline: deadline
    })
    if(attachment)
        assignment['attachment'] = attachment
    if(description)
        assignment['description'] = description
        
    await assignment.save()
}

module.exports = {createAssignment}