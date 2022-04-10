const mongoose = require('mongoose')

const takesSchema = new mongoose.Schema({
    student_ID: {
        type: String,
        required: true,
        validate: {
            validator: async function(s_id){
                try {
                    const result = await mongoose.connection.db.collection('users').findOne({ID: s_id})
                    if(result.role === 'Student')
                        return true
                    else
                        return false
                } catch(e) {
                    return false
                }
            },
            message: 'Invalid student ID.'
        }
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
        required: true
    }
})

module.exports = mongoose.model('Takes', takesSchema)