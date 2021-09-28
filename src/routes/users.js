const { Router } = require('express');
const announceController = require('../controllers/announceController');
const userController = require('../controllers/userController');
const middleware = require('../middleware');

const api = Router();
api.post('/auth', userController.authenticateUser);
api.use(middleware.ensureAuthenticated);
api.post('/', userController.createUser);
api.post('/:id/announces', announceController.createAnnounce);
api.get('/:id/announces', announceController.getAnnouncesbyUserFilters);
api.delete('/:id/announces/:announceId', announceController.removeAnnounce);
api.patch('/:id/announces/:announceId', announceController.updateAnnounce);

module.exports =  api;