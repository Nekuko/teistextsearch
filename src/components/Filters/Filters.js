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
  volumes,
  images,
  namedActive,
  namedCharacters,
  canonActive,
  canonES,
  setCanonActive,
  setNamedActive,
  mogDropdownState,
  setMogDropdownState
}) {
  return (
    <div className="filters">
      <div className="row-container">
        <MediumsContainer 
          animeDropdownState={animeDropdownState}
          updateAnimeDropdownState={updateAnimeDropdownState}
          lnDropdownState={lnDropdownState}
          updateLNDropdownState={updateLNDropdownState}
          volumes={volumes}
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
        volumes={volumes}
        namedActive={namedActive}
        canonActive={canonActive}
        mogDropdownState={mogDropdownState}
        />
      </div>
      <Keywords filterState={filterState} setFilterState={setFilterState} /> {/* Make sure this is the last child of the .filters container */}
    </div>
  );
}

export default Filters;
