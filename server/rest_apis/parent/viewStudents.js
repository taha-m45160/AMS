const mongoose = require("mongoose")
const sanitize = require("mongo-sanitize")

async function viewStudents () {
        try{
            const parent = await mongoose.connection.db.collection('users').find({
                ID: res.ID
            })

            studentIDs = parent.students
            studentNames = []
            
            for (const stud of studentIDs){
                const name = await mongoose.collection.db.collection('users').findOne({
                    ID: stud
                })
                studentNames.push(name)
            }
            
            res.status(200).json({
                studentID: studentIDs,
                studentName: studentNames
            })
        }catch (err){
            res.status(400).send(err)
        }
}

module.exports = {viewStudents}