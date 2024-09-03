import React from 'react'
import Scripted from '../../Images/Scripted.png'

const Footer:React.FC = () => {
  return (
    <div className='footerbg'>
      <div className='flex justify-between px-20 py-20'>
        <div>
        <img src={Scripted} alt="SCPTD" className='w-40 h-auto' />
        </div>
        <div className='flex gap-20'>
            <div className='list-none'>
                <h1 className='font-monserrat text-xl font-semibold'>QUICK LINKS</h1>
                <li className='font-extralight text-center cursor-pointer hover:text-gray-500'>Home</li>
                <li className='font-extralight text-center cursor-pointer hover:text-gray-500'>Blog</li>
                <li className='font-extralight text-center cursor-pointer hover:text-gray-500'>About</li>
                <li className='font-extralight text-center cursor-pointer hover:text-gray-500'>Portfolio</li>
            </div>
            <div className='list-none'>
                <h1 className='font-monserrat text-xl font-semibold'>ABOUT</h1>
                <li className='font-extralight text-center cursor-pointer hover:text-gray-500'>Instagram</li>
                <li className='font-extralight text-center cursor-pointer hover:text-gray-500'>Facebook</li>
                <li className='font-extralight text-center cursor-pointer hover:text-gray-500'>Twitter</li>
                <li className='font-extralight text-center cursor-pointer hover:text-gray-500'>Linked In</li>
            </div>
        </div>
      </div>
      <div className='flex justify-between px-20 pt-10 pb-5 border-t border-black mx-10'>
        <div>
        <p>© 2024 Scripted. All rights reserved</p>
        </div>
        <div>
            Socials
        </div>
      </div>
    </div>
  )
}

export default Footer
