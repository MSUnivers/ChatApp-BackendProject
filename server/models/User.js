const mongoose = require('mongoose');
const { encrypt } = require('../lib/encryption');

const userSchema = new mongoose.Schema({
    username: {type: String, minlength: 2, maxLength: 50, unique: false},
    password: {type: String, minlength: 4, maxLength: 50, required: true},
    // fullName: {type: String, minlength: 2, maxLength: 50, required: true},
    // dateOfBirth: Date,
    email: {type: String},
    // phoneNumber: {type: String, minlength: 2, maxLength: 50},
    // address: {type: String, minlength: 2, maxLength: 100}
})

userSchema.pre('save', async function (next) {

    if (!this.isModified("password")) return next();

    this.password = await encrypt(this.password)
    next()
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;