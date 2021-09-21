const Announce = require('../models/mongodb/announces');

exports.saveAnnounce = async function (object) {
    const newAnnounce = new Announce({
        userId: object.userId,
        description: object.description,
        category: object.category,
        status: 1
    })
    await newAnnounce
        .save();
    return newAnnounce;
};

exports.findAnnouncesByUser = async function (userId) {
    const announces = await Announce.find({ userId: userId });

    return announces;
};

exports.findAnnouncesByCategoy = async function (userId, category) {
    const announces = await Announce.find({ userId: userId, category: category });
    return announces;
};

exports.deleteAnnounce = async function (announceId, userId) {
    const announce = await Announce.findOneAndDelete({ _id: announceId, userId: userId });
    return announce;
};

exports.modifyAnnounce = async function (userId, announceId, status) {
    const announce = await Announce.findOneAndUpdate({ _id: announceId, userId: userId }, { status: status });
    return announce;
};