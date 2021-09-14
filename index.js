const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
const db = config.get('mongoURI');
const port = 5000;
const User = require("./src/models/mongodb/users");
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

//Save
const newUser = new User({
    name: 'Red Panda',
    isEndangered: true
  })
  newUser
    .save()
    .then(item => console.log(item))
    .catch(err => console.log(err));


