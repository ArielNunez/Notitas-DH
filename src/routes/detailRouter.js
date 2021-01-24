const express = require('express');
const router = express.Router();

const detailController = require('../controllers/detailController.js');

router.get('/:id', detailController.mostrarForm);
router.put('/:id', detailController.editar);
router.delete('/:id', detailController.borrar);


module.exports = router;