import React from 'react';
import Socials from '../internalComponents/Socials'

const GetInTouch: React.FC = () => {
  return (
    <div className="px-10 py-32 max-w-4xl mx-auto font-monserrat">
      <h1 className="text-3xl font-bold mb-6 ">Get in Touch</h1>
      <div className='border-b border-black w-52 mb-10'></div>
      <p className="text-lg leading-relaxed mb-4">
        If you're a publisher, game developer, tech company, or PR professional interested in exploring collaboration opportunities or discussing how we can promote your work through our blog and social media channels, we would be delighted to connect with you.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Please reach out to us via email to discuss potential partnerships or to explore how we can work together to share our enthusiasm for fiction fantasy literature, gaming, and technology with our audience.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        <span className='font-bold'>email:</span> <a href="mailto:bigyanadk07@gmail.com" className="text-blue-600 hover:underline">bigyanadk07@gmail.com</a>
      </p>
      <Socials/>
      <p className="text-lg leading-relaxed">
        <span className='font-bold'>Please note</span>: We do not promote physical products or accept guest posts on our site.
      </p>
    </div>
  );
};

export default GetInTouch;
