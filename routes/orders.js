const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// ORDERS
router.post('/orders', orderController.createOrder);
router.get('/orders', orderController.getOrders);
router.delete('/orders/:id', orderController.deleteOrder);

// PRICES

router.get('/prices', orderController.getPrices);
router.put('/prices', orderController.putPrices);

// DEBTORS

router.put('/debtors', orderController.putDebtors)

module.exports = router;