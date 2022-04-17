const sanitize = require('mongo-sanitize')
const Course = require('../../database/Schema/Course')
const Resource = require('../../database/Schema/Resource')
const Section = require('../../database/Schema/Section')

async function getResourcesStudents(req, res){
    try{
        const ccode = sanitize(req.body.ccode)
        const course = await Course.findOne({ID: ccode})
        const section = await Section.findOne({student_ID: res.ID, course: course._id})
        const resources = await Resource.find({section: section._id}) 
        res.status(200).json({
            resources: resources
        })
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {getResourcesStudents}