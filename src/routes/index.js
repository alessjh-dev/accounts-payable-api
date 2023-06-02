const express = require('express'); 

const providersRouter = require('./providers.router');
const requestRouter = require('./request.router');
const usersRouter = require('./users.router');
const billsRouter = require('./bills.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/', router); 
  router.use('/providers', providersRouter);
  router.use('/request', requestRouter);
  router.use('/users', usersRouter);
  router.use('/bills', billsRouter);
}

module.exports = routerApi;