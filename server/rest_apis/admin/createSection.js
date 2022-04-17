const {createSection} = require('../../database/Create/createSection')
const sanitize = require("mongo-sanitize")
const Section = require('../../database/Schema/Section')
const Course = require('../../database/Schema/Course')

async function create_section(req, res){
    try{
        if(res.userType==='Admin'){
            const course_ID = sanitize(req.body.course_ID)
            const ID = sanitize(req.body.ID)
            const term = sanitize(req.body.term)
            const year = sanitize(req.body.year)
            await createSection(ID, course_ID, term, year)
            const course = await Course.findOne({ID: course_ID})
            const section = await Section.findOne({ID: ID, term: term, year: year, course: course._id})
            res.status(200).json({
                msg: 'Section successfully created',
                section: section
            })
        } else {
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {create_section}