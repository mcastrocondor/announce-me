const validationUpdateAnnounce = require('../models/mongodb/validationUpdateAnnounce');
const validationAnnounce = require('../models/mongodb/validationAnnounce');
const validationDeleteAnnounce = require('../models/mongodb/validationDeleteAnnounce');
const announceRepository = require('../repository/announceRepository');
const logger = require('@condor-labs/logger');


exports.createAnnounce = async function(req, res) {
    try{
        const validatedData = validationAnnounce.validate({
        userId: req.params.id,
        description: req.body.description,
        category: req.body.category,
        status: 1
        });
        
        if(!validatedData.error){
            const announce = await announceRepository.saveAnnounce(req.params.id, req.body.description, req.body.category.toLowerCase());   
            console.log('Created Announce', announce);
            return announce;                 
        } else{
            logger.error('error invalids data');
            return 'error invalids data';
        }
    } catch(err){
        logger.err(err);
        return err;
    }
};

exports.getAnnouncesbyUser = async function(req, res) {
    
    if(typeof req.query.category !== 'undefined'){
        
        return await announceRepository.findAnnouncesByCategoy(req.params.id, req.query.category.toLowerCase() );     
   
    } else {
        return await announceRepository.findAnnouncesByUser(req.params.id);
    }
};

exports.removeAnnounce = async function(req, res) {
    
    try{
        const validatedData = validationDeleteAnnounce.validate({
        userId: req.params.id,
        id: req.params.announceId
        });
           
        if(!validatedData.error){
            const announce = await announceRepository.deleteAnnounce(req.params.announceId, req.params.id);  
            console.log('Deleted announce ', announce);
            return announce;             
        } else{
            logger.error('error invalids data');
            return 'error invalids data';
        }
     
    } catch(err){
        logger.err(err);
        return err;
    }
};


exports.updateAnnounce = async function(req, res) {
    try{
        const validatedData = validationUpdateAnnounce.validate({
        userId: req.params.id,
        id: req.params.announceId,
        status: req.body.status
        });
           
        if(!validatedData.error){
            const announce = await announceRepository.modifyAnnounce(req.params.id, req.params.announceId, req.body.status);    
            console.log('Updated announce ', announce);
            return announce;             
        } else{
            logger.error('error invalids data');
            return 'error invalids data';
        }
     
    } catch(err){
        logger.err(err);
        return err;
    }
};

