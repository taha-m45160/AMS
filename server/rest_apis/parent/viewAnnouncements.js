const mongoose = require("mongoose")
const sanitize = require("mongo-sanitize")

async function viewAnnouncements () {
        try{
            const ans = await mongoose.connection.db.collection('announcements').find()
            res.status(200).json({
                announcements: ans
            })
        }catch (err){
            res.status(400).send(err)
        }
}

module.exports = {viewAnnouncements}