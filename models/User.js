const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, minlength: 2, maxLength: 50, required: true, unique: true},
    password: {type: String, minlength: 4, maxLength: 50, required: true},
    // fullName: {type: String, minlength: 2, maxLength: 50, required: true},
    // dateOfBirth: Date,
    // email: {type: String, minlength: 2, maxLength: 50, required: true, unique: true},
    // phoneNumber: {type: String, minlength: 2, maxLength: 50},
    // address: {type: String, minlength: 2, maxLength: 100}
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;