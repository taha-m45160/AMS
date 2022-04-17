const Section = require('../../database/Schema/Section')
const Course = require('../../database/Schema/Course')
const sanitize = require('mongo-sanitize')

async function getSections(req, res){
    try{
        if(res.userType === 'Admin'){
            const course = await Course.findOne({ID: sanitize(req.body.course_ID)}) 
            const sections = await Section.find({course: course._id})
            res.status(200).json({
                sections: sections
            })
        } else {
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {getSections}