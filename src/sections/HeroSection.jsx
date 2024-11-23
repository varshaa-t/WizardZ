import React from 'react'
import Button from '../components/Button'

function HeroSection() {
  return (
    <div className='flex justify-between tracking-widest pt-20'>
        <div className='flex flex-col'>
            <div className='text-[3.5rem] font-semibold w-[36vw] leading-[1.3]'>
                Navigating the digital landscape for success
            </div>
            <div className='w-[37.9vw] text-xl py-6'>
                Our digital marketing agency helps businesses
                grow and succeed online through a range of
                services including SEO, PPC, social media marketing,
                and content creation.
            </div>
            <div>
                <Button variant={"bg-black"} text={"Book a consultation"}/>
            </div>
        </div>
        <div> 
            <img src={"https://digital-agency02.nexusforge.dev/Hero.svg"}/>
        </div>
    </div>
  )
}

export default HeroSection