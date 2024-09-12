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
    </div>
    </>
  )
}

export default page
