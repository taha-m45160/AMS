const sanitize = require('mongo-sanitize')
const User = require('../../database/Schema/User')

async function getUser(req, res){
    try{
        if(res.userType === 'Admin'){
            const user = await User.findOne({ID: sanitize(req.body.ID)})
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

module.exports = {getUser}