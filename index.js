const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('config');
const app = express();
const db = config.get('mongoURI');
const port = 5000;
const User = require("./src/models/mongodb/users");
const Announce = require("./src/models/mongodb/announces");
const validateUser = require("./src/models/mongodb/validationUser");
const validateAnnounce = require("./src/models/mongodb/validationAnnounce");
//const mongoHelper = require("./src/models/mongodb/mongoHelper");

app.use(express.json());

mongoose
  .connect(db, {})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.listen(port, () => { 
  console.log(`Server started on port: http://localhost:${port}`);
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

app.get('/users', (req, res) => {
    User.find()
    .sort({ date: -1 })
    .then(items => console.log(res.json(items)));
  });

app.delete('/users/:id', (req, res) => {
    User.findOneAndDelete({ _id: req.params.id })
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
}); 
    


