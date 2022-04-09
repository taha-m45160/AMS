const {createToken} = require('../auth.js')

function enroll(req, res){
    new Promise (async (resolve, reject) => {
        try {
            await db.teacher.insert({
            _id : req.body.ID,
            first_name:req.body.first_name,
            middle_name:req.body.middle_name,
            last_name:req.body.last_name,
            email: req.body.email,
            password: req.body.password
            
        })
        resolve()

        } catch (err) {
            reject(err)
        }
    })
    .then(() => {
        const token = createToken(req.body.email+"|"+req.body.userType)
        res.cookie('jwt', token, {httpOnly: true, sameSite: true})
        res.status(200).send()
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}

module.exports = {enroll}