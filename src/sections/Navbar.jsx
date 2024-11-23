import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import Button from '../components/Button';

function Navbar() {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center space-x-3'>
        <PiStarFourFill className='text-4xl'/>
        <div className='font-space-grotesk-bold text-3xl'>WizardZ</div>
      </div>
      <ul className='flex space-x-12 text-lg font-semibold tracking-widest'>
        <li className='hover:cursor-pointer'>About us</li>
        <li className='hover:cursor-pointer'>Services</li>
        <li className='hover:cursor-pointer'>Use Cases</li>
        <li className='hover:cursor-pointer'>Pricing</li>
        <li className='hover:cursor-pointer'>Blog</li>
      </ul>
      <div>
        <Button text={"Request a quote"}/>
      </div>
    </div>
  )
}

export default Navbar