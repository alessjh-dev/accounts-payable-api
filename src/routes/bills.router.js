const express = require('express');
const router = express.Router(); 
const billsController = require('../controllers/bills.controller');
const multer = require('multer');
const { models } = require("../libs/sequelize");

const storage = multer.memoryStorage();
const upload = multer({storage});

router
    .get('/', billsController.get )
    .get('/:id', billsController.getById )
    .post('/',  upload.single('file'), async (req, res) => {
        try {
           const file = req.file;
           const response = await models.Bills.create({
            file: file.buffer,
            name: file.originalname,
            type: file.mimetype
           }) 
           res.json({mensaje: 'archivo subido correctamente', data: response.id})
        } catch (error) {
            res.status(500).send({ success: false, message: error.message });  
        }
    })
    .put('/:id', billsController.update )
    .delete('/:id', billsController._delete )

module.exports = router;