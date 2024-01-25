const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name :{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    goals: [{type: mongoose.Schema.Types.ObjectId, ref: 'Goal'}],
    achievedGoals: [{type: mongoose.Schema.Types.ObjectId, ref: 'Goal'}]
})

const User = mongoose.model('User', userSchema)

module.exports = User