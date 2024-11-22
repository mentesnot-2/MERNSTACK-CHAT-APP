import React, { useState } from 'react';

function SearchInput({searchQuery,setSearchQuery}){
    return (
        <div className="border-b">
              <h2 className="text-lg font-semibold text-gray-800">Users</h2>
              {/* Search Bar */}
              <input
                  type="text"
                  placeholder="Search users..."
                  className="input input-bordered w-full mt-2 h-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
    )
}
export default SearchInput