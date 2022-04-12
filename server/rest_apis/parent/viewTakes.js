const mongoose = require("mongoose")
const sanitize = require("mongo-sanitize")

async function viewTakes () {
        try{
            const studentID = sanitize(req.body.ID)
            const courseObjects = mongoose.connection.db.collection('takes').find({
                student_ID: studentID
            })

            res.status(200).json({
                courseObjects: courseObjects
            })

        }catch (err){
            res.status(400).send(err)
        }
}

module.exports = {viewTakes}