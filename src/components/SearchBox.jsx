import React from 'react';

const SearchBox = ({ onSearch, placeholder }) => {
  return (
    <div className="flex items-center justify-center mt-4 w-auto w-full">
      <input
        type="text"
        placeholder= {`${placeholder}`}
        className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
