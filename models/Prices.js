const mongoose = require('mongoose');

const PricesSchema = mongoose.Schema({
    vinyl: {
        type: Object,
        require: true
    },
    banner: {
        type: Object,
        require: true
    },
    light: {
        type: Object,
        require: true
    },
    polyfan: {
        type: Object,
        require: true
    },
});
module.exports = mongoose.model('price', PricesSchema);