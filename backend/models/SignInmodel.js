//to create model we create schema
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: [true, " email cannot be empty"]

    },
    password: {
        type: String,
        required: [true, " password cannot be empty"]

    }
})
module.exports = mongoose.model('usersModel',userSchema); 

