const mongoose = require('mongoose');

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
    description: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Producto', OrderSchema)