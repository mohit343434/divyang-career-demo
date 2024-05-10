import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

const Search = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={[ search, setSearch ]}>
     { children }
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);

export { useSearch , Search };
