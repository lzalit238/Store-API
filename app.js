const express = require('express');
const app = express();
const products = require('./routes/products')
const connectDB = require('./db/product');
const  { connect } = require('./routes/products');
require('dotenv').config()

//middleware
app.use(express.json())
app.use('/api/v1/products', products);
app.use(express.static('public'));

//routes
app.use(express.static('public'))
app.get('/', (req,res)=> {
    res.send("Store-API App")
})

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(3000, console.log('Server is listening on port 3000... '));
    } catch(err) {
        console.log(err)
    }
}
start();