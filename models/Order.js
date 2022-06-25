const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    clientData: {
        type: Object,
        required: true,
          profile: {
    something: String,
    somethingElse: String
  }
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

module.exports = mongoose.model('Orders', OrderSchema);