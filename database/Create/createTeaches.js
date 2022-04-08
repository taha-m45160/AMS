const Teaches = require('../Schema/Teaches.js')
const mongoose = require('mongoose')

async function createTeaches(teacher_id, section_id, course_id, term, year) {
    const section = await mongoose.connection.db.collection('sections').findOne({
        ID: section_id, 
        course_ID: course_id, 
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