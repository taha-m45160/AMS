const mongoose = require("mongoose")
const sanitize = require("mongo-sanitize")

async function changeTeacherPassword(req, res){
    try{
        if(res.userType==='Teacher'){
            const ID = sanitize(req.body.ID)
            const password = sanitize(req.body.password)
            await mongoose.connection.db.collection('users').updateOne({ID: ID}, {$set: {password: password}})
            res.status(200).send('Password successfully updated.')
        } else {
            res.status(401).send()
        }
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {changeTeacherPassword}