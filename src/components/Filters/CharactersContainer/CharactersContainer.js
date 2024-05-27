import React, { useState } from 'react';
import './CharactersContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight, faN } from '@fortawesome/free-solid-svg-icons';
import CharacterDropdown from '../menus/CharacterDropdown';

function CharactersContainer({
  dropdownStates,
  setDropdownStates,
  namedCharacters,
  namedActive,
  setNamedActive
}) {



  const handleReset = () => {
    // Reset all characters and their attributes to unchecked
    const resetState = Object.keys(dropdownStates).reduce((acc, group) => {
      const characters = Object.keys(dropdownStates[group].characters).reduce((charAcc, character) => {
        const attributes = Object.keys(dropdownStates[group].characters[character]).reduce((attrAcc, attribute) => {
          attrAcc[attribute] = false;
          return attrAcc;
        }, {});
        charAcc[character] = { ...attributes, checked: false, open: false };
        return charAcc;
      }, {});
      acc[group] = { ...dropdownStates[group], characters, checked: false, openGroup: false, filters: '' };
      return acc;
    }, {});
    setDropdownStates(resetState);
    setNamedActive(false); // Disable the named button
  };
  
  const handleCheckboxChange = (group) => {
    const isChecked = !dropdownStates[group].checked;
    const updatedCharacters = Object.keys(dropdownStates[group].characters).reduce((acc, character) => {
      // If namedActive is true, only check the characters in the namedCharacters list
      if (!namedActive || (namedActive && namedCharacters.includes(character))) {
        const updatedAttributes = Object.keys(dropdownStates[group].characters[character]).reduce((attrAcc, attribute) => {
          if (attribute !== 'open') {
            attrAcc[attribute] = isChecked;
          }
          return attrAcc;
        }, {});
        acc[character] = { ...updatedAttributes, checked: isChecked };
      } else {
        // If namedActive is true and the character is not in the namedCharacters list, keep the character unchecked
        acc[character] = dropdownStates[group].characters[character];
      }
      return acc;
    }, {});
  
    setDropdownStates(prevState => ({
      ...prevState,
      [group]: {
        ...prevState[group],
        characters: updatedCharacters,
        checked: isChecked
      }
    }));
  };

  const handleNamed = () => {
    const isActive = !namedActive;
    setNamedActive(isActive);
  
    // Only update the state when the button is checked
    if (isActive) {
      const updatedDropdownStates = Object.keys(dropdownStates).reduce((acc, group) => {
        let allUnchecked = true;
        const updatedCharacters = Object.keys(dropdownStates[group].characters).reduce((charAcc, character) => {
          // Only update characters that are not in the namedCharacters array
          if (!namedCharacters.includes(character)) {
            const updatedAttributes = Object.keys(dropdownStates[group].characters[character]).reduce((attrAcc, attribute) => {
              if (attribute !== 'open') {
                attrAcc[attribute] = false; // Uncheck all attributes
              }
              return attrAcc;
            }, {});
            charAcc[character] = { ...updatedAttributes, checked: false }; // Uncheck the character
          } else {
            charAcc[character] = dropdownStates[group].characters[character]; // Keep the state of named characters
            if (dropdownStates[group].characters[character].checked) {
              allUnchecked = false;
            }
          }
          return charAcc;
        }, {});
        acc[group] = { ...dropdownStates[group], characters: updatedCharacters, checked: !allUnchecked }; // Check or uncheck the group based on allUnchecked
        return acc;
      }, {});
      setDropdownStates(updatedDropdownStates);
    }
  };
  
  
  
  

  return (
    <div className="characters-container">
      <h2 className="characters-title">CHARACTERS</h2>
      {Object.keys(dropdownStates).map((group, index) => (
        <div key={index} className="checkbox-container">
          <CharacterDropdown 
            dropdownName={group.toUpperCase()}
            dropdownStates={dropdownStates} 
            setDropdownStates={setDropdownStates}
            namedCharacters={namedActive ? namedCharacters : []}
          />
          <input
            type="checkbox"
            checked={dropdownStates[group].checked}
            onChange={() => handleCheckboxChange(group)}
          />
        </div>
      ))}
        <FontAwesomeIcon
          icon={faN}
          className={`named-button ${namedActive ? 'active' : ''}`}
          onClick={handleNamed}
          title='"Named" Only'
      />
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
