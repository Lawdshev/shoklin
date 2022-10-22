const mongoose = require('mongoose');
const orderSchema = require('../Schemas/orderSchema')


const Orders = mongoose.model('Orders',orderSchema);

// const order = new Orders({
//     typeOfOrder: 'Dry Cleaning',
//     numberOfClothes: 20,
//     pickUpName: 'Okunade Sherif',
//     pickUpAdress: '23, OLAWALE DAWODU STREET',
//     phoneNumber:'07064413800',
// })
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
module.exports = createOrder()