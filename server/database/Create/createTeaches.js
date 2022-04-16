const Teaches = require('../Schema/Teaches.js')
const mongoose = require('mongoose')

async function createTeaches(teacher_id, section_id, course_id, term, year) {

    const course = await mongoose.connection.db.collection('courses').findOne({
        ID: course_id
    })

    const section = await mongoose.connection.db.collection('sections').findOne({
        ID: section_id, 
        course: course._id, 
        term: term, 
        year: year
    })
    
    const teaches = await Teaches.create({
        teacher_ID: teacher_id,
        section: section._id,
    })
    await teaches.save()
}

module.exports = {createTeaches}