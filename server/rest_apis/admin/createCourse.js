const {createCourse} = require('../../database/Create/createCourse')
const sanitize = require("mongo-sanitize")
const Course = require('../../database/Schema/Course')

async function create_course(req, res){
    try{
        if(res.userType==='Admin'){
            console.log('here')
            const ccode = sanitize(req.body.ccode)
            const ctitle = sanitize(req.body.ctitle)
            await createCourse(ccode, ctitle)
            console.log('here')
            const course = await Course.findOne({ID: ccode, title: ctitle})
            res.status(200).json({
                msg: 'Course successfully created',
                course: course
            })
        } else {
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {create_course}