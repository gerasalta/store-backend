const { json } = require('express');
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')

//Server

const app = express();

// Connect to DB

connectDB();

app.use(cors())
app.use(express.json());
app.use('/api/orders', require('./routes/orders'));

//Princial Route

app.set('port', process.env.PORT || 4000 )
app.get('/', (req, res)=>{
    res.send('Hola Mundo')
});

app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
})