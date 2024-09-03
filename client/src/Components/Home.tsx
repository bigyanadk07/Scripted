import React from 'react';
import HomeWelcome from './internalComponents/HomeWelcome';
import HomeCatalog1 from './internalComponents/HomeCatalog1';
import Reflections from './internalComponents/Reflections';
import HoveringLinkCard from './internalComponents/HoveringLinkCard';
import Whereto from './internalComponents/Whereto';
import Footer from './internalComponents/Footer'
import Navbar from './internalComponents/Navbar';

const Home: React.FC = () => {
  return (
    <div className=''>
              <Navbar/>
      <div className='h-screen bg-parallax-home bg-fixed bg-cover bg-center'>

        <div className='abs-class'>
          <h1 className='text-white text-6xl font-monserrat text-center'>Whatever We Imagine</h1>
          <p className='text-white font-monserrat text-center text-xl font-extralight'>the persuit of adventure</p>

        </div>
        </div>
      <div className=''>
        <div>
          <HomeWelcome/>
          <HomeCatalog1/>
          <Reflections/>
          <HoveringLinkCard/>
          <Whereto/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Home;
