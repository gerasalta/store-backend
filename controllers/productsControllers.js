const Product = require("../models/products");

exports.getProducts = async (req, res) => {
    try {
        const data = await Product.find()
        res.status(200).send(data)
    }
    catch (err) {
        res.status(404).json({msg: err})
    }
}

exports.postProduct = async (req, res) => {
    try{
        let products = new Product(req.body)
        await products.save()
        res.status(200).json({msg: "product created successfully"})
    }
    catch(err){
        res.status(404).json({msg:"something is wrong here"})
    }
}
