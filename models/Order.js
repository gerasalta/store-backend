const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')

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

OrderSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Orders', OrderSchema);