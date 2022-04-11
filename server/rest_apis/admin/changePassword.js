const mongoose = require("mongoose")

async function changePassword(req, res){
    try{
        await mongoose.connection.db.collection('users').updateOne({ID: req.body.ID}, {$set: {password: req.body.password}})
        res.status(200).send('Password successfully updated.')
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {changePassword}