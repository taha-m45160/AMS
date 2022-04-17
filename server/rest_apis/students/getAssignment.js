const sanitize = require('mongo-sanitize')
const Course = require('../../database/Schema/Course')
const Assignment = require('../../database/Schema/Assignment')
const Section = require('../../database/Schema/Section')

async function getAssignmentsStudents(req, res){
    try{
        const ccode = sanitize(req.body.ccode)
        const course = await Course.findOne({ID: ccode})
        const section = await Section.findOne({student_ID: res.ID, course: course._id})
        const assignments = await Assignment.find({section: section._id}) 
        res.status(200).json({
            assignments: assignments
        })
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {getAssignmentsStudents}