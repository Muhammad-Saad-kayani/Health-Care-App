import React from 'react'

const Franchiseform = () => {
  return (
    <>
    <div className='container w-[90%]  m-0, m-auto '>
    <div className='m-0, m-auto border-2 border-gray-500 rounded-lg w-[85%]  pb-20 '>
     <div className='m-0, m-auto  w-[90%]  mt-10'>  
    <h1 className='font-extrabold text-2xl'>So what are you waiting for?</h1>
    <p className='mt-1 mb-10 text-gray-600 text-[18px] '>Fill this form to register and our team will contact you shortly for further details.</p></div> 
    <div className='m-0, m-auto  border-2 border-gray-500 rounded-lg w-[90%] h-20 px-8  '>
   <label className='block pt-2 pb-2  text-gray-400'  >Name*</label>
   <input className='w-[95%] h-[40%]' type='text' placeholder='YOUR NAME'/>
    </div>

    <div className='m-0, m-auto mt-10 border-2 border-gray-500 rounded-lg w-[90%] h-20 px-8  '>
   <label className='block pt-2 pb-2 text-gray-400'>Phone</label>
   <input className='w-[95%] h-[40%]' type='text' placeholder='03********'/>
    </div>

    <div className='m-0, m-auto mt-10  border-2 border-gray-500 rounded-lg w-[90%] h-20 px-8  '>
   <label className=' pt-5 pb-2  text-gray-400' >City</label>
  

    </div>

    <div className='m-0, m-auto mt-10  border-2 border-gray-500 rounded-lg w-[90%] h-20 px-8  '>
   <label className='block pt-2 pb-2  text-gray-400'>Investment Range</label>
   <input className='w-[95%] h-[40%]' type='text' placeholder='YOUR NAME'/>
    </div>

    
    </div>
    </div>
    
    </>
  )
}

export default Franchiseform
