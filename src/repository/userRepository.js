const User = require('../models/mongodb/users');
const bcrypt = require('bcrypt');


exports.saveUser = function(name, username, password) {
    const newUser = new User({
        name: name,
        username: username,
        password: password
        })
        newUser
        .save()
        .then(user => { return user })
        .catch(err => { return err });
};

exports.loginUser = function(username) {
    User.findOne({ username: username })
    .then(user => { return user })
    .catch(err => { return err });
};

