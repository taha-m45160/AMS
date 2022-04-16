const Resource = require('../Schema/Resource.js')
const mongoose = require('mongoose')

async function createResource(name, section_id, course_id, term, year, attachment) {
    
    const course = await mongoose.connection.db.collection('courses').findOne({
        ID: course_id
    })

    const section = await mongoose.connection.db.collection('sections').findOne({
        ID: section_id, 
        course: course._id, 
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