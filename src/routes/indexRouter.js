const express = require('express');
const detailController = require('../controllers/detailController.js');
const indexController = require('../controllers/indexController.js');
const router = express.Router();



router.get('/', indexController.index);
router.post('/', detailController.crear)


module.exports = router;