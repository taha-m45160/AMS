const mongoose = require("mongoose")

async function changePassword(req, res){
    try{
        console.log(req.body.ID)
        console.log(req.body.password)
        await mongoose.connection.db.collection('users').updateOne({ID: req.body.ID}, {password: req.body.password})
        const user = await mongoose.connection.db.collection('users').find({ID: req.body.ID})
        console.log(user)
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {changePassword}