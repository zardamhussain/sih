
import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [res, setRes] = useState(true);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setRes(prev => false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-4">SEARCH BY CNR NUMBER</h1>
      <SearchBox onSearch={handleSearch} placeholder="CNR NUMBER" />
      <SearchResults searchTerm={searchTerm} res = {res}/>
    </div>
  );
}

export default App;
