const mongoose = require('mongoose')

const sectionSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
    },
    course_ID: {
        type: String,
        required: true,
        validate: {
            validator: async function(c_id){
                try {
                    const result = mongoose.connection.db.collection('courses').findOne({ID: c_id})
                    if (result)
                        return true
                    else
                        return false
                } catch(e) {
                    return false;
                }
            },
            message: 'Invalid Course ID.'
        }
    },
    term: {
        type: String,
        enum: ['Fall', 'Spring'],
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 2010,
        max: new Date().getFullYear()
    }
})

module.exports = mongoose.model('Section', sectionSchema)