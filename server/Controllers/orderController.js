const express = require('express');
const app = express();
const Orders = require('../Schemas/orderSchema')

const createOrder = async ()=>{
    const order = new Orders({
        typeOfOrder: 'Dry Cleaning',
        numberOfClothes: 20,
        pickUpName: 'Okunade Sherif',
        pickUpAdress: '23, OLAWALE DAWODU STREET',
        phoneNumber:'07064413800',
    })
    try {
        await order.save()
        console.log(order)
          
    } catch (error) {
        console.log('could not save contact',error)
    }
}
createOrder()

module.exports={
    createOrder
}