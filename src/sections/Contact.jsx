import React from 'react'
import Button from '../components/Button'

function Contact() {
  return (
    <div className='bg-light-gray flex justify-between h-80 mt-36 rounded-3xl px-20 py-16 tracking-wider'>
        <div>
            <div className='text-3xl font-semibold'>Let's make things happen</div>
            <div className='text-lg w-[35vw] mt-4 my-6'>
                Contact us today to learn more about how our digital
                marketing services can help your business grow and
                succeed online.
            </div>
            <Button
                variant={"bg-black"}
                text={"Get your free proposal"}
            />
        </div>
        <div>
            <img className='-translate-y-28' src='https://digital-agency02.nexusforge.dev/services/Illustration.svg'/>
        </div>
    </div>
  )
}

export default Contact