import React, { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add search logic here
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Rechercher un livre..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-64 px-4 py-2 rounded-lg bg-amber-600 text-white placeholder-amber-200 
                 focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <svg
          className="w-5 h-5 text-amber-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}