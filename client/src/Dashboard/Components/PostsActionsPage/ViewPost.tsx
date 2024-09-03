import React, { useEffect, useState } from 'react';
import DashboardNav from '../DashboardNav';
import axios from 'axios'; // Import axios for HTTP requests

interface Post {
  _id: string; // Change this to string if your ID is a string
  title: string;
  content: string;
  date: string;
  author: string;
}

const ViewPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from the backend
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getPosts'); // Adjust the endpoint as needed
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch posts.'); // Set an error message if needed
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="flex-1 ml-64 p-8">Loading...</div>;
  if (error) return <div className="flex-1 ml-64 p-8 text-red-600">{error}</div>;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white text-gray-800 shadow-lg fixed left-0 top-0 h-full">
        <DashboardNav />
      </div>

      {/* Main content */}
      <div className="flex-1 ml-64 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">View Posts</h1>

        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-2">
                <h2 className="text-2xl font-bold flex-1">{post.title}</h2>
                <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full ml-4">
                  ID: {post._id.slice(0, 4)} {/* Display first 4 characters of _id */}
                </span>
              </div>
              <p className="text-gray-600 mb-2 text-sm">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewPosts;
