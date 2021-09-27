const User = require('../models/mongodb/users');


exports.saveUser = async function (object) {
    const newUser = new User({
        name: object.name,
        username: object.username,
        password: object.password
    });
    const savedUser = await newUser.save();
    return {
        name: savedUser.name,
        username: savedUser.username,
        id: savedUser._id
    };
};

exports.getUser = async function (username) {

    return User.findOne({ username: username });
};

