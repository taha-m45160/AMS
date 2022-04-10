const {createToken} = require('../auth.js')
const mongoose = require('mongoose')

async function login(req, res){
    try{
        const user = await mongoose.connection.db.collection('users').findOne({
            ID: parseInt(req.body.ID)
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