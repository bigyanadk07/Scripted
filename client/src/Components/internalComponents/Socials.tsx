import React from 'react'
import insta from '../../Images/insta.svg'
import face from '../../Images/facebook.svg'
import x from '../../Images/twitter.svg'


const socials:React.FC = () => {
  return (
    <div>
      <div className='flex justify-start gap-5 mb-5'>
        <div>
            <img src={insta} alt="" className='h-8 w-auto cursor-pointer'/>
        </div>
        <div>
            <img src={face} alt="" className='h-8 w-auto cursor-pointer' />
        </div>
        <div>
            <img src={x} alt="" className='h-8 w-auto cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default socials
