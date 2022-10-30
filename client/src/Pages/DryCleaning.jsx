import React from 'react';
import axios from "axios"
import OrderComp from '../Components/orderComp';
import {DryCleaningPriceList} from '../Utilities/priceList';
import { useState,useEffect } from 'react';
import { useUserAuth } from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { useLaundryContext } from "../contexts/laundryContexts";

function DryCleaning() {
  const navigate = useNavigate()
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const {user} = useUserAuth();
  const {handleShow} = useLaundryContext()
  const [customer,setCustomer] = useState({})

  const findUser=()=>{
    fetch('http://localhost:8080/customers')
    .then(res =>  res.json())
    .then((data )=> {
      const customer = data.find(c=>c.email === user.email);
      if(!customer){
        handleShow('Please Login To Continue',"red")
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
    if (numberOfItems < 1) {
      handleShow('You have not selected any item',"red");
      return
    }
    findUser()
    handleShow('Order placed succesfully',"green");
    setTimeout(() => {
      window.location.reload()
    }, 2000);
  }


  return (
    <div className='min-h-screen p-4 flex flex-col items-center'>
      <h1 className='text-xl lg:text-2xl font-bold'>Dry Cleaning</h1>
      <h2 className='mt-2'>Choose the categories of the clothes you have for laundry and their quantities, we'll give you an estimate right before you place your Order</h2>
      <div className='flex flex-col items-center md:flex md:flex-row md:items-start justify-around w-full mt-8'>
          <div className=" bg-white w-full lg:w-2/5 text-[#41acac] flex flex-col border-[0.5px] border-solid border-[#bbb9b9] shadow-2xl">
            <p className='font-semibold self-center'>categories</p>
            {
              DryCleaningPriceList.map((cat)=>{
                return <OrderComp key={cat.name} List={DryCleaningPriceList} sumQty={sumQty} sumPrice={sumPrice} id={cat.id} {...cat}/>
              })
            }
          </div>
          <div className=" bg-white w-full lg:w-2/5 flex flex-col border-[0.5px] border-solid border-[#bbb9b9] shadow-xl h-[250px] items-center justify-around">
              <div className='flex flex-col w-full'> 
                <span className='flex justify-between w-full px-4'>
                    <p className='font-semibold'>Category</p>
                    <p className='font-semibold'>Number Of Items</p>
                  </span> 
                  <span className='flex justify-between w-full px-4'>
                    <p  className='font-semibold'>Total Number of items:</p>
                    <p  className='font-semibold ml-5'>{numberOfItems}</p>
                  </span>
                  <span className='flex justify-between w-full px-4'>
                    <p className='font-semibold'>Total Price:</p>
                    <p className='font-semibold'>N{totalPrice}</p>
                  </span>
              </div>
             <button className='bg-[#54d2d2] py-2 px-4 rounded-xl' onClick={handleOrder}>{order}</button>
          </div>
      </div>
    </div>
  )
}
export default DryCleaning
