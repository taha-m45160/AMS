const mongoose = require('mongoose')

const takesSchema = new mongoose.Schema({
    stduent_ID: {
        type: Number,
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
                    console.log(e)
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

takesSchema.index({student_ID: 1, section: 1}, {unique: true})

module.exports = mongoose.model('Takes', takesSchema)