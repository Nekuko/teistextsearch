// Filters.js
import React from 'react';
import './Filters.css';
import MediumsContainer from './MediumsContainer/MediumsContainer';
import Keywords from './KeywordsContainer/Keywords'; // Import the Keywords component

function Filters({
  animeDropdownState,
  updateAnimeDropdownState,
  lnDropdownState,
  updateLNDropdownState,
  keywords,
  setKeywords,
  caseSensitive,
  setCaseSensitive,
  exactMatch,
  setExactMatch
}) {
  return (
    <div className="filters">
      <div className="row-container">
        <MediumsContainer 
          animeDropdownState={animeDropdownState}
          updateAnimeDropdownState={updateAnimeDropdownState}
          lnDropdownState={lnDropdownState}
          updateLNDropdownState={updateLNDropdownState}
        />
        <div className="mediums-container">
          <h2 className="mediums-title">CHARACTERS</h2>
        </div>
        <div className="mediums-container">
          <h2 className="mediums-title">OPTIONAL</h2>
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
      </div>
      <Keywords setExactMatch={setExactMatch} exactMatch={exactMatch} setCaseSensitive={setCaseSensitive} caseSensitive={caseSensitive} keywords={keywords} setKeywords={setKeywords}/> {/* Make sure this is the last child of the .filters container */}
    </div>
  );
}

export default Filters;
