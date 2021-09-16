const Announce = require('../models/mongodb/announces');
const validateAnnounce = require('../models/mongodb/validationAnnounce');
const announceRepository = require('../repository/announceRepository');
const logger = require('@condor-labs/logger');


exports.createAnnounce = function(req, res) {
    try{
        const validatedData = validateAnnounce.validate({
        userId: req.params.id,
        description: req.body.description,
        category: req.body.category,
        status: 1
        });
        logger.log('value ', validatedData);
        if(!validatedData.error){
            return announceRepository.saveAnnounce(req.params.id, req.body.description, req.body.category.toLowerCase());                    
        } else{
            logger.error('error invalids data');
            return 'error invalids data';
        }
    } catch(err){
        logger.err(err);
    }
};

exports.getAnnouncesbyUser = function(req, res) {
    if(typeof req.query.category !== 'undefined'){
        
        return announceRepository.findAnnouncesByCategoy(req.params.id, req.query.category.toLowerCase() );
   
    } else {
        return announceRepository.findAnnouncesByUser(req.params.id);
    }
};

exports.removeAnnounce = function(req, res) {
    return announceRepository.deleteAnnounce(req.params.announceId, req.params.id);
};


exports.updateAnnounce = function(req, res) {
    return announceRepository.deleteAnnounce(req.params.announceId, req.params.id);
};

