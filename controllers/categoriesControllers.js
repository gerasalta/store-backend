const Categories = require("../models/categories");
const Products = require("../models/products");

exports.postCategories = async (req, res) => {
    try{
        let category = new Categories(req.body)
        await category.save()
        res.status(200).json({msg: "category created successfully"})
    }
    catch(err){
        res.status(404).send(err)
    }
}

exports.getCategories = async (req, res) => {
    try {
        const data = await Categories.find()
        res.status(200).send(data) 
    }
    catch (err) {
        res.status(404).send(err)
    }
}

exports.deleteCategories = async (req, res) => {
    try{
        let id = req.query.id
        await Products.deleteMany({'category._id': id})
        await Categories.findByIdAndDelete(id)
        res.status(200).json({msg: 'Category Deleted Successfully'})
    }
    catch(err){
        res.status(404).send(err)
    }
}

exports.putCategories = async (req, res) => {
    try{
        id = req.body._id
        patch = req.body
        await Categories.findByIdAndUpdate(id, patch)
        res.status(200).json({msg:"category updated successfully"})
    }
    catch(err){
        err.reason = "wrong id"
        res.status(404).send(err)
    }
}