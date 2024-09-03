import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the interface for the data
interface PostData {
  id: number;
  title: string;
  imgsrc: string;
  author: string;
  tagline: string;
  description: string;
}

// Component that displays a single post
const RecentPost: React.FC<PostData> = ({ title, imgsrc, author, tagline}) => {
    return (
<div className="relative group ">
  <div className='relative cursor-pointer'>
    <img
      src={imgsrc}
      alt={title}
      className='w-72 h-96 object-cover transition-opacity duration-300 rounded-xl '
    />
    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
  </div>
  <div className='w-72 py-5 hover:text-gray-500'>
    <p className='font-light'>{author}</p>
    <h1 className='font-semibold'>{title}</h1>
    <p>{tagline}</p>
  </div>
</div>

    );
  };

// Main component
const App: React.FC = () => {
  const [data, setData] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:4000/getPosts")
      .then(response => {
        setData(response.data.reverse()); // Use setData here
        console.log(response.data);
      })
      .catch(err => {
        console.log("Error occurred", err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
      <div className=''>
            <div className='grid grid-cols-5 gap-20 px-20'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((post) => (
          <RecentPost 
            key={post.id}
            title={post.title}
            imgsrc={post.imgsrc}
            author={post.author}
            tagline={post.tagline}
            description={post.description}
          />
        ))
      )}
    </div>
      </div>
  );
};

export default App;
