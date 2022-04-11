const {createUser} = require('../../../database/Create/createUser')

async function createAccount(req, res){
    try{
        await createUser(req.body.ID, req.body.f_name, req.body.m_name, req.body.l_name, req.body.email, req.body.role, req.body.password, req.body.students)
        res.status(200).send('User successfully registered.')
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {createAccount}