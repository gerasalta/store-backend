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
    creationDate: {
        type: Date,
        default: Date.now()
    }
},
    {
        versionKey: false,
    }
);

var fieldGorup = mongoose.model('Orders', OrderSchema);
module.exports = fieldGorup;