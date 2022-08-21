const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const ProductsSchema = mongoose.Schema({
    title: { 
        type: String,
        required: [true, 'Campo obligatorio'],
        minLength: [3, 'El titulo es muy corto']
     },
    description: { 
        type: String,
        required: [false],
        default: 'Descripción no disponible'
    },
    image: {
        type: String,
        required: false,
    },
    stock: {
        type: Number,
        required: true
    }
},
    {
        versionKey: false,
        timestamps: true
    }
);

ProductsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('products', ProductsSchema);