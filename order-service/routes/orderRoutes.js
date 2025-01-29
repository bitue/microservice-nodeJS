const express = require('express');
const { createOrder, getOrders, getOrderById } = require('../controllers/orderController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/orders', authMiddleware, createOrder);
router.get('/orders', getOrders);
router.get('/orders/:id', getOrderById);

module.exports = router;
