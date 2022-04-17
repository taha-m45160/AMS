const sanitize = require('mongo-sanitize')
const Course = require('../../database/Schema/Course')
const Teaches = require('../../database/Schema/Teaches')
const Section = require('../../database/Schema/Section')
const User = require('../../database/Schema/User')

async function getCourseDetailsStudents(req, res){
    try{
        const ccode = sanitize(req.body.ccode)
        const course = await Course.findOne({ID: ccode})
        const section = await Section.findOne({student_ID: res.ID, course: course._id})
        const teaches = await Teaches.findOne({section: section._id}) 
        const user = await User.findOne({ID: teaches.teacher_ID})
        const toSend = {
            title: course.title,
            instr: `${user.name.first} ${user.name.last}`,
            overview: course.overview,
            gradeBreakUp: course.gradeBreakup
        }
        res.status(200).json(toSend)
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {getCourseDetailsStudents}