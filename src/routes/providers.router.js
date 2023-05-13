const express = require('express');
const router = express.Router(); 
const providersController = require('../controllers/providers.controller');

router
    .get('/', providersController.get )
    .get('/:id', providersController.getById )
    .post('/', providersController.create )
    .put('/:id', providersController.update )
    .delete('/:id', providersController._delete );

module.exports = router;