import React from 'react'
import Image from 'next/image';
import NavForPhar from '../Components/NavForPhar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import OurPresence from '../Components/OurPresence';
import Footer from '../Components/Footer';


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
         <p  className='mt-8  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/> Access & Target online customers</p>
         <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/> Visual Merchandising</p>
         <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}} />Training & Operation Management</p>
         <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}} /> Inventory management</p>
         <p className='mt-5  text-gray-600 text-[18px]'> <FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/>Partnership with labs/pharmacies</p>
         <p className='mt-5  text-gray-600 text-[18px]'> <FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/>Category & Licensing Consultancy</p>
         <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/>Location Consultancy</p>
         <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/>Staff Training & Development</p>
         <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/>Initial Stock Fulfilment</p>
      </div>

      <div className=' secText3.2 block ml-28 mt-30 w-[940px] '>
         <p className='mt-8  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/>Social media marketing & branding activities</p>
         <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/>Constant Software support</p>
         <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/>Constant Software support </p>
         <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/>Retail Management</p>
         <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/>Free on spot doctor video consultation</p>
         <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/>Free on spot doctor video consultation</p>
         <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/>H-Cloud® Software: FREE</p>
         <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/>Branding & Visual Merchandising: FREE</p>

      </div>
      </div>
      </div>
      
      <div className='imgHead ml-28 mt-10'>
      <h1 className='font-extrabold text-2xl'>Some Glimpse of Healthwire pharmacy
      </h1></div>
      <div className='imgsec flex ml-28 gap-6 mt-8 '>
       
        <img className='w-[50%] h-[300px]   rounded-lg ' src='franchiseImg1.webp' alt=''/>
        <img className='w-[30%] h-[300px]   rounded-lg' src='franchiseImg2.webp' alt=''/>

      </div>

      <div className='imgsec2 flex ml-28 gap-6 mt-8 '>
       
       <img className='w-[30%] h-[300px]   rounded-lg ' src='franchiseImg3.webp' alt=''/>
       <img className='w-[50%] h-[300px]   rounded-lg' src='franchiseImg4.webp' alt=''/>

     </div>
      
    </div>
    <OurPresence/>
    <Footer/>
    
    </>
  )
}

export default page
