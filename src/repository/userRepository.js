const User = require('../models/mongodb/users');


exports.saveUser = async function(name, username, password) {
    const newUser = new User({
        name: name,
        username: username,
        password: password
        });
    return await newUser.save();
};

exports.loginUser = async function(username) {
    
    const login = await User.findOne({ username: username });
     return login;
};

