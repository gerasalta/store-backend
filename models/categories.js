const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


const CategoriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
},
    {
        versionKey: false,
        timestamps: true
    }
);

CategoriesSchema.plugin(uniqueValidator, { message: 'Nombre en uso, intente uno diferente' });
module.exports = mongoose.model('categories', CategoriesSchema);