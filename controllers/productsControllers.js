const Product = require("../models/products");
const paginate = require('mongoose-paginate-v2');

exports.postProduct = async (req, res) => {
    try{
        let product = new Product(req.body)
        await product.save()
        res.status(200).json({msg: "product created successfully"})
    }
    catch(err){
        res.status(404).json({msg:"sorry, cant create this item", error: err})
    }
}

exports.getProducts = async (req, res) => {
    try {
        const data = await Product.paginate()
        res.status(200).send(data) 
    }
    catch (err) {
        res.status(404).json({msg: "sorry, cant get these products", err: err})
    }
}

exports.deleteProducts = async (req, res) => {
    try{
        id = req.query.id
        await Product.findByIdAndDelete(id)
        res.status(200).json({msg: "product removed successfully"})
    }
    catch(err){
        res.status(404).json({msg: "sorry, cant remove this item", err: err})
    }
}

exports.putProducts = async (req, res) => {
    try{
        id = req.body._id
        patch = req.body
        await Product.findByIdAndUpdate(id, patch)
        res.status(200).json({msg: "product updated successfully"})
    }
    catch(err){
        res.status(404).json({msg: "sorry, cant update this item", err: err})
    }
}