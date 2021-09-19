
const bcrypt = require('bcrypt');
const validateUser = require('../models/mongodb/validationUser');
const validateLogin = require('../models/mongodb/validationLogin');
const userRepository = require('../repository/userRepository');
const service = require('../service');
const logger = require('@condor-labs/logger');


exports.createUser = async function(req, res) {
    try{
        const validatedData = validateUser.validate({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
        });
        
        if(!validatedData.error){
            username = req.body.username.toLowerCase();
            passwordCrypt = bcrypt.hashSync(req.body.password, 10);
            const user = {
                name: req.body.name,
                username: username,
                password: passwordCrypt
            };
            const newUser = await userRepository.saveUser(user);
            console.log('Created User ', newUser);
            return res.status(200).send(newUser);
            
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