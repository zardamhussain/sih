import React from 'react';
import CaseDetails from './CaseDetails';

const SearchResults = ({ searchTerm, res }) => {
  const searchResults = [{
      id : 'Result 1',
      title: 'Result 2',
      description: 'Result 3',
  }
  ];


  return (
    <div className="mt-4 p-4 border border-gray-300 shadow-lg rounded-lg w-full">
      <h2 className="text-xl font-semibold mb-2 flex items-center justify-center">Search Results</h2>
      {searchResults.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <CaseDetails searchResults id='1' detail={res}/>
      )}
    </div>
  );
};

export default SearchResults;
