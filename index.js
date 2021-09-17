const express = require('express');
const mongoose = require('mongoose');
const logger = require('@condor-labs/logger');
const config = require('config');
const app = express();
const db = config.get('mongoURI');
const port = 5000;
const userController = require('./src/controllers/userController');
const AnnounceController = require('./src/controllers/announceController');

const middleware = require('./src/middleware');
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

app.post('/users', userController.createUser);

app.post('/users/auth', userController.authenticateUser);

app.post('/users/:id/announces', middleware.ensureAuthenticated, AnnounceController.createAnnounce);

app.get('/users/:id/announces', middleware.ensureAuthenticated, AnnounceController.getAnnouncesbyUser);

app.delete('/users/:id/announces/:announceId', middleware.ensureAuthenticated, AnnounceController.removeAnnounce);

app.patch('/users/:id/announces/:announceId', middleware.ensureAuthenticated, AnnounceController.updateAnnounce);  
    


