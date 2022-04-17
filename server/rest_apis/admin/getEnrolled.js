const Section = require('../../database/Schema/Section')
const Course = require('../../database/Schema/Course')
const Takes = require('../../database/Schema/Takes')
const Teaches = require('../../database/Schema/Teaches')
const sanitize = require('mongo-sanitize')

async function getEnrolled(req, res){
    try{
        if(res.userType === 'Admin'){
            const course = await Course.findOne({ID: sanitize(req.body.course_ID)}) 
            const section = await Section.findOne({course: course._id, term: sanitize(req.body.term), year: sanitize(req.body.year), ID: sanitize(req.body.ID)})
            const students = await Takes.find({section: section._id})
            const teachers = await Teaches.find({section: section._id})
            res.status(200).json({
                students: students,
                teachers: teachers
            })
        } else {
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {getEnrolled}