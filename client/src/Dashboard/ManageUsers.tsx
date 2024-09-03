import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import DashboardNav from './Components/DashboardNav';

const ManageUsers: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white text-gray-800 shadow-lg fixed left-0 top-0 h-full">
        <DashboardNav />
      </div>

      {/* Main content area */}
      <div className="flex-1 ml-64 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Manage Users</h1>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm text-left">
                  Name
                </th>
                <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm text-left">
                  Email
                </th>
                <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="w-1/3 py-3 px-4 text-left">John Doe</td>
                <td className="w-1/3 py-3 px-4 text-left">johndoe@example.com</td>
                <td className="w-1/3 py-3 px-4 text-left flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              {/* Add more user rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
