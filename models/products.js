const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    product: { type: String, require: true },
    description: { type: String, require: false },
    image: {type: String, require: true},
    stock: {type: Number, require: true},
    disponibility:{type: Boolean, require: true}
},
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('products', ProductsSchema);