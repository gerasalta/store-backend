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
})

module.exports = mongoose.model('Producto', OrderSchema)