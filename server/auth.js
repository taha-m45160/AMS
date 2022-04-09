const jwt = require('jsonwebtoken')
const secretStr = "AMS-Database2022-SecretString-39531942" 

const createToken = (id) => {
    // 30 minute session
    return jwt.sign({id}, secretStr, {expiresIn: 1800})
}

const verify = (token, secretStr) => {
    return new Promise ((resolve, reject) => {
        jwt.verify(token, secretStr, (err, decodedToken) => {
            if (err){
                reject(err)
            } else {
                resolve(decodedToken)
            }
        })
    })
}

const authenticateUser = async (req, res, next) => {
    try{
        const token = req.cookies.jwt
        const decodedToken = await verify(token, secretStr)
        const tokenData = decodedToken.id.split("|")
        const userType = takenData[1] // Need to verify with frontend
        const email = tokenData[0]

        if (userType == "teacher") {
            res.email = email
            next() 
        } else {
            res.status(401).send()
        }
    } 
    catch{
        res.status(401).send() 
    }
}

module.exports = {createToken, authenticateUser}