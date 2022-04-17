const {createTakes} = require('../../database/Create/createTakes')
const {createTeaches} = require('../../database/Create/createTeaches')
const User = require('../../database/Schema/User')
const sanitize = require("mongo-sanitize")

async function enroll(req, res){
    try{
        if(res.userType === 'Admin'){
            const user_ID = sanitize(req.body.user_ID)
            const role = sanitize(req.body.role)
            const course_ID = sanitize(req.body.course_ID)
            const section_ID = sanitize(req.body.section_ID)
            const term = sanitize(req.body.term)
            const year = sanitize(req.body.year)
            if(role==='Student'){
                await createTakes(user_ID, section_ID, course_ID, term, year)
            } else if (role === 'Teacher'){
                await createTeaches(user_ID, section_ID, course_ID, term, year)
            }
            const user = await User.findOne({ID: user_ID})
            res.status(200).json({
                msg: 'User successfully created',
                user: user
            })
        } else {
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {enroll}