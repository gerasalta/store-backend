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
    position:{
        type: String,
        index: true
    }
},
    {
        versionKey: false,
    }
);

var fieldGorup = mongoose.model('Orders', OrderSchema);
module.exports = fieldGorup;