const express = require('express');
const router = express.Router(); 
const accountsController = require('../controllers/accounts.controller');

router
    .get('/', accountsController.get )
    .get('/:id', accountsController.getById )
    .post('/', accountsController.create )
    .put('/:id', accountsController.update )
    .delete('/:id', accountsController._delete );

module.exports = router;