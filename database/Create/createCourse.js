const Course = require('../Schema/Course.js')

async function createCourse(ID, title) {
    try {
        const course = await Course.create({
            ID: ID,
            title: title,
        })
        await course.save()
    } catch(e) {
        console.log(e.message)
    }
}

module.exports = {createCourse}