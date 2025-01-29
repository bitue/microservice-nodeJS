const Order = require('../models/Order');
const axios = require('axios');

exports.createOrder = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        // Extract userId from JWT
        const userId = req.user.id;

        // Validate Product ID from Product Service
        const productResponse = await axios.get(`http://localhost:5002/api/products/${productId}`);
        const product = productResponse.data;

        if (!product) return res.status(404).json({ message: 'Product not found' });

        // Save the order
        const order = new Order({ userId, productId, quantity });
        await order.save();

        res.status(201).json({
            _id: order._id,
            userId: order.userId,
            quantity: order.quantity,
            product: product, // Include full product details
            createdAt: order.createdAt
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get All Orders (with Product Details)
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();

        // Fetch Product Details for each order
        const ordersWithProducts = await Promise.all(
            orders.map(async (order) => {
                try {
                    const productResponse = await axios.get(
                        `http://localhost:5002/api/products/${order.productId}`
                    );
                    return {
                        _id: order._id,
                        userId: order.userId,
                        quantity: order.quantity,
                        product: productResponse.data, // Include full product details
                        createdAt: order.createdAt
                    };
                } catch (error) {
                    return { ...order._doc, product: 'Product not available' };
                }
            })
        );

        res.json(ordersWithProducts);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get Single Order by ID (with Product Details)
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });

        // Fetch Product Details
        const productResponse = await axios.get(
            `http://localhost:5002/api/products/${order.productId}`
        );

        res.json({
            _id: order._id,
            userId: order.userId,
            quantity: order.quantity,
            product: productResponse.data, // Include full product details
            createdAt: order.createdAt
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
