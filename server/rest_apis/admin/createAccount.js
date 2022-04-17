const {createUser} = require('../../database/Create/createUser')
const sanitize = require("mongo-sanitize")
const User = require('../../database/Schema/User')

async function createAccount(req, res){
    try{
        if(res.userType==='Admin'){
            const ID = sanitize(req.body.ID)
            const f_name = sanitize(req.body.f_name)
            const m_name = sanitize(req.body.m_name)
            const l_name = sanitize(req.body.l_name)
            const email = sanitize(req.body.email)
            const role = sanitize(req.body.role)
            const password = sanitize(req.body.password)
            const students = sanitize(req.body.students)
            
            await createUser(ID, f_name, m_name, l_name, email, role, password, students)
            const user = await User.findOne({ID: ID})
            res.status(200).send({
                msg: 'User successfully registered.',
                user: user
            })
        } else {
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {createAccount}