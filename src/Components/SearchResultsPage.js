import React from 'react';

const SearchResultsPage = ({ results }) => {
  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultsPage;
