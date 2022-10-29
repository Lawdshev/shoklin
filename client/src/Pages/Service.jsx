import React from 'react'
import ServiceCard from '../Components/ServiceCard';
import dryCleaningImage from '../Images/DryCleaning.png';
import tailoringImage from '../Images/tailoring.jpg';
import flatIroningImage from '../Images/flatIroning.png';
import clothStorageImage from '../Images/clothStorage.png';

const services =[
    {
        id: 1,
        img: dryCleaningImage,
        name:'Dry Cleaning',
        description: 'High quality garment cleaning and care for an array of garment types and household items' ,
        path : '/DryCleaning' 
    },
    {
        id: 2,
        img: tailoringImage,
        name:'Tailoring & Alterations',
        description: 'Extend your garment investment with professional tailoring and alterations.' ,
        path:'/Tailoring'
    },
    {
        id: 3,
        img: flatIroningImage,
        name:'Flat Ironing',
        description: 'We make your life simpler by undertaking ironing work at the most affordable rate at your convenience.' ,
        path : '/Ironing'
    },
    {
        id: 4,
        img: clothStorageImage,
        name:'Cloth Storage',
        description: 'We provide effective and efficient storage facilities for our VIP customers', 
    },
    
]

function Service() {
  return (
    <div className='p-8 flex flex-col md:flex-row md:justify-around md:flex-wrap'>
       { services.map((service) =>{
        return <ServiceCard key={service.id} {...service}/>
       })}
    </div>
  )
}

export default Service