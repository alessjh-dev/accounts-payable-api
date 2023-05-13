const express = require('express'); 

const providersRouter = require('./providers.router');
const requestRouter = require('./request.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/', router); 
  router.use('/providers', providersRouter);
  router.use('/request', requestRouter);
}

module.exports = routerApi;