const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    typeOfOrder: {
        type: String,
        required: true
    },
    numberOfClothes: {
        type: Number,
        required: true,
    },
    pickUpName: {
        type: String,
        required: true,
    },
    pickUpAdress: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    dateOfOrder:{
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = orderSchema;