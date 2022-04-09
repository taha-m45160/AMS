const {createToken, authenticateUser} = require('../auth.js')
const {createHash} = require('crypto')

function login(req, res){
    try{
        if(userTypes.includes(req.body.userType)){
            // Front end needs to send type of user in variable 'userType' and password in variable 'password', email in variable 'email'.
            
            // query will be made in util.js
            const rows = await query // xyz
            
            const myHash = createHash('sha256').update(req.body.password).digest('hex')
            // assuming rows[0]['password] contains pw stored in db
            if (rows[0]['password'] === myHash){
                const token = createToken(req.body.email+"|"+req.body.userType)
                res.cookie("jwt", token, {httpOnly:true, sameSite:true})
                res.status(200).send()
            }
        }
    }
    catch {
        res.status(401).send()
    }
}

module.exports = {login}