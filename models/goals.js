const mongoose = require('mongoose')


const goalSchema = new mongoose.Schema({
    category: {type: String, required: true},
    objective :{type: String, required: true},
    status: {
        type: String, 
        enum: ['new', 'in progress', 'completed'],
        default: 'new'
    }
})

const Goal = mongoose.model('Goal', goalSchema)

module.exports = Goal