import React from 'react';
import Controller from '../../Images/controller.jpg';
import Blockchain from '../../Images/blockchain.jpg';
import Nightsky from '../../Images/night.jpg';
import Scripted from '../../Images/Scripted.png'
import Endsection from '../../Images/EndSvg.svg'

const HomeCatalog1: React.FC = () => {
  return (
<div className='p-4'>
  <div>
    <div className='flex justify-center'><img src={Scripted} alt="" className='w-20 h-auto' /></div>
    <h1 className='text-center text-4xl font-monserrat mb-10'>Recent Additions</h1>
  </div>
<div className='flex mx-20 justify-center'>
      <div className='grid grid-cols-3 gap-4'>
        <div className='w-96 h-96 border border-black'>
          <img src={Nightsky} alt="Literature" className='w-full h-full object-cover' />
        </div>
        <div className='w-96 h-96 border border-black'>
          <img src={Blockchain} alt="Technology" className='w-full h-full object-cover' />
        </div>
        <div className='w-96 h-96 border border-black'>
          <img src={Controller} alt="Gaming" className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
    <div className='flex justify-center my-10'>
      <img src={Endsection} alt="" className='' />
    </div>
</div>
  );
}

export default HomeCatalog1;
