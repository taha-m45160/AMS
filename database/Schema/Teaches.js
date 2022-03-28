const mongoose = require('mongoose')

const teachesSchema = new mongoose.Schema({
    teacher_ID: {
        type: Number,
        required: true,
        validate: {
            validator: async function(t_id){
                try {
                    const result = await mongoose.connection.db.collection('users').findOne({ID: t_id})
                    if(result.role === 'Teacher')
                        return true
                    else
                        return false
                } catch(e) {
                    console.log(e)
                    return false
                }
            },
            message: 'Invalid teacher ID.'
        }
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
        required: true
    }
})

teachesSchema.index({teacher_ID: 1, section: 1}, {unique: true})

module.exports = mongoose.model('Teaches', teachesSchema)