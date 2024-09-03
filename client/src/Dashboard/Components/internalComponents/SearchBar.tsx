import React from 'react'

const SearchBar:React.FC = () => {
  return (
    <div>
      <div className="flex items-center relative max-w-xs rounded-2xl">
      <svg
        className="absolute left-4 w-4 h-4 text-gray-400"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
      </svg>
      <input
        placeholder="Search"
        type="search"
        className="w-full h-10 px-10 py-5 rounded-lg border-2 border-transparent bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white transition ease-in-out"
      />
    </div>
    </div>
  )
}

export default SearchBar
