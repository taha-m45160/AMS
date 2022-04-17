const Course = require('../../database/Schema/Course')
const Takes = require('../../database/Schema/Takes')
const Section = require('../../database/Schema/Section')

async function getCoursesStudents(req, res){
    try{
        const takes = await Takes.find({student_ID: res.ID}).populate({path: 'section', populate: {path: 'course'}} )
        let count = takes.length
        const courses = takes.map((t, i) => (
            {
                ID: t.section.course.ID,
                title: t.section.course.title
            }
        ))
        res.status(200).json({
            courses: courses
        })
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {getCoursesStudents}