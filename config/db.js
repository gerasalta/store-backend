const mongoose = require('mongoose');
require('dotenv').config({path: 'var.env'});

const connectDB = async () => {
    try{
        await mongoose.connect(
            process.env.DB_MONGO, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        mongoose.set('autoIndex', false);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB