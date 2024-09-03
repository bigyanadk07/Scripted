import React from 'react';
import DashboardNav from './DashboardNav';
import SearchBar from './internalComponents/SearchBar';

const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
});

const getGreeting = () => {
  const hour = today.getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="h-screen bg-white text-gray-800 shadow-lg fixed left-0 top-0">
        <DashboardNav />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[20%] p-8 space-y-8 overflow-y-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <SearchBar />
          <span className="text-sm text-blue-700 font-semibold">{formattedDate}</span>
        </div>

        {/* Hero Section */}
        <div className="flex items-center justify-between bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Avatar"
              className="w-20 h-20 rounded-full shadow-md"
            />
            <div>
              <h1 className="text-4xl font-bold text-blue-900">{getGreeting()} 👋</h1>
              <p className="text-lg text-gray-600">Welcome back to your dashboard!</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-semibold text-blue-900">25,000</p>
            <p className="text-sm text-gray-500">Total Views</p>
          </div>
        </div>

        {/* Data Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-24 h-24">
              {/* Placeholder for Circular Progress Bar */}
              <p className="text-4xl font-bold text-blue-900">150</p>
              <p className="text-sm text-gray-500 text-center">Total Posts</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-24 h-24">
              {/* Placeholder for Circular Progress Bar */}
              <p className="text-4xl font-bold text-blue-900">25k</p>
              <p className="text-sm text-gray-500 text-center">Total Views</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-24 h-24">
              {/* Placeholder for Circular Progress Bar */}
              <p className="text-4xl font-bold text-blue-900">120</p>
              <p className="text-sm text-gray-500 text-center">New Comments</p>
            </div>
          </div>
        </div>

        {/* Recent Activities Carousel */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Recent Activities</h2>
          <div className="flex space-x-4 overflow-x-scroll">
            {/* Placeholder for Carousel Items */}
            <div className="bg-blue-50 p-4 rounded-lg shadow-md flex-shrink-0 w-60">
              <h3 className="text-lg font-semibold text-blue-700">New Post: React Hooks</h3>
              <p className="text-sm text-gray-600">Posted 1 hour ago</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow-md flex-shrink-0 w-60">
              <h3 className="text-lg font-semibold text-blue-700">New Comment: Great post!</h3>
              <p className="text-sm text-gray-600">Posted 2 hours ago</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow-md flex-shrink-0 w-60">
              <h3 className="text-lg font-semibold text-blue-700">Updated Post: Redux Simplified</h3>
              <p className="text-sm text-gray-600">Posted 3 hours ago</p>
            </div>
          </div>
        </div>

        {/* To-Do List with Progress Tracker */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">To-Do List</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span className="text-gray-800">Write a new post about TypeScript</span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition">
                Complete
              </button>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-800">Reply to comments on the latest post</span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition">
                Complete
              </button>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-800">Update blog analytics section</span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition">
                Complete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
