const User = require('../models/mongodb/users');


exports.saveUser = async function(object) {
    const newUser = new User({
        name: object.name,
        username: object.username,
        password: object.password
        });
        const savedUser = await newUser.save();
        const data = {
            name: savedUser.name,
            username: savedUser.username,
            id: savedUser._id
        };
        
    return data;
};

exports.loginUser = async function(username) {
    
    const login = await User.findOne({ username: username });
     return login;
};

