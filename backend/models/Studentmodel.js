const mongoose =require("mongoose")


const studentSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, " name cannot be empty"]

    },
    email: {
        type: String,
        required: [true, " email cannot be empty"]

    },
    age: {
        type: Number,
        required: [true, " age cannot be empty"]

    },
    education: {
        type: String,
        required: [true, " education cannot be empty"]

    }

})
module.exports = mongoose.model('studentModel',studentSchema); 
