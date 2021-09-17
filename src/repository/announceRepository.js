const Announce = require('../models/mongodb/announces');
const logger = require('@condor-labs/logger');

exports.saveAnnounce = async function(userId, description, category ) {
    const newAnnounce = new Announce({
    userId: userId,
    description: description,
    category: category,
    status: 1
    })
    await newAnnounce
    .save()
    .then(announce => { return announce })
    .catch(err => { return err });
    return newAnnounce;
};

exports.findAnnouncesByUser =  async function(userId) {
    const announces = await Announce.find({ userId: userId })
    .then(items => { logger.log('findAnnouncesByUser ' + items); return items })
    .catch(err => { return err });
    return announces;
};

exports.findAnnouncesByCategoy = async function(userId, category) {
   const announces = await Announce.find({ userId: userId, category: category })
    .then(items => { logger.log('findAnnouncesByCategoy ' + items); return items })
    .catch(err => { return err });
    return announces;
};

exports.deleteAnnounce = async function(announceId, userId) {
    const announce = await Announce.findOneAndDelete({ _id: announceId, userId: userId })
    .then((item) => { return item  })
    .catch(err => { return err });
    return announce;
};

exports.modifyAnnounce = async function(userId, announceId, status) {
   const announce = await Announce.findOneAndUpdate({ _id: announceId, userId: userId}, { status: status})
    .then((announce) => { return announce })
    .catch(err => { return err });
    return announce;
};