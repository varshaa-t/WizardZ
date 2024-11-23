import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";

function LearnMore({variant}) {

    if(variant == "green"){
        return (
            <div className='flex items-center gap-x-2 tracking-wide cursor-pointer'>
                <LuArrowUpRight className='text-neon-green bg-black px-1 text-4xl rounded-full'/>
                <div className='text-xl'>Learn more</div>
            </div>
        )
    }
    return (
        <div className='flex items-center mx-4 gap-x-2 cursor-pointer tracking-wide'>
                <LuArrowUpRight className='text-black bg-white px-1 text-4xl rounded-full'/>
                <div className='text-white text-xl'>Learn more</div>
        </div>
    )
}

export default LearnMore