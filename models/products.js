const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CategorySchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        _id: {
            type: String,
            required: true
        }
})

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
        required: true
    },
    price: {    
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    category:{
        type: CategorySchema,
        required: true,
    }
},
    {
        versionKey: false,
        timestamps: true,
    }
);

ProductsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('products', ProductsSchema);