// Filters.js
import React, { useState } from 'react';
import './Filters.css'; // Import the CSS file
import MediumsContainer from './MediumsContainer/MediumsContainer'; // Import the MediumsContainer component

function Filters() {
  const [animeDropdownState, setAnimeDropdownState] = useState({
    mainChecked: false,
    filter: '',
    openSeasons: {},
    seasonsChecked: {},
    episodeFilters: {}
  });

  const [lnDropdownState, setLNDropdownState] = useState({
    lnMainChecked: false,
    lnFilter: '',
    openVolumes: {},
    volumesChecked: {},
    chaptersFilters: {}
  });

  const updateAnimeDropdownState = (key, value) => {
    setAnimeDropdownState(prevState => ({
      ...prevState,
      [key]: value
    }));
  }

  const updateLNDropdownState = (key, value) => {
    setLNDropdownState(prevState => ({
      ...prevState,
      [key]: value
    }));
  }

  return (
    <div className="filters">
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
      </div>
    </div>
  );
}

export default Filters;
