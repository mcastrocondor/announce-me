const Router = require('express');
const { announces, users } = require('./routes/index');

const router = Router();

router.use('/users', users);
router.use('/announces', announces);

module.exports =  router;