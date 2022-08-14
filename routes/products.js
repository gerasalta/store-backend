const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');

// products
router.get('/products', productsController.getProducts);
router.post('/products', productsController.postProduct);


module.exports = router;