import React from 'react'
import SimpleAboutCards from './SimpleAboutCard'
import Img1 from '../../Images/playing1.jpg'
import Img2 from '../../Images/writing1.jpg'
import Getintouch from './Getintouch'

const AboutUs:React.FC = () => {
  return (
    <div className='font-monserrat creambg py-10'>
    <div className="px-10 py-8 max-w-4xl mx-auto">
    <h2 className="text-2xl font-semibold font-monserrat border-b-2 border-black w-20">about</h2>
    </div>
        <div className='px-10 py-8 pb-16 max-w-4xl mx-auto'>
            <p className='text-lg leading-relaxed mb-4'>
                At Scripted, we are passionate about discovering and sharing the latest in technology, gaming, and culinary delights. Our journey is driven by a love for exploring new tech innovations, diving into exciting new games, and savoring diverse cuisines from around the world.
            </p>
            <p className='text-lg leading-relaxed mb-4'>
                We stay at the cutting edge of technology, constantly exploring the newest gadgets and software that shape our digital landscape. Gaming is at the heart of our adventure—whether delving into the latest releases or enjoying timeless classics. In our downtime, we dive into fantasy and fiction writing, crafting worlds and stories that inspire and captivate.
            </p>
            <p className='text-lg leading-relaxed mb-4'>
                Our culinary adventures take us to various cultures, where we experience and review different foods, offering insights into unique flavors and dining experiences. Through our content, we aim to share our enthusiasm for tech, gaming, writing, and food, providing you with the inspiration and information to enhance your own passions.
            </p>
            <p className='text-lg leading-relaxed'>
                Join us as we explore the exciting intersections of technology, gaming, storytelling, and gastronomy. Let’s discover and enjoy these interests together!
            </p>
        </div>
        <div className='flex gap-10 px-20 mb-10 justify-center'>
            <SimpleAboutCards imgsrc={Img1}/>
            <SimpleAboutCards imgsrc={Img2}/>
        </div>

    </div>
  )
}

export default AboutUs
