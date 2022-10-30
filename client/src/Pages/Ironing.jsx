import React from 'react';
import axios from "axios"
import OrderComp from '../Components/orderComp';
import {ironingPriceList} from '../Utilities/priceList';
import { useState,useEffect } from 'react';

function Ironing() {
  const navigate = useNavigate()
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const {user} = useUserAuth();
  const [customer,setCustomer] = useState({})

  const findUser=()=>{
    fetch('http://localhost:8080/customers')
    .then(res =>  res.json())
    .then((data )=> {
      const customer = data.find(c=>c.email === user.email);
      if(!customer){
        navigate('/SignIn')
      }
      setCustomer(customer)
      console.log(customer._id)
      try {
        axios.post(`http://localhost:8080/customers/${customer._id}/addOrder`,{
        typeOfOrder: "Flat Ironing",
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
    ironingPriceList.forEach(item=> sumItem += parseInt(item.qty));
    setNumberOfItems(sumItem)  
  }

  const sumPrice=() => {
    let sumItem = 0
    ironingPriceList.forEach(item=> sumItem += (parseInt(item.qty) * item.price ));
    setTotalPrice(sumItem);
  }
  const handleOrder =()=>{
    findUser()
  }

  const handleOrder =()=>{
    findUser();
    setOrder('Order Placed')
    setTimeout(() => {
      setOrder('Place Order')
    }, 2000)
  }

  return (
    <div className='min-h-screen p-4 flex flex-col items-center'>

      <h1 className='text-xl lg:text-2xl font-bold'>Flat Ironing</h1>
      <h2 className='mt-2'>Choose the categories of the clothes you have for laundry and their quantities, we'll give you an estimate right before you place your Order</h2>
      <div className='flex flex-col items-center md:flex md:flex-row md:items-start justify-around w-full mt-8'>
          <div className=" bg-white w-full lg:w-2/5 text-[#41acac] flex flex-col border-[0.5px] border-solid border-[#bbb9b9] shadow-2xl">
            <p className='font-semibold self-center'>categories</p>
            {
              ironingPriceList.map((cat)=>{
                return <OrderComp key={cat.name} List={ironingPriceList} sumQty={sumQty} sumPrice={sumPrice} id={cat.id} {...cat}/>
              })
            }
          </div>
          <div className=" bg-white w-full lg:w-2/5 flex flex-col border-[0.5px] border-solid border-[#bbb9b9] shadow-xl h-[150px] items-center justify-around">
              <div className='flex flex-col w-full'> 
                <span className='flex justify-between w-full px-4'>
                  <p  className='font-semibold'>Number of items:</p>
                  <p  className='font-semibold ml-5'>{numberOfItems}</p>
                </span> 
                <span className='flex justify-between w-full px-4'>
                  <p className='font-semibold'>Total Price:</p>
                  <p className='font-semibold'>N{totalPrice}</p>
                </span> 
              </div>
             <button className='bg-[#54d2d2] p-2 rounded-2xl' onClick={handleOrder}>Place Order</button>
          </div>
      </div>
    </div>
  </div>
  )
}
export default Ironing
