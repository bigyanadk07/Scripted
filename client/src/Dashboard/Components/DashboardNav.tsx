import React from 'react';
import {
  FaUserShield,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaComments,
  FaTags,
  FaChartBar,
  FaSignOutAlt,
  FaUserCircle,
  FaCog,
  FaKey,
  FaUserEdit,
  FaHome, // Import FaHome icon
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashboardSidebar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col justify-between">
      <div>
        {/* Dashboard Home Link */}


        <div className="p-4">
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>

        {/* User Info */}
        <div className="p-4 flex items-center space-x-3 bg-gray-800 rounded-lg mx-4">
          <FaUserCircle className="text-3xl" />
          <div>
            <p className="text-sm font-medium">Logged in as:</p>
            <p className="text-lg font-semibold">Bigyan Adhikari</p> {/* Dummy Name */}
          </div>
        </div>
        <div className="p-4">
        <strong className="block text-xs font-medium uppercase text-gray-400">
              Dashboard
            </strong> 
          <Link
            to="/dashboard"
            className="flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-700"
          >
            <FaHome className="mr-2" />Home
          </Link>
        </div>
        <ul className="flex flex-col space-y-2 p-4">
          {/* Users Section */}
          <li>
            <strong className="block text-xs font-medium uppercase text-gray-400">
              Users
            </strong>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  to="/manage-users"
                  className="flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-700"
                >
                  <FaUserShield className="mr-2" /> Manage Users
                </Link>
              </li>
            </ul>
          </li>

          {/* Posts Section */}
          <li>
            <strong className="block text-xs font-medium uppercase text-gray-400">
              Posts
            </strong>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  to="/create-post"
                  className="flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-700"
                >
                  <FaPlus className="mr-2" /> Add New Post
                </Link>
              </li>
              <li>
                <Link
                  to="/edit-post"
                  className="flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-700"
                >
                  <FaEdit className="mr-2" /> Edit Post
                </Link>
              </li>
              <li>
                <Link
                  to="/delete-post"
                  className="flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-700"
                >
                  <FaTrash className="mr-2" /> Delete Post
                </Link>
              </li>
              <li>
                <Link
                  to="/view-posts"
                  className="flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-700"
                >
                  <FaEye className="mr-2" /> View Posts
                </Link>
              </li>
            </ul>
          </li>

          {/* Comments Section */}
          <li>
            <strong className="block text-xs font-medium uppercase text-gray-400">
              Comments
            </strong>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  to="/manage-comments"
                  className="flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-700"
                >
                  <FaComments className="mr-2" /> Manage Comments
                </Link>
              </li>
            </ul>
          </li>

          {/* Categories Section */}
          <li>
            <strong className="block text-xs font-medium uppercase text-gray-400">
              Categories
            </strong>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  to="/manage-categories"
                  className="flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-700"
                >
                  <FaTags className="mr-2" /> Manage Categories
                </Link>
              </li>
            </ul>
          </li>

          {/* Analytics Section */}
          <li>
            <strong className="block text-xs font-medium uppercase text-gray-400">
              Analytics
            </strong>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  to="/analytics"
                  className="flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-700"
                >
                  <FaChartBar className="mr-2" /> View Analytics
                </Link>
              </li>
            </ul>
          </li>

          {/* Settings Section */}
          <li>
            <strong className="block text-xs font-medium uppercase text-gray-400">
              Settings
            </strong>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  to="/change-name"
                  className="flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-700"
                >
                  <FaUserEdit className="mr-2" /> Change Name
                </Link>
              </li>
              <li>
                <Link
                  to="/change-password"
                  className="flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-700"
                >
                  <FaKey className="mr-2" /> Change Password
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-700"
                >
                  <FaCog className="mr-2" /> General Settings
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Logout Section */}
      <div className="p-4">
        <Link
          to="/logout"
          className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
