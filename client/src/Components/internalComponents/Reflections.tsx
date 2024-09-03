import React from 'react'
import Scripted from '../../Images/Scripted.png'
import Img1 from '../../Images/Rectangle 1.png'
import Img2 from '../../Images/Rectangle 2.png'
import Img3 from '../../Images/Rectangle 3.png'
import Img4 from '../../Images/Rectangle 4.png'

const Reflections:React.FC = () => {
  return (
    <div>
      <div className='px-4'>
      <div className='flex justify-center'><img src={Scripted} alt="" className='w-20 h-auto' /></div>
        <div className=''>
            <h1 className='text-5xl text-center font-monserrat'>Reflections</h1>
            <p className='text-center font-monserrat mt-5 font-extralight'>Explore my review and exploration of other amazing writers and their experiences</p>
        </div>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 mt-10 gap-2'>
        <div className=''>
            <img src={Img1} alt="" className='w-full h-full object-cover' />
        </div>
        <div>
        <img src={Img2} alt="" className='w-full h-full object-cover'  />
        </div>
        <div>
        <img src={Img3} alt="" className='w-full h-full object-cover'  />
        </div>
        <div>
        <img src={Img4} alt="" className='w-full h-full object-cover'  />
        </div>
      </div>
    </div>
  )
}

export default Reflections
