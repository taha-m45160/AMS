const mongoose = require("mongoose")
const sanitize = require("mongo-sanitize")

async function viewOverview () {
        try{
            const courseID = sanitize(req.body.ID)
            const courseDetails = mongoose.connection.db.collection('courses').find({
                ID: courseID
            })
            res.status(200).json({
                overview: courseDetails.overview,
                gradeBreakup: courseDetails.gradeBreakup
            })
        }catch (err){
            res.status(400).send(err)
        }
}

module.exports = {viewOverview}