// CharactersContainer.js
import React from 'react';
import './CharactersContainer.css'; // Make sure to create a corresponding CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import CharactersDropdownMenu from '../menus/CharactersDropdownMenu'; // Import the CharactersDropdownMenu component

function CharactersContainer({
  charDropdownState,
  setCharDropdownState,
  groups
}) {

    const handleReset = () => {}
  return (
    <div className="characters-container">
      <h2 className="characters-title">CHARACTERS</h2>
      <div className="checkbox-container">
            <CharactersDropdownMenu 
            charDropdownState={charDropdownState}
            setCharDropdownState={setCharDropdownState}
            groups={groups}
            openSG={openSG}
            setOpenSG={setOpenSG}
            />
            <input
            type="checkbox"
            checked={mainChecked}
            onChange={handleMainCheck}
            />
        </div>
      {/* Add any additional elements or components here */}
      {/* Add a reset button here if needed */}
      <FontAwesomeIcon
        icon={faRotateRight}
        className="reset-button"
        onClick={handleReset}
        title="Reset"
      />
    </div>
  );
}

export default CharactersContainer;
