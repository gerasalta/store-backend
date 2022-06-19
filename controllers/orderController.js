const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
    try {
        let order;
        order = new Order(req.body);
        await order.save();
        res.send(order);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Error 500')
    }
}

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Error 500')
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        let order = await Order.findById(req.params.id);
        if (!Order) {
            res.status(404).json({ msg: 'invalid order' });
        };
        await Order.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Order Deleted' });
    }
    catch (err) {
        res.status(500).send('Error');
    }
}