import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const Ourpresence = () => {
  return (
    <div>
       <div className='imgHead ml-28 mt-10'>
      <h1 className='font-extrabold text-2xl'>Some Glimpse of Healthwire pharmacy
      </h1>
      <p className='mt-5  text-gray-600 text-[18px]'>Support to help your franchise get visibility and growth doesn't end with just helping you set-up. there's more...</p>
      <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/>Fastest Growing Pharmacy Chain</p>
      <p className='mt-5  text-gray-600 text-[18px]'><FontAwesomeIcon icon={faCheck} style={{color: "green", marginRight:15}}/> Currently Operational At 26+ Locations
      </p>

      </div>
      <div className='images  ml-24 mt-7 w-[85%] justify-items-center pt-8 grid gap-2 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4' >
        <img className='w-60 ' src=' Multan-franchises.webp'/>
        <img className='w-60' src=' Lahore-franchises.webp'/>
        <img className='w-60' src=' Gujrat-franchises.webp'/>
        <img className='w-60' src=' Islamabad-franchises.webp'/>


      </div>
                  
       <div className='images ml-24  mt-7 w-[85%] justify-items-center pt-8 grid gap-2 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4' >
        <img className='w-60 ' src=' Layyah-franchises.webp'/>
        <img className='w-60' src=' Lodhran-franchises.webp'/>
        <img className='w-60' src=' DI Khan-franchises.webp'/>
        <img className='w-60' src=' Dunyapur-franchises.webp'/>


      </div> 

      <div className=' mb-10 images ml-24  mt-7 w-[85%] justify-items-center pt-8 grid gap-2 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4' >
        <img className='w-60 ' src=' Bahawalpur-franchises.webp'/>
        <img className='w-60' src=' Nankana sahib-franchises.webp'/>
        <img className='w-60' src=' Sarrgodha-franchises.webp'/>


      </div>
    </div>
  )
}

export default Ourpresence
