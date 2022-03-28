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
                    console.log(e);
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

sectionSchema.index({ID: 1, course_ID: 1, term: 1, year: 1}, {unique: true})

module.exports = mongoose.model('Section', sectionSchema)