const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

//Server

const app = express();
app.use(cors());

// Connect to DB

connectDB();

app.use(express.json());
app.use('/api', require('./routes/products'));


//Princial Route

app.set('port', process.env.PORT || 4000 )

app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
})