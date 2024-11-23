import React from 'react'
import ServiceCard from '../components/ServiceCard'

function Services() {
  return (
    <div className='flex flex-col pt-28 space-y-20'>
        <div className='flex items-start space-x-10'>
            <div className='text-4xl px-1 bg-neon-green rounded-lg font-semibold tracking-wide'>Services</div>
            <div className='w-[50vw] text-xl'>
                At our digital marketing agency, we offer a range of services to help
                businesses grow and succeed online. These services include:
            </div>
        </div>
        <div className='flex flex-col space-y-20'>
            <div className='flex justify-between'>
                <ServiceCard
                    variant={"white"}
                    textOne={"Search engine"}
                    textTwo={"Optimization"}
                    image={"https://digital-agency02.nexusforge.dev/services/05.svg"}
                />
                <ServiceCard
                    textOne={"Pay per click"}
                    textTwo={"advertising"}
                    image={"https://digital-agency02.nexusforge.dev/services/01.svg"}
                />
            </div>
            <div className='flex justify-between'>
                <ServiceCard
                    textOne={"Social media"}
                    textTwo={"marketing"}
                    image={"https://digital-agency02.nexusforge.dev/services/02.svg"}
                />
                <ServiceCard
                    variant={"white"}
                    textOne={"E-mail"}
                    textTwo={"marketing"}
                    image={"https://digital-agency02.nexusforge.dev/services/06.svg"}
                />
            </div>
        </div>
    </div>
  )
}

export default Services