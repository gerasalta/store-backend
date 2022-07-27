const Collection = require("../models/Order");
const pricesCollection = require("../models/Prices");
const debtorsCollection = require("../models/Debtors");

exports.createOrder = async (req, res) => {
    try {
        let order = new Collection(req.body);
        await order.save();
        res.status(200).json({msg: 'New Order has been created'})
    }
    catch (err) {
        res.status(404).send('Error Post')
    }
}

exports.getOrders = async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const totalDocs = (await Collection.find()).length;
    const totalPages = Math.ceil( totalDocs / limit);
    let totalResults = 0;
    const keyword = req.query.keyword;
    let keywordOpt = {$text: {$search: keyword}}
    let hasNextPage = false;
    let hasPrevPage = false;
    try {
        if(keyword){
            keywordOpt = {$text: {$search: keyword}};
        }
        else{
            keywordOpt = {};
        }
        const orders = await Collection
        .find(keywordOpt)
        .sort({createdAt: -1})
        .limit(limit)
        .skip(page * limit - limit);
    page >= totalPages ? hasNextPage = false : hasNextPage = true;
    page <= 1 ? hasPrevPage = false : hasPrevPage = true;
    const docs = {
        docs: orders,
        limit: limit,
        page: page,
        totalDocs: totalDocs,
        totalResults: totalResults,
        totalPages: totalPages,
        hasNextPage: hasNextPage,
        hasPrevPage: hasPrevPage,
    }
        res.status(200).json(docs);
    }
    catch (err) {
        res.status(404).send('Can not Get');
        }
};

exports.deleteOrder = async (req, res) => {
    try {
        const order = await Collection.findById(req.params.id);
        if (!Collection) {
            res.status(404).json({ msg: 'invalid order' });
        };
        await Collection.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Order Deleted' });
    }
    catch (err) {
        res.status(404).send('Error Delete');
    }
}

exports.getPrices = async (req, res) => {
    try {
        const prices = await pricesCollection.find();
        res.status(200).json(prices[0]);
    }
    catch (err) {
        res.status(404).json({ msg: 'getPrices Error' });
    }
};

exports.putPrices = async (req, res) => {
    try{
        const updatePack = req.body;
        const prices = await pricesCollection.findOneAndUpdate({}, updatePack, {new: true});
        res.status(200).json(prices)
    }

    catch (err) {
        res.status(404).json({ msg: 'can not update price' })
    }
    
}

exports.putDebtors = async (req, res) => {

    try{
        const debtor = new debtorsCollection(req.body)
        await debtor.save()
        res.status(200).send(debtor)
    }
    catch(err){
        res.status(404).json({msg: 'error'})
    }

}

exports.getDebtors = async (req, res) => {

    try{
        const debtors = await debtorsCollection.find();
        res.status(200).send(debtors)
    }
    catch(err){
        res.status(404).json({msg: 'error'})
    }

}