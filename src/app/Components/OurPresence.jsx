import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const OurPresence = () => {
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
      <div className='images flex justify-center gap-7 mt-6' >
        <img className='w-60 ' src=' Multan-frachises.webp'/>
        <img className='w-60' src=' Lahore-frachises.webp'/>
        <img className='w-60' src=' Gujrat-frachises.webp'/>
        <img className='w-60' src=' Islamabad-frachises.webp'/>


      </div>

      <div className='images flex justify-center gap-7 mt-6' >
        <img className='w-60 ' src=' Layyah-frachises.webp'/>
        <img className='w-60' src=' Lodhran-frachises.webp'/>
        <img className='w-60' src=' DI Khan-frachises.webp'/>
        <img className='w-60' src=' Dunyapur-frachises.webp'/>


      </div>

      <div className=' mb-10 images flex justify-center gap-7 mt-6' >
        <img className='w-60 ' src=' Bahawalpur-frachises.webp'/>
        <img className='w-60' src=' Nankana sahib-frachises.webp'/>
        <img className='w-60' src=' Sarrgodha-frachises.webp'/>


      </div>
    </div>
  )
}

export default OurPresence