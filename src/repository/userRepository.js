const User = require('../models/mongodb/users');
const bcrypt = require('bcrypt');
const logger = require('@condor-labs/logger');


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
    return newUser;
};

exports.loginUser = async function(username) {
    
    const login = await User.findOne({ username: username })
    .then(user => { logger.log('loginUser ' + user); return user })
    .catch(err => { return err });
     return login;
};

