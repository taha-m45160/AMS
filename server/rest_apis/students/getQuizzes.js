const sanitize = require('mongo-sanitize')
const Course = require('../../database/Schema/Course')
const Quizzes = require('../../database/Schema/Quizzes')
const Section = require('../../database/Schema/Section')

async function getQuizzesStudents(req, res){
    try{
        const ccode = sanitize(req.body.ccode)
        const course = await Course.findOne({ID: ccode})
        const section = await Section.findOne({student_ID: res.ID, course: course._id})
        const quizzes = await Quizzes.find({section: section._id}) 
        res.status(200).json({
            quizzes: quizzes
        })
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {getQuizzesStudents}