import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); // Call the onSearch function with the updated term
  };

  return (
    <div>
      <h2>Search Transactions</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by description"
      />
    </div>
  );
};

export default SearchBar;
