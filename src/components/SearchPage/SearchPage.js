// SearchPage.js
import React from 'react';
import './SearchPage.css'; // Import the CSS file
import Filters from '../Filters/Filters'; // Import the Filters component
import Results from '../Results/Results' // Import the Resultse component

function SearchPage() {
  return (
    <div className="search-page">
      <Filters /> {/* Include the Filters component */}
      <Results /> {}
    </div>
  );
}

export default SearchPage;
