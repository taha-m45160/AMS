const Section = require('../Schema/Section.js')
const mongoose = require('mongoose')

async function createSection(ID, c_id, term, year) {

    const course = await mongoose.connection.db.collection('courses').findOne({
        ID: c_id
    })

    const section = await Section.create({
        ID: ID,
        course: course._id,
        term: term,
        year: year
    })
    await section.save()
}

module.exports = {createSection}