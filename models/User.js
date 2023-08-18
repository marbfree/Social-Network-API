const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        trim: true, 
        unique: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true, 
        validate: [validateEmail, 'Please use a valid email address'], 
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please use a valid email address']
    },
    thoughts: [{type: Schema.Types.ObjectId, ref: 'thought'}],
    friends: 

})