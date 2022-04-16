const Course = require('../../database/Schema/Course')

async function getCourses(req, res){
    try{
        if(res.userType === 'Admin'){
            const courses = await Course.find()
            res.status(200).json({
                courses: courses
            })
        } else {
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {getCourses}