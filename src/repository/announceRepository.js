const Announce = require('../models/mongodb/announces');

exports.saveAnnounce = function(userId, description, category ) {
    const newAnnounce = new Announce({
    userId: userId,
    description: description,
    category: category,
    status: 1
    })
    newAnnounce
    .save()
    .then(announce => { return item })
    .catch(err => { return err });
};

exports.findAnnouncesByUser = function(userId) {
    Announce.find({ userId: userId })
    .then(announces => { return res.json(announces) })
    .catch(err => { return res.status(404).json({ success: false }) });
};

exports.findAnnouncesByCategoy = function(userId, category) {
    Announce.find({ userId: userId, category: category })
    .then(announces => { return res.json(announces) })
    .catch(err => { return res.status(404).json({ success: false }) });
};

exports.deleteAnnounce = function(announceId, userId) {
    Announce.findOneAndDelete({ _id: announceId, userId: userId })
    .then(() => { return res.json({ success: true }) })
    .catch(err => { return res.status(404).json({ success: false }) });
};

exports.deleteAnnounce = function(announceId, userId) {
    Announce.findOneAndUpdate({ userId: userId, _id: announceId}, req.body)
    .then(() => { return res.json({ success: true }) })
    .catch(err => { return res.status(404).json({ success: false }) });
};