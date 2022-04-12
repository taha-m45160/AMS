const {createToken} = require('../auth.js')
const mongoose = require('mongoose')
const sanitize = require('mongo-sanitize');


async function login(req, res){
    try{
        const ID = sanitize(req.body.ID)
        const user = await mongoose.connection.db.collection('users').findOne({
            ID: ID
        })
        if (user.password === req.body.password){
            const token = createToken(req.body.ID+"|"+user.role)
            res.cookie("jwt", token, {httpOnly:true, sameSite:true})
            res.status(200).json({
                role: user.role
            })
        } else {
            res.status(401).send()
        }
    }
    catch {
        res.status(401).send()
    }
}

module.exports = {login}