import React from 'react'
import Image from 'next/image'
import NavForPhar from '../Components/NavForPhar'

const page = () => {
  return (
    <>
    <NavForPhar/>
    <div>
      <div  className='imgSec mt-52'>
        <img className='w-[93%] h-[400px]  m-0, m-auto rounded-lg' src='Banner-Image.webp' alt=''/>
      </div>
      <div className='secText1 ml-28 mt-24'>
        <p className='font-serif,sans text-3xl text-gray-600'>Elevate your business with our</p>
        <h1 className='font-serif,sans text-5xl font-bold text-blue-900'>Pharmacy Franchising Model</h1>
      </div>
      <div className='secText2 ml-28 mt-20 w-[940px] '>
        <h1 className='font-extrabold text-2xl'>Why Healthwire Pharmacy?</h1>
        <p className='mt-8 text-gray-600 text-[18px] '>Healthwire Pharmacy has become the fastest growing pharmacy chain of Pakistan with the launch and opening of 40+ stores in 2023. We are on track to become the largest pharmacy chain in 2024 and will have 1000 stores by 2026. This is your chance to play your part in this healthcare revolution.</p>
        <button className='bg-blue-800 text-white rounded-md w-52 h-16 font-sans,sarif text-[18px] mt-8'>Request Information</button>
      </div>

      
      <div className='secText3 ml-28 mt-20 w-[940px] '>
        <h1 className='font-extrabold text-2xl'>Here’s how you can benefit!</h1>
        <p className='mt-8 text-gray-600 text-[18px] '>A Lot of legwork has already been done for you, all you have to do is become a part of the winning team! Being part of Healthwire growing family, you will experience unprecedented support orbiting around:</p>
         


        <div className=' flex '>
          <div className='secText3.1 block  mt-30 w-[940px]'>
         <p className='mt-8  text-gray-600 text-[18px]'>Access & Target online customers</p>
         <p className='mt-5  text-gray-600 text-[18px]'>Visual Merchandising</p>
         <p className='mt-5  text-gray-600 text-[18px]'>Training & Operation Management</p>
         <p className='mt-5  text-gray-600 text-[18px]'>Inventory management</p>
         <p className='mt-5  text-gray-600 text-[18px]'>Partnership with labs/pharmacies</p>
         <p className='mt-5  text-gray-600 text-[18px]'>Category & Licensing Consultancy</p>
         <p className='mt-5  text-gray-600 text-[18px]'>Location Consultancy</p>
         <p className='mt-5  text-gray-600 text-[18px]'>Staff Training & Development</p>
         <p className='mt-5  text-gray-600 text-[18px]'>Initial Stock Fulfilment</p>
      </div>

      <div className=' secText3.2 block ml-28 mt-30 w-[940px] '>
         <p className='mt-8  text-gray-600 text-[18px]'>Social media marketing & branding activities</p>
         <p className='mt-5  text-gray-600 text-[18px]'>Constant Software support</p>
         <p className='mt-5  text-gray-600 text-[18px]'>Constant Software support </p>
         <p className='mt-5  text-gray-600 text-[18px]'>Retail Management</p>
         <p className='mt-5  text-gray-600 text-[18px]'>Free on spot doctor video consultation</p>
         <p className='mt-5  text-gray-600 text-[18px]'>Free on spot doctor video consultation</p>
         <p className='mt-5  text-gray-600 text-[18px]'>H-Cloud® Software: FREE</p>
         <p className='mt-5  text-gray-600 text-[18px]'>Branding & Visual Merchandising: FREE</p>

      </div>
      </div>
      </div>
      
    </div>
    </>
  )
}

export default page
