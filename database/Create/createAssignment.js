const Assignment = require('../Schema/Assignment.js')
const mongoose = require('mongoose')

async function createAssignment(title, section_id, course_id, term, year, deadline, attachment=false, description=false) {
    const section = await mongoose.connection.db.collection('sections').findOne({
        ID: section_id,
        course_ID: course_id, 
        term: term, 
        year: year
    })
    const assignment = await Assignment.create({
        title: title,
        section: section._id,
        deadline: deadline
    })
    if(attachment)
        assignment['attachment'] = attachment
    if(description)
        assignment['description'] = description
        
    await assignment.save()
}

module.exports = {createAssignment}