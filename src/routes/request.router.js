const express = require('express');
const router = express.Router(); 
const requestController = require('../controllers/request.controller');

router
    .get('/', requestController.get )
    .get('/:id', requestController.getById )
    .post('/', requestController.create )
    .put('/:id', requestController.update )
    .delete('/:id', requestController._delete )
    .get('/user-id/:userId', requestController.getByUserId)
    .get('/state/:state', requestController.getByState)

module.exports = router;