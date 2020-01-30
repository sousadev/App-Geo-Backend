const { Router } = require('express');
const SearchController = require('./controllers/SearchController');
const DevControllers = require('./controllers/DevControllers');

const routes = Router();

routes.get('/devs', DevControllers.index);
routes.post('/devs', DevControllers.store);

routes.get('/search', SearchController.index);
routes.put('/update/:github_username', DevControllers.update);

module.exports = routes;

