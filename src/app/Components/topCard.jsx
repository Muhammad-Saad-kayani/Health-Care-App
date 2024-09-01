import { ArrowRight , paraOne , paraTwo , head , col} from 'lucide-react'
import React from 'react'

function Card({heading}) {
  return (
    <div className={`w-[43%] h-[200px] p-8 flex`} style={{ backgroundColor: col }}>
      <div className='w-60'>
      <h3 className='font-bold'>
            {heading} 
        </h3>
        <p className='mt-2'>
            {paraOne}
        </p>
        <p className='mt-8'>
            {paraTwo} <strong>{head}</strong>
        </p>
            <ArrowRight className='mt-16'/>
      </div>

      <div className='w-30'>
        Hello
      </div>
        
    </div>
  )
}

export default Card