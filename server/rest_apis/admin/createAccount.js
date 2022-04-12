const {createUser} = require('../../database/Create/createUser')
const sanitize = require("mongo-sanitize")

async function createAccount(req, res){
    try{
        const ID = sanitize(req.body.ID)
        const f_name = sanitize(req.body.f_name)
        const m_name = sanitize(req.body.m_name)
        const l_name = sanitize(req.body.l_name)
        const email = sanitize(req.body.email)
        const role = sanitize(req.body.role)
        const password = sanitize(req.body.password)
        const students = sanitize(req.body.students)
        
        await createUser(ID, f_name, m_name, l_name, email, role, password, students)
        res.status(200).send('User successfully registered.')
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {createAccount}