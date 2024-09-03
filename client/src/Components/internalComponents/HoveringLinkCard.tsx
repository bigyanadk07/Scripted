import React from 'react';
import Hoveringcard from '../../Images/Hovering Card.png';

const HoveringLinkCard: React.FC = () => {
  return (
    <div className='flex relative mt-20 max-w-screen'>
      <img src={Hoveringcard} alt="Hovering Card" className='w-full image-h500 ' />
      <div className='absolute top-1/4 left-32 text-white p-4 font-monserrat'>
        <p className='font-thin text-xl mb-7 '>Literature</p>
        <p className='font-thin text-xl mb-7 '>Technology</p>
        <p className='font-thin text-xl mb-7 '>Gaming</p>
        <p className='font-thin text-xl mb-7 '>Hiking</p>
        <p className='font-thin text-xl mb-7 '>Food</p>
      </div>
    </div>
  );
}

export default HoveringLinkCard;
