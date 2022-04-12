const mongoose = require("mongoose")
const sanitize = require("mongo-sanitize")

async function viewGradebook () {
        try{
            const studentID = sanitize(req.body.ID)
            const section = sanitize(req.body.section) // Assuming front-end is sending section object back
            
            const gradebook = await mongoose.connection.db.collection('gradebooks').find({
                student_ID: studentID,
                section: section
            })
            
            res.status(200).json({
                gradebook: gradebook
            })
        }catch (err){
            res.status(400).send(err)
        }
}

module.exports = {viewGradebook}