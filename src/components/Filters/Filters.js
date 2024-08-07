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
  handleSearch,
  mediumFlash,
  setMediumFlash,
  keywordsFlash,
  setKeywordsFlash
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
            mediumFlash={mediumFlash}
            setMediumFlash={setMediumFlash}
          />
          <CharactersContainer
            dropdownStates={dropdownStates}
            setDropdownStates={setDropdownStates}
            namedActive={namedActive}
            setNamedActive={setNamedActive}
            namedCharacters={namedCharacters}
            characterImages={images['characterImages']}
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
          <Keywords handleSearch={handleSearch} filterState={filterState} setFilterState={setFilterState} keywordsFlash={keywordsFlash} setKeywordsFlash={setKeywordsFlash} />
        </div>
        <div className="row-container-center">
          <div className="filters-search">
            <button className="search-button" onClick={handleSearch}>SEARCH</button> {/* Search button */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
