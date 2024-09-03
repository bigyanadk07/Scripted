import React from 'react'
import Post from '../Components/internalComponents/Post'
import RecentPost from './internalComponents/RecentPost'
import Footer from './internalComponents/Footer'
import Navbar from './internalComponents/Navbar'




const Blog:React.FC = () => {
  return (
    <div >
      <Navbar/>
<div className='font-monserrat'>

      <div className='h-screen bg-parallax-blog bg-fixed bg-cover bg-center'>
      <div className='abs-text'>
          <h1 className='text-white text-6xl font-monserrat text-left'>Blogs</h1>
          <p className='text-white font-monserrat text-center text-xl font-extralight'>the unheard voices scripted</p>
        </div>
      </div>
        <div>
            <div>
            <p className='text-center font-monserrat text-lg pt-10'> Issue 1</p>
            <h1 className='text-4xl text-center font-monserrat'>Takeoff</h1>
                <Post/>
            </div>
        </div>

      <div className='mb-20'>
      <h1 className='text-center text-5xl mb-10'>Recent Posts</h1>
        <div className='flex'>
        <RecentPost/>
        </div>

    </div>
    <Footer />
</div>
    </div>
  )
}

export default Blog
