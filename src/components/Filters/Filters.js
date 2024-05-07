// Filters.js
import React from 'react';
import './Filters.css'; // Import the CSS file
import AnimeDropdownMenu from '../menus/AnimeDropdownMenu'; // Import the HowToUsePage component

function Filters() {
  return (
    <div className="filters">
      <div className="mediums-container">
        <h2 className="mediums-title">MEDIUMS</h2>
        <AnimeDropdownMenu />
        <AnimeDropdownMenu />
        <AnimeDropdownMenu />
        <AnimeDropdownMenu />
        <AnimeDropdownMenu />
      </div>
      <div className="mediums-container">
        <h2 className="mediums-title">CHARACTERS</h2>
        <AnimeDropdownMenu />
        <AnimeDropdownMenu />
        <AnimeDropdownMenu />
        <AnimeDropdownMenu />
        <AnimeDropdownMenu />
      </div>
      <div className="mediums-container">
        <h2 className="mediums-title">OPTIONAL</h2>
        <AnimeDropdownMenu />
        <AnimeDropdownMenu />
        <AnimeDropdownMenu />
        <AnimeDropdownMenu />
        <AnimeDropdownMenu />
      </div>
    
    </div>
  );
}

export default Filters;