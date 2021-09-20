const validationUpdateAnnounce = require('../models/mongodb/validationUpdateAnnounce');
const validationAnnounce = require('../models/mongodb/validationAnnounce');
const validationDeleteAnnounce = require('../models/mongodb/validationDeleteAnnounce');
const validationFilter = require('../models/mongodb/validationFilter');
const validationId = require('../models/mongodb/validationId');
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
            const data = {
                userId: req.params.id,
                description: req.body.description,
                category: req.body.category.toLowerCase()
            }
            const announce = await announceRepository.saveAnnounce(data);   
            console.log('Created Announce', announce);
            return res.status(200).send(announce);                
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
  if(typeof req.query.category !== 'undefined') {
    try{
        const validatedDataFilter = validationFilter.validate({
        userId: req.params.id,
        category: req.query.category
        });
           
        if(!validatedDataFilter.error){
           const filterAnnunces = await announceRepository.findAnnouncesByCategoy(req.params.id, req.query.category.toLowerCase());
           console.log('Filtered announces ', filterAnnunces); 
           return res.status(200).send(filterAnnunces);    

         } else{
            logger.error('error invalids data');
            return 'error invalids data';
        }
     
    } catch(err){
        logger.err(err);
        return err;
    }
  }
  else {
    try{
        const validatedData = validationId.validate({
        id: req.params.id
        });
           
        if(!validatedData.error){
            const announces = await announceRepository.findAnnouncesByUser(req.params.id);    
            console.log('Announces by user ', announces);
            return res.status(200).send(announces);              
        } else{
            logger.error('error invalids data');
            return 'error invalids data';
        }
     
    } catch(err){
        logger.err(err);
        return err;
    }
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
            return res.status(200).send(announce); 
                        
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
            return res.status(200).send(announce);             
        } else{
            logger.error('error invalids data');
            return 'error invalids data';
        }
     
    } catch(err){
        logger.err(err);
        return err;
    }
};

