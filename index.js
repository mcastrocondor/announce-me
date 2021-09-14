const express = require('express');
const app = express();
const port = 5000;
const User = require("./src/models/mongodb/users");

app.listen(port, () => console.log(`Server started on port: http://localhost:${port}`));

app.use(express.json());