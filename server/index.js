const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const createOrder = require('./Models/orderModel')


mongoose.connect('mongodb://localhost/shoklin')
.then(()=> console.log('connected to mongodb'))
.catch(err=> console.error("couldn't connect",err));

const app = express();
app.use(express.json());
app.use(cors())
createOrder()

app.listen(3001,()=> console.log('listening...'));