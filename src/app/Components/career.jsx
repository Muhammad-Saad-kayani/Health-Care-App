import React from 'react'

function Career() {
  return (
  <>
 <section className='containers py-0 bg-white'>
  <div className="navsec w-full flex items-center justify-between flex-wrap  gap-2">
    <div className="w-full text-center text-[#3d6093] font-sans text-sm font-semibold">CAREERS</div>
    <div className="w-full text-center text-2xl font-bold font-sans">Life At Healthwire</div>
    
    {/* Image with fixed position */}
    <div className= "w-full flex items-center justify-center relative ">
      <img 
        src="./career.webp" 
        alt="Career Image"
        className="fixed  top-36 z-[-50] right-100 w-[60%]  h-auto"
      />
    </div>
  </div>
</section>
<section className='containers '>
    <div className="navsec img w-full flex items-center justify-between flex-wrap gap-2 ">
  
    </div>
</section>
<section className='containers bg-white py-2'>
<div className="navsec w-full flex items-center justify-center flex-wrap gap-2">
  <div className="w-full text-center  text-[#3d6093] font-sans text-sm font-semibold">Join us, and help transform healthcare for everyone.</div>
  <div className="mt-2"><button className='px-4 py-2 text-white rounded-lg bg-[#1e4275]'>View Job Openings</button></div>
  </div>  
</section>
  
  </>
  )
}

export default Career
