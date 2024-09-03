import React from 'react';
import Food from '../Images/food.png'
import Tech from '../Images/tech.png'
import Literature from '../Images/literature.png'
import Gaming from '../Images/gaming.png'
import Footer from './internalComponents/Footer';
import AboutCards from './internalComponents/AboutCards';
import AboutUs from './internalComponents/AboutUs';
import Getintouch from './internalComponents/Getintouch';
import Navbar from './internalComponents/Navbar';

const About: React.FC = () => {
  return (
    <div>
              <Navbar/>
<div className="h-screen bg-parallax bg-fixed bg-cover bg-center flex items-center">
        <div className='flex justify-start ml-40 mt-40'>
            <h1 className="text-5xl font-monserrat  text-white tracking-widest drop-shadow-lg">About</h1>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <span className="text-white text-lg tracking-widest">Scroll down to discover more</span>

        </div>
      </div>


      {/* Interest Cards Section */}
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
    <h2 className="text-3xl font-semibold font-monserrat border-b-2 border-highlight w-32">Scripted</h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
        <p className="py-10 text-lg font-monserrat text-secondary leading-relaxed">
          <div className="mb-5">I’m Bigyan Adhikari, an enthusiast with a passion for technology, writing fantasy literature, gaming, hiking, and food.</div>
          <div className="mb-5">My journey takes me through the intricate worlds of coding and storytelling, exploring the wonders of both the digital and natural realms. I delve into the latest in tech, uncover hidden gems in fantasy literature, savor the thrill of hiking in breathtaking landscapes, and indulge in culinary adventures.</div>
          <div className="mb-5">My goal is to build a community of like-minded individuals who are curious, adventurous, and eager to explore the fascinating intersections of these diverse interests.</div>
          <div>Together, we'll unlock richer experiences, whether in the world of technology, the pages of a book, or the great outdoors.</div>
        </p>
        </article>
      </div>
    </div>
  </div>
</section>

<div className='px-32 my-10 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
  <AboutCards 
    imgsrc={Literature} 
    title="Literature" 
    description="Diving into fantasy worlds where stories ignite imagination and creativity." 
    defaultText='Scripted'
  />
  <AboutCards 
    imgsrc={Gaming} 
    title="Gaming" 
    description="Discovering the thrill of gaming, from epic quests to casual play." 
    defaultText='Scripted'
  />
  <AboutCards 
    imgsrc={Tech} 
    title="Tech" 
    description="Exploring the latest innovations, tools, and trends in the digital world." 
    defaultText='Scripted'
  />
  <AboutCards 
    imgsrc={Food} 
    title="Food" 
    description="Celebrating flavors, cultures, and the joy of culinary exploration." 
    defaultText='Scripted'
  />
</div>

{/* <span className="flex items-center ">
  <span className="h-px flex-1 bg-black ml-40"></span>
  <span className="shrink-0 px-6"><img src={Logo} alt="" className='w-16 h-auto'/></span>
  <span className="h-px flex-1 bg-black mr-40"></span>
</span> */}


    <AboutUs/>
    <Getintouch/>
      {/* Footer */}
      <Footer />
      </div>
  );
};

export default About;
