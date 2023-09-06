import React, { useState } from 'react';
const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Search for a genre"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};
export default Searchbar;
