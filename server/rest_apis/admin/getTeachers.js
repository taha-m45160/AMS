const User = require('../../database/Schema/User')

async function getTeachers(req, res){
    try{
        if(res.userType === 'Admin'){
            const users = await User.find({role: 'Teacher'})
            res.status(200).json({
                users: users
            })
        } else {
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {getTeachers}