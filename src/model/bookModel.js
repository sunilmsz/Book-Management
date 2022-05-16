const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const bookSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
        trim: true,
        lowercase:true,
        unique:true

    },
    excerpt: {
        type: String,
        required: true,
        trim:true,
        lowercase:true
    },

    ISBN: {
        required: true,
        type: String,
        unique: true,
        lowercase:true,
        trim:true
    },
    userId: {
        required: true,
        type: ObjectId,
        ref: 'User',
        trim:true
    },
    reviews: {
        type: Number,
        default: 0,
        required: true,
        comment: String,
        trim:true
    },
    category: {
        type: String,
        required: true,
        trim:true,
        lowercase:true

    },
    subcategory: [{type:String, required:true,trim:true}],

    deletedAt: {
        type: Date
    },
    isDeleted: {
        type: Boolean,
        default: false

    },
    releasedAt: {
        type: String,
        default: null
    },

}, { timestamps: true });

module.exports =new  mongoose.model('Book', bookSchema)