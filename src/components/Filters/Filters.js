// Filters.js
import React from 'react';
import './Filters.css';
import MediumsContainer from './MediumsContainer/MediumsContainer';
import Keywords from './KeywordsContainer/Keywords'; // Import the Keywords component
import CharactersContainer from './CharactersContainer/CharactersContainer';
import SelectedContainer from './SelectedContainer/SelectedContainer';

function Filters({
  animeDropdownState,
  updateAnimeDropdownState,
  lnDropdownState,
  updateLNDropdownState,
  filterState,
  setFilterState,
  dropdownStates,
  setDropdownStates,
  images,
  namedActive,
  namedCharacters,
  canonActive,
  canonES,
  setCanonActive,
  setNamedActive,
  mogDropdownState,
  setMogDropdownState,
  wnDropdownState,
  updateWNDropdownState,
  handleSearch
}) {
  return (
    <div>
      <h1 className="filters-header">FILTERS</h1>
      <div className="filters">
        <div className="row-container">
          <MediumsContainer
            wnDropdownState={wnDropdownState}
            updateWNDropdownState={updateWNDropdownState}
            animeDropdownState={animeDropdownState}
            updateAnimeDropdownState={updateAnimeDropdownState}
            lnDropdownState={lnDropdownState}
            updateLNDropdownState={updateLNDropdownState}
            images={images}
            mogDropdownState={mogDropdownState}
            setMogDropdownState={setMogDropdownState}
            canonActive={canonActive}
            setCanonActive={setCanonActive}
            canonES={canonES}
          />
          <CharactersContainer
            dropdownStates={dropdownStates}
            setDropdownStates={setDropdownStates}
            namedActive={namedActive}
            setNamedActive={setNamedActive}
            namedCharacters={namedCharacters}
          />
          <SelectedContainer
            animeDropdownState={animeDropdownState}
            lnDropdownState={lnDropdownState}
            dropdownStates={dropdownStates}
            namedActive={namedActive}
            canonActive={canonActive}
            mogDropdownState={mogDropdownState}
            wnDropdownState={wnDropdownState}
          />
        </div>
        <div className="row-container-center">
        <Keywords filterState={filterState} setFilterState={setFilterState} /> {/* Make sure this is the last child of the .filters container */}
        <button className="search-button" onClick={handleSearch}>SEARCH</button> {/* Search button */}
        </div>
      </div>
    </div>
  );
}

export default Filters;
