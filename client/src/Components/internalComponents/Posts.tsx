import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts:React.FC = () => {
  const [posts, setPosts] = useState<String>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect( ()=> {

    setLoading(true)
    axios.get("http://localhost:4000/getPosts")
    .then(response => {
      setPosts(response.data)
      console.log(response.data)
    })
    .catch(err => {
      console.log("Error occured", err.message);
    })
    .finally(()=>{
        setLoading(false);
    })

  })

  return (
    <div>
      <h1>Posts</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              {post.image && <img src={post.image} alt={post.title} />}
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Posts;
