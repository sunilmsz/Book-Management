const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    title: {
        type: String,
        enum: ["Mr", "Mrs", "Miss"],
        required: true,
        trim:true
    },
    name: {
        type: String,
        required: true,
        lowercase:true,
        trim:true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    email: {
        required: true,
        type: String,
        unique: true,
        lowercase:true,
        trim:true
    },
    password: {
        required: true,
        type: String,

    },
    address: {
        street: { type: String ,lowercase:true,trim:true },
        city: { type: String ,lowercase:true,trim:true},
        pincode: { type: String ,loadClass:true,trim:true}
    },

}, { timestamps: true });


module.exports = mongoose.model('User', userSchema)