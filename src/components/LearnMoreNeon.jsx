import React from 'react'
import { LuArrowUpRight } from 'react-icons/lu'

function LearnMoreNeon() {
  return (
    <div className='text-neon-green flex items-center gap-x-2'>
        <div className='text-xl'>Learn more</div>
        <LuArrowUpRight className='text-3xl'/>
    </div>
  )
}

export default LearnMoreNeon