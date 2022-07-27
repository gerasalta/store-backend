const mongoose = require('mongoose');

const DebtorSchema = mongoose.Schema({
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
    }
},
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('debtor', DebtorSchema);