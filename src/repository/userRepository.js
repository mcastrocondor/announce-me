const User = require('../models/mongodb/users');


exports.saveUser = async function(object) {
    const newUser = new User({
        name: object.name,
        username: object.username,
        password: object.password
        });
    return await newUser.save();
};

exports.loginUser = async function(username) {
    
    const login = await User.findOne({ username: username });
     return login;
};

