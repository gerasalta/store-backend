const Collection = require("../models/Order");

exports.createOrder = async (req, res) => {
    try {
        let order;
        order = new Collection(req.body);
        await order.save();
        res.send('New Order Created')
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Error 500')
    }
}

exports.getOrders = async (req, res) => {
    const reqPage = req.query.page || 1;
    const reqLimit = req.query.limit || 5;
    const options = {
        page: reqPage,
        limit: reqLimit,
        sort: { creationDate: -1 },
        collation: {
            locale: 'en',
        },
    };
    try {
        const orders = await Collection.paginate({}, options);
        res.json(orders);
        console.log(req.query);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Error 500')
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        let order = await Collection.findById(req.params.id);
        if (!Collection) {
            res.status(404).json({ msg: 'invalid order' });
        };
        await Collection.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Order Deleted' });
    }
    catch (err) {
        res.status(500).send('Error');
    }
}