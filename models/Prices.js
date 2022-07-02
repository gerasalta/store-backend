const mongoose = require('mongoose');

const PricesSchema = mongoose.Schema({
    price: {
        type: Object,
        require: true
    }
}, {
    _id: false
});

module.exports = mongoose.model('price', PricesSchema);