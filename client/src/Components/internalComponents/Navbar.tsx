import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/ScriptedWhite.png';       // White logo
import LogoBlack from '../../Images/Scripted.png';

const Navbar: React.FC = () => {
  const [navbarBg, setNavbarBg] = useState<string>('transparent');
  const [logo, setLogo] = useState<string>(Logo);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBg('white');
      setLogo(LogoBlack);  // Change to black logo on scroll
    } else {
      setNavbarBg('transparent');
      setLogo(Logo);  // Change back to white logo when not scrolled
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-10 px-20 transition-colors duration-300 ${navbarBg === 'white' ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'}`}>
      <div className='flex justify-between items-center px-4 py-2'>
        <div>
          <Link to="/"><img src={logo} alt="Logo" className='w-24 h-auto transition-all duration-300' /></Link>
        </div>
        <div className='flex justify-around gap-10'>
          <Link to="/" className='hover:text-gray-500 transition ease-in-out'>Home</Link>
          <Link to="/blog" className='hover:text-gray-500 transition ease-in-out'>Blog</Link>
          <Link to="/about" className='hover:text-gray-500 transition ease-in-out'>About</Link>
          <Link to="/portfolio" className='hover:text-gray-500 transition ease-in-out'>Portfolio</Link>
        </div>
        <div className='w-24 h-auto'>
          <div className='hover:text-gray-500 cursor-pointer transition ease-in-out'>Socials</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
