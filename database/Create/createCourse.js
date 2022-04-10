const Course = require('../Schema/Course.js')

async function createCourse(ID, title, overview, gradeBreakup) {
    const course = await Course.create({
        ID: ID,
        title: title,
        overview: overview,
        gradeBreakup: gradeBreakup
    })
    await course.save()
}

module.exports = {createCourse}