const mongoose =require("mongoose")


const registerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, " name cannot be empty"]

    },
    email: {
        type: String,
        required: [true, " email cannot be empty"]

    },
    password: {
        type: String,
        required: [true, " password cannot be empty"]

    },
    reEnterPassword: {
        type: String,
        required: [false, " password cannot be empty"]

    }

})
module.exports = mongoose.model('registerModel',registerSchema); 
