import React from 'react';
import Blog1 from '../../Images/blog-1.jpg'
import Blog2 from '../../Images/blog-2.jpg'
import Blog3 from '../../Images/blog-3.jpg'
import Blog4 from '../../Images/blog-4.jpg'


const Post: React.FC = () => {
  return (
    <div className="">
<section className="py-24 bg-white flex flex-col justify-center">
      <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className=" flex justify-end">
          <img
            className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
            src={Blog1}
            alt="Image 1"
          />
        </div>
        <div className="flex justify-start">
          <img
            className="rounded-lg object-cover overflow-hidden"
            src={Blog2}
            alt="Image 2"
          />
        </div>
        <div className="-mt-64 flex justify-start">
          <img
            className="rounded-lg object-cover overflow-hidden"
            src={Blog4}
            alt="Image 3"
          />
        </div>
        <div className="flex justify-start -mr-28 ml-28">
          <img
            className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
            src={Blog3}
            alt="Image 4"
          />
        </div>
        <div className="-translate-y-96 transform ml-28 -mr-28 p-16 shadow-xl rounded-xl overflow-hidden bg-white">
          <div className="space-y-4">
            <p className="text-4xl font-bold text-black tracking-tight">
            In a world where creativity and technology intersect, the realms of music, gaming, and programming have become not just hobbies but ways of life.
            </p>
            <p className="text-xl text-black">
              
                Music fuels our imagination, setting the tone for our lives and gaming adventures. The rhythm of coding, game soundtracks, and well-crafted code all share a common thread—passion and precision.

                Gaming is an evolving art form, offering immersive experiences that go beyond play, inviting creation and exploration. It’s a unique blend of challenge and reward.

                Programming is the backbone that brings these worlds to life, transforming ideas into reality and pushing the boundaries of innovation.

                As these worlds converge, the skills from programming enhance gaming, while music sparks creativity across both. This synergy is where the future lies, making it an exciting time to be part of this evolving landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};


export default Post;
