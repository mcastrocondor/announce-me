const Announce = require('../models/mongodb/announces');
const mongoose = require('mongoose');

exports.saveAnnounce = async function (object) {
    const newAnnounce = new Announce({
        user: mongoose.Types.ObjectId(object.userId),
        description: object.description,
        category: object.category,
        status: 1
    })
    await newAnnounce.save();
    return newAnnounce;
};

exports.findAnnouncesByUser = async function ({ userId }) {
    const announces = await Announce.find({ user: mongoose.Types.ObjectId(userId) }).populate("user", { name: 1, username: 1 }).limit(10);

    return announces;
};

exports.findAnnouncesByCategoy = async function (userId, category) {
    const announces = await Announce.find({ user: mongoose.Types.ObjectId(userId), category: category });
    return announces;
};

exports.findAnnouncesByDescription = async function (data) {
   
    const announces = await Announce.find({ description: { $regex: '.*' + data.description + '.*', $options: 'i' } }).populate("user", { name: 1, username: 1 }).limit(data.limit * 1)
    .skip((data.page - 1) * data.limit);

    const count = await Announce.countDocuments();
    return { 
        announces: announces,
        totalPages: Math.ceil(count / data.limit),
        currentPage: data.page    
    };
}

exports.findAnnounceById = async function (id) {
    const announces = await Announce.find({ _id: id });
    return announces;
};

exports.deleteAnnounce = async function (announceId, userId) {
    return await Announce.findOneAndDelete({ _id: announceId, user: mongoose.Types.ObjectId(userId) });
    return announce;
};

exports.modifyAnnounce = async function (userId, announceId, status) {
    const announce = await Announce.findOneAndUpdate({ _id: announceId, user: mongoose.Types.ObjectId(userId) }, { status: status });
    return announce;
};
