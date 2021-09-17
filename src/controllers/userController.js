
const bcrypt = require('bcrypt');
const validateUser = require('../models/mongodb/validationUser');
const validateLogin = require('../models/mongodb/validationLogin');
const userRepository = require('../repository/userRepository');
const service = require('../service');
const logger = require('@condor-labs/logger');


exports.createUser = function(req, res) {
    try{
        const validatedData = validateUser.validate({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
        });
        
        if(!validatedData.error){
            username = req.body.username.toLowerCase();
            passwordCrypt = bcrypt.hashSync(req.body.password, 10);
            const newUser = userRepository.saveUser(req.body.name, username, passwordCrypt);
            return newUser;
            
        } else{
            logger.error('error invalids data');
            return 'error invalids data';
        }
    } catch(err){
        logger.err(err);
    }
};

exports.authenticateUser = async function(req, res) {
    try{
        const validatedData = validateLogin.validate({
        username: req.body.username,
        password: req.body.password
        });
        
        if(!validatedData.error){
            const user = await userRepository.loginUser(req.body.username.toLowerCase()); 
            console.log('resss', user);
            if(user) {
                const match = await bcrypt.compare(req.body.password, user.password);
                if(match){
                    return res.status(200).send({ token: service.createToken(user) });
                } else {
                    return 'Password is incorrect';
                }  
            } else {
                return "User doesn't find, verify your data";
            }
                    
        } else {
            logger.err('error invalids data');
        }

    } catch(err){
    
    }
};