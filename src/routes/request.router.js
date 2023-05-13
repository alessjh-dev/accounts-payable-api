const express = require('express');
const router = express.Router(); 
const requestController = require('../controllers/request.controller');

router
    .get('/', requestController.get )
    .get('/:id', requestController.getById )
    .post('/', requestController.create )
    .put('/:id', requestController.update )
    .delete('/:id', requestController._delete );

module.exports = router;