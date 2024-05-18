// Filters.js
import React from 'react';
import './Filters.css';
import MediumsContainer from './MediumsContainer/MediumsContainer';
import Keywords from './KeywordsContainer/Keywords'; // Import the Keywords component
import CharactersContainer from './CharactersContainer/CharactersContainer';

function Filters({
  animeDropdownState,
  updateAnimeDropdownState,
  lnDropdownState,
  updateLNDropdownState,
  filterState,
  setFilterState,
  charDropdownState,
  setCharDropdownState
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
        <CharactersContainer 
          animeDropdownState={animeDropdownState}
          updateAnimeDropdownState={updateAnimeDropdownState}
          lnDropdownState={lnDropdownState}
          updateLNDropdownState={updateLNDropdownState}
        />
        <div className="mediums-container">
          <h2 className="mediums-title">SELECTED</h2>
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
      </div>
      <Keywords  filterState={filterState} setFilterState={setFilterState} /> {/* Make sure this is the last child of the .filters container */}
    </div>
  );
}

export default Filters;
