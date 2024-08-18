// Filters.js
import React, { useState } from 'react';
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

  const [inputValue, setInputValue] = useState('');

  function startSearch() {
    let added;
    if (inputValue) {
      setFilterState(prevState => ({
        ...prevState,
        keywords: [...prevState.keywords, inputValue.trim()]
      }));
      added = JSON.parse(JSON.stringify(inputValue));
      setInputValue('');
    }

    handleSearch(added)
  }

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
          <Keywords inputValue={inputValue} setInputValue={setInputValue} startSearch={startSearch} handleSearch={handleSearch} filterState={filterState} setFilterState={setFilterState} keywordsFlash={keywordsFlash} setKeywordsFlash={setKeywordsFlash} />
        </div>
        <div className="row-container-center">
          <div className="filters-search">
            <button value={inputValue} className="search-button" onClick={startSearch}>SEARCH</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
