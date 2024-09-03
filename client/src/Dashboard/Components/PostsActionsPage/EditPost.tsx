import React, { useState } from 'react';
import DashboardNav from '../DashboardNav';

const EditPost: React.FC = () => {
  const [postId, setPostId] = useState('');
  const [title, setTitle] = useState('');
  const [imgsrc, setImgsrc] = useState('');
  const [author, setAuthor] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState<{ title?: string; imgsrc?: string; author?: string; tagline?: string; description?: string; postId?: string }>({});
  const [notification, setNotification] = useState('');

  // Function to fetch post details
  const fetchPost = async (partialId: string) => {
    try {
      const response = await fetch(`http://localhost:4000/editPost/find/${partialId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }
      const posts = await response.json();
      if (posts.length > 0) {
        const post = posts[0]; // Assuming you want to edit the first matched post
        setTitle(post.title);
        setImgsrc(post.imgsrc || '');
        setAuthor(post.author);
        setTagline(post.tagline);
        setDescription(post.description);
      } else {
        setErrors({ ...errors, postId: 'Post not found' });
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      setErrors({ ...errors, postId: 'Failed to fetch post or post not found' });
    }
  };

  const handleFetchPost = () => {
    if (postId) {
      fetchPost(postId);
    } else {
      setErrors({ ...errors, postId: 'Post ID is required' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let validationErrors: { title?: string; imgsrc?: string; author?: string; tagline?: string; description?: string } = {};

    if (!title) validationErrors.title = 'Title is required';
    if (!author) validationErrors.author = 'Author is required';
    if (!tagline) validationErrors.tagline = 'Tagline is required';
    if (!description) validationErrors.description = 'Description is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/editPost/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, imgsrc, author, tagline, description }),
      });

      if (!response.ok) {
        throw new Error('Failed to update post');
      }

      const result = await response.json();
      console.log('Post updated successfully:', result);

      // Show notification
      setNotification('Post updated successfully!');
      setTimeout(() => {
        setNotification('');
      }, 3000); // Notification disappears after 3 seconds

      // Clear the form and errors on successful submission
      setErrors({});
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white text-gray-800 shadow-lg fixed left-0 top-0 h-full">
        <DashboardNav />
      </div>

      {/* Main content */}
      <div className="flex-1 ml-64 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Edit Post</h1>

        {/* Post ID input */}
        <div className="mb-6">
          <label htmlFor="postId" className="block text-gray-700 font-semibold mb-2">
            Post ID (first 4 digits)
          </label>
          <input
            id="postId"
            type="text"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.postId ? 'border-red-500' : 'border-gray-300'}`}
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
          />
          <button
            type="button"
            onClick={handleFetchPost}
            className="w-full mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Fetch Post
          </button>
          {errors.postId && <p className="text-red-500 text-sm mt-1">{errors.postId}</p>}
        </div>

        {/* Edit form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Post Title
            </label>
            <input
              id="title"
              type="text"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="imgsrc" className="block text-gray-700 font-semibold mb-2">
              Image Source (URL)
            </label>
            <input
              id="imgsrc"
              type="text"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.imgsrc ? 'border-red-500' : 'border-gray-300'}`}
              value={imgsrc}
              onChange={(e) => setImgsrc(e.target.value)}
            />
            {errors.imgsrc && <p className="text-red-500 text-sm mt-1">{errors.imgsrc}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="author" className="block text-gray-700 font-semibold mb-2">
              Author
            </label>
            <input
              id="author"
              type="text"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.author ? 'border-red-500' : 'border-gray-300'}`}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="tagline" className="block text-gray-700 font-semibold mb-2">
              Tagline
            </label>
            <input
              id="tagline"
              type="text"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.tagline ? 'border-red-500' : 'border-gray-300'}`}
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
            {errors.tagline && <p className="text-red-500 text-sm mt-1">{errors.tagline}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Update Post
          </button>
        </form>

        {/* Notification */}
        {notification && (
          <div className="mt-4 bg-green-100 text-green-800 p-4 rounded-lg">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditPost;
