const mongoose = require('mongoose');

const index = 1;

const OrderSchema = mongoose.Schema({
    clientData: {
        type: Object,
        required: true
    },
    orderData: {
        type: Object,
        required: true
    },
    balanceData: {
        type: Object,
        required: true
    },
    creationDate: {
        type: Date,
        default: new Date().toJSON().slice(0,10).replace(/-/g,'/')
    }
})

module.exports = mongoose.model('Producto', OrderSchema)