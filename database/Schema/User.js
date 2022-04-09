const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 15,
        lowercase: true
    },
    name: {
        first: {
            type: String,
            required: true
        },
        middle: String,
        last: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        required: true,
        enum: ['Student', 'Parent', 'Teacher', 'Admin']
        
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    students: {
        type: [Number],
        default: [],
        validate: {
            validator: async function(arr){
                if(this.role !== 'Parent')
                    return !arr.length
                else {
                    if(arr.length){
                        let count = arr.length
                        const list = arr.map(async (x,i) => {
                            try {
                                const result = await mongoose.connection.db.collection('users').findOne({ID:x})
                                if(result){
                                    count--;
                                }
                                await Promise.all(list);
                                if(count === 0)
                                    return true
                                else
                                    return false
                            } catch(e){
                                return false;
                            }
                        })
                    } else {
                        return false;
                    }
                }
            },
            message: 'Invalid student ID(s)'
        }    
    }
})

module.exports = mongoose.model('User', userSchema)