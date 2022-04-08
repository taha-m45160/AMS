const Course = require('../Schema/Course.js')

async function createCourse(ID, title) {
    const course = await Course.create({
        ID: ID,
        title: title,
    })
    await course.save()
}

module.exports = {createCourse}