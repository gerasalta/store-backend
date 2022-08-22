const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');
const categoriesController = require('../controllers/categoriesControllers')

// products
router.get('/products', productsController.getProducts);
router.post('/products', productsController.postProduct);
router.put('/products', productsController.putProducts);
router.delete('/products', productsController.deleteProducts);

//categories
router.post('/categories', categoriesController.postCategories);
router.get('/categories', categoriesController.getCategories);
router.delete('/categories', categoriesController.deleteCategories);
router.put('/categories', categoriesController.putCategories);

module.exports = router;