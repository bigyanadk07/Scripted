import React, { useState, useEffect } from 'react';
import DashboardNav from '../DashboardNav';
import axios from 'axios';

interface Post {
  _id: string;
  title: string;
  author: string;
  date: string; // Assuming date is a string in ISO format or similar
}

const DeletePost: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [notification, setNotification] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState<string | null>(null);

  // Fetch posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getPosts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Function to handle delete request
  const handleDelete = async () => {
    if (!postIdToDelete) return;

    try {
      // Send delete request to the server
      const response = await axios.delete(`http://localhost:4000/deletePost/${postIdToDelete}`);
      
      // Check if the deletion was successful
      if (response.status === 200) {
        setNotification('Post deleted successfully');
        setPosts(posts.filter(post => post._id !== postIdToDelete)); // Remove deleted post from state
        setPostIdToDelete(null); // Clear postIdToDelete
        setShowModal(false); // Close the modal

        // Clear the notification after 3 seconds
        setTimeout(() => setNotification(''), 3000);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      setNotification('Failed to delete post. Please try again.');
    }
  };

  const handleCancel = () => {
    setPostIdToDelete(null);
    setShowModal(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white text-gray-800 shadow-lg fixed left-0 top-0 h-full">
        <DashboardNav />
      </div>

      {/* Main content */}
      <div className="flex-1 ml-64 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Manage Posts</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {/* Notification pop-up */}
          {notification && (
            <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
              {notification}
            </div>
          )}

          <table className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Title</th>
                <th className="px-4 py-2 border-b">Author</th>
                <th className="px-4 py-2 border-b">Date</th>
                <th className="px-4 py-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(post => (
                <tr key={post._id}>
                  <td className="px-4 py-2 border-b">{post.title}</td>
                  <td className="px-4 py-2 border-b">{post.author}</td>
                  <td className="px-4 py-2 border-b">{new Date(post.date).toLocaleDateString()}</td>
                  <td className="px-4 py-2 border-b text-center">
                    <button
                      onClick={() => { setPostIdToDelete(post._id); setShowModal(true); }}
                      className="bg-red-500 text-white font-bold py-1 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Confirmation Modal */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 bg-black opacity-50" onClick={handleCancel} />
              <div className="relative z-10 rounded-lg bg-white p-8 shadow-2xl">
                <h2 className="text-lg font-bold">Are you sure you want to delete this post?</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Doing that could cause issues elsewhere. Are you 100% sure it's OK?
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={handleDelete}
                    type="button"
                    className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    onClick={handleCancel}
                    type="button"
                    className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
                  >
                    No, go back
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeletePost;
