import React from 'react';
import axios from "axios"
import OrderComp from '../Components/orderComp';
import {DryCleaningPriceList} from '../Utilities/priceList';
import { useState,useEffect } from 'react';
import { useUserAuth } from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

function DryCleaning() {
  const navigate = useNavigate()
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const {user} = useUserAuth();
  const [customer,setCustomer] = useState({})
  console.log(customer)
  const findUser=()=>{
    console.log(customer)
    fetch('http://localhost:8080/customers')
    .then(res =>  res.json())
    .then((data )=> {
      const customer = data.find(c=>c.email === user.email);
      if(!customer){
        alert("please sign in to continue")
        navigate('/SignIn')
      }
      setCustomer(customer)
      console.log(customer._id)
      try {
        axios.post(`http://localhost:8080/customers/${customer._id}/addOrder`,{
        typeOfOrder: "Dry Cleaning",
        numberOfClothes: numberOfItems,
        price: totalPrice
        })
        console.log('found?');
      } catch (error) {
        console.log(error)
      }
    })   
  }
  

  const sumQty=() => {
    let sumItem = 0
    DryCleaningPriceList.forEach(item=> sumItem += parseInt(item.qty));
    setNumberOfItems(sumItem)  
  }

  const sumPrice=() => {
    let sumItem = 0
    DryCleaningPriceList.forEach(item=> sumItem += (parseInt(item.qty) * item.price ));
    setTotalPrice(sumItem)  
  }
  const handleOrder =()=>{
    findUser()
  }


  return (
    <div className='min-h-screen p-4 flex flex-col items-center'>
      <h1 className='text-xl lg:text-2xl font-bold'>Dry Cleaning</h1>
      <h2 className='mt-2'>Choose the categories of the clothes you have for laundry and their quantities, we'll give you an estimate right before you place your Order</h2>
      <div className='flex flex-col justify-around items-center mt-2 px-4 w-screen'>
          <div className="left bg-[#54d2d2] w-full lg:w-2/5 p-2">
            <p className='font-semibold'>categories</p>
            {
              DryCleaningPriceList.map((cat)=>{
                return <OrderComp key={cat.name} sumQty={sumQty} sumPrice={sumPrice} id={cat.id} {...cat}/>
              })
            }
          </div>
          <div className=" bg-[#54d2d2] items-center flex w-full lg:w-2/5 mt-4 h-28 px-2">
            <div className='flex flex-col w-full'> 
              <span className='flex justify-around w-full px-3'>
                <p  className='font-semibold'>Number of items:</p>
                <p  className='font-semibold ml-5'>{numberOfItems}</p>
              </span> 
              <span className='flex justify-around w-full'>
                <p className='font-semibold'>Total Price:</p>
                <p className='font-semibold'>N{totalPrice}</p>
              </span> 
            </div>
          </div>
          <button className='bg-[#54d2d2] mt-2 p-2 text-white font-semibol' onClick={handleOrder} >Place Order</button>
      </div>
    </div>
  )
}
export default DryCleaning
