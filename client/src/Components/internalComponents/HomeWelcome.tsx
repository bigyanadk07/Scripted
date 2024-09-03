import React from 'react';
import Bghomewelcome from '../../Images/office.png';
import Scripted from '../../Images/Scripted.png'
import Endsection from '../../Images/EndSvg.svg'

const HomeWelcome: React.FC = () => {
  return (
<div>
<div className='flex justify-center my-20'>
<div className='grid grid-cols-2 gap-10'>
      <div className=''>
        <img src={Bghomewelcome} alt="" />
      </div>
  <div className='my-5'>
      <div className='flex justify-center'>
        <img src={Scripted} alt="" className='w-24 h-auto' />
      </div>
      <div>
          <h1 className='font-monserrat text-5xl text-left'>Welcome to <br /> Scripted</h1>
          <p className='font-monserrat py-5 text-left'>Scripted is a resource to help you learn about <br /> marvellous literature and stay connected to <br /> tech on the go.
          <br /> <br />   - Niphio
          </p>
      </div>
  </div>
</div>
</div>

    <div className='flex justify-center my-10'>
    <img src={Endsection} alt="" className='' />
    </div>
</div>
  );
}

export default HomeWelcome;
