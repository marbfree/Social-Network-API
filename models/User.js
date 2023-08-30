const { Schema, model } = require('mongoose');


let validateEmail = function(email) {
    let re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return re.test(email)
};

const userSchema = new Schema({
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
    friends: [{type: Schema.Types.ObjectId, ref: 'user'}],
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
);

userSchema
.virtual('friendCount')
.get(function () {
    console.log("==========")
    if (this.friends.length) {
        return this.friends.length;
    } else { return 0 }
});

const User = model('user', userSchema);

module.exports = User;