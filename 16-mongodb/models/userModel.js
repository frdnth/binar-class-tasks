const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    address: {
        type: String
    }
});

const User = mongoose.model('user', userSchema);


module.exports = User