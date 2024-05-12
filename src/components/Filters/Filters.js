// Filters.js
import React, { useState } from 'react';
import './Filters.css'; // Import the CSS file
import MediumsContainer from './MediumsContainer/MediumsContainer'; // Import the MediumsContainer component

function Filters({
  animeDropdownState,
  updateAnimeDropdownState,
  lnDropdownState,
  updateLNDropdownState
}) {
  

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
        <input
            type="checkbox"
          />
        <input
            type="checkbox"
          />
      </div>
    </div>
  );
}

export default Filters;
