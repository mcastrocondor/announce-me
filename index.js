const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const logger = require('@condor-labs/logger');
const config = require('config');
const app = express();
const db = config.get('mongoURI');
const port = 5000;
const User = require('./src/models/mongodb/users');
const Announce = require('./src/models/mongodb/announces');
const validateUser = require('./src/models/mongodb/validationUser');
const validateAnnounce = require('./src/models/mongodb/validationAnnounce');
const middleware = require('./src/middleware');
const service = require('./src/service');
//const mongoHelper = require("./src/models/mongodb/mongoHelper");

app.use(express.json());

mongoose
  .connect(db, {})
  .then(() => logger.log('MongoDB Connected...'))
  .catch(err => logger.err(err));

app.listen(port, () => { 
  logger.log(`Server started on port: http://localhost:${port}`);
 // await  mongoHelper.connect();
});

/*
//Save User
data = {
    name: 'Rigo Arias',
    username: 'rigoA123',
    password: bcrypt.hashSync('TStrue123')
};
try{
    const validatedData = validateUser.validate({
    name: data.name,
    username: data.username,
    password: data.password
    });
    console.log('value ', validatedData);
    if(!validatedData.error){
    const newUser = new User({
        name: data.name,
        username: data.username,
        password: data.password
        })
        newUser
        .save()
        .then(item => console.log(item))
        .catch(err => console.log(err));
    } else{
    console.log('error invalids data');
    }
} catch(err){
    console.log(err);
}
*/

app.post('/users', (req, res) => {
    try{
        const validatedData = validateUser.validate({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
        });
        logger.log('value ', validatedData);
        if(!validatedData.error){
            const newUser = new User({
            name: req.body.name,
            username: req.body.username.toLowerCase(),
            password: bcrypt.hashSync(req.body.password, 10)
            })
            newUser
            .save()
            .then(item => logger.info(item))
            .catch(err => logger.err(err));
        } else{
            logger.error('error invalids data');
        }
    } catch(err){
        logger.err(err);
    }
});

app.post('/users/auth', (req, res) => {
    User.findOne({ username: req.body.username.toLowerCase() })
    .then(async user => {
        const match = await bcrypt.compare(req.body.password, user.password);
        if(match){
            return res.status(200).send({ token: service.createToken(user) });
        }
    });
});

app.post('/users/:id/announces', middleware.ensureAuthenticated, (req, res) => {
    try{
        const validatedData = validateAnnounce.validate({
        userId: req.params.id,
        description: req.body.description,
        category: req.body.category,
        status: 1
        });
        logger.log('value ', validatedData);
        if(!validatedData.error){
            const newAnnounce = new Announce({
            userId: req.params.id,
            description: req.body.description,
            category: req.body.category.toLowerCase(),
            status: 1
            })
            newAnnounce
            .save()
            .then(item => logger.information('Announce created ', item))
            .catch(err => logger.err(err));
        } else{
            logger.err('error invalids data');
        }
    } catch(err){
        logger.error(err);
    }
});

app.get('/users/:id/announces', middleware.ensureAuthenticated, (req, res) => {
    if(typeof req.query.category !== 'undefined'){
        Announce.find({ userId: req.params.id, category: req.query.category.toLowerCase() })
        .then(items => logger.info(res.json(items)))
        .catch(err => res.status(404).json({ success: false }));
    } else {
        Announce.find({ userId: req.params.id })
        .then(items => logger.info(res.json(items)))
        .catch(err => res.status(404).json({ success: false }));
    }
    
});

app.get('/users', (req, res) => {
    User.find()
    .sort({ date: -1 })
    .then(items => logger.info(res.json(items)));
  });

app.delete('/users/:id/announces/:announceId', middleware.ensureAuthenticated, (req, res) => {
    Announce.findOneAndDelete({ _id: req.params.announceId, userId: req.params.id })
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

app.patch('/users/:id/announces/:announceId', middleware.ensureAuthenticated, (req, res) => {
    Announce.findOneAndUpdate({ userId: req.params.id, _id: req.params.announceId}, req.body)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }));
});  
    


