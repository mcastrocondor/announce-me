const { Router } = require('express');
const announceController = require('../controllers/announceController');
const middleware = require('../middleware');

const api = Router();
api.use(middleware.ensureAuthenticated);
api.get('/', announceController.getAnnouncesbyDescription);
api.get('/:id', announceController.getAnnouncebyId);

module.exports =  api;
