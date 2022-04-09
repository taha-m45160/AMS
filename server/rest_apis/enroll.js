const {createUser} = require('../../database/Create/createUser')

function enroll(req, res){
    try{
        await createUser(req.body.ID, req.body.f_name, req.body.m_name, req.body.l_name, req.body.email, req.body.role, req.body.password, req.body.students)
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {enroll}