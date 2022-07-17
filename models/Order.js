const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')

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
    }
},
    {
        versionKey: false,
        timestamps: true
    }
);

OrderSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('orders', OrderSchema);