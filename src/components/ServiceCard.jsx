import React from 'react'
import LearnMore from './LearnMore'

function ServiceCard({textOne, textTwo, image, variant}) {

    if(variant == "white"){
        return (
            <div className='flex justify-between py-10 pl-12 w-[650px] border-black border-4 border-b-10 rounded-3xl'>
                <div className='flex flex-col justify-between h-48'>
                    <div className='flex flex-col'>
                        <div className='text-4xl px-1 bg-neon-green rounded-lg'>{textOne}</div>
                        <div className='text-4xl px-1 bg-neon-green rounded-lg w-[225px]'>{textTwo}</div>
                    </div>
                    <LearnMore variant={'green'}/>
                </div>
                <div className='w-72 py-6'>
                    <img src={image}/>
                </div>
            </div>
          )
    }
    return (
        <div className='flex justify-between bg-black py-10 pl-12 w-[650px] border-black border-4 border-b-10 rounded-3xl'>
            <div className='flex flex-col justify-between h-48'>
                <div className='flex flex-col'>
                    <div className='text-4xl px-1 bg-white rounded-lg'>{textOne}</div>
                    <div className='text-4xl px-1 bg-white rounded-lg w-[225px]'>{textTwo}</div>
                </div>
                <LearnMore />
            </div>
            <div className='w-72 py-6'>
                <img src={image}/>
            </div>
        </div>
        )
}


export default ServiceCard