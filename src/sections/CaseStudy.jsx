import React from 'react'
import LearnMoreNeon from '../components/LearnMoreNeon'

function CaseStudy() {
  return (
    <div className='mt-36 mb-20'>
        <div className='flex items-start space-x-10'>
            <div className='text-4xl px-1 bg-neon-green rounded-lg font-semibold tracking-wide'>
                Case study
            </div>
            <div className='w-[45vw] text-xl'>
                Explore Real-Life Examples of Our Proven Digital Marketing Success
                through Our Case Studies
            </div>
        </div>
        <div className='grid grid-cols-3 bg-black rounded-3xl mt-16 px-16 py-16 tracking-wider text-white'>
            <div className='border-r-2 col-span-1 space-y-10 pr-20'>
                <div>
                    For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                </div>
                <LearnMoreNeon/>
            </div>
            <div className='border-r-2 pl-14 pr-14 col-span-1 space-y-10'>
                <div>
                    For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
                </div>
                <LearnMoreNeon/>
            </div>
            <div className='space-y-10 pl-14 pr-4 col-span-1'>
                <div>
                    For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
                </div>
                <LearnMoreNeon/>
            </div>
        </div>
    </div>
  )
}

export default CaseStudy