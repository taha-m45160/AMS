const Course = require('../../database/Schema/Course')
const Teaches = require('../../database/Schema/Teaches')
const Section = require('../../database/Schema/Section')

async function getCoursesTeachers(req, res){
    try{
        console.log(req.id, res.id)
        const teaches = await Teaches.find({teacher_ID: res.ID}).populate('section')
        let count = teaches.length
        const courses = teaches.map((t, i) => (
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

module.exports = {getCoursesTeachers}