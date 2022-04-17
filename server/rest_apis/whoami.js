const User = require('../database/Schema/User')

async function whoami(req, res){
    try{
        if(res.userType === 'Admin' || res.userType === 'Parent' || res.userType === 'Teacher' || res.userType === 'Student'){
            const user = await User.findOne({role: 'Admin'})
            res.status(200).json({
                user: user
            })
        } else {
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {whoami}