const Resource = require('../Schema/Resource.js')
const mongoose = require('mongoose')

async function createResource(name, section_id, course_id, term, year, attachment) {
    const section = await mongoose.connection.db.collection('sections').findOne({
        ID: section_id, 
        course_ID: course_id, 
        term: term, 
        year: year
    })
    const resource = await Resource.create({
        name: name,
        section: section._id,
        date: new Date(),
        attachment: attachment
    })
    await resource.save()
}

module.exports = {createResource}