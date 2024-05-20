import React from 'react';
import './CharactersContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import CharacterDropdown from '../menus/CharacterDropdown';

function CharactersContainer({
  dropdownStates,
  setDropdownStates
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
      acc[group] = { ...dropdownStates[group], characters, checked: false, openGroup: false };
      return acc;
    }, {});
    setDropdownStates(resetState);
  };

  const handleCheckboxChange = (group) => {
    const isChecked = !dropdownStates[group].checked;
    const updatedCharacters = Object.keys(dropdownStates[group].characters).reduce((acc, character) => {
      const updatedAttributes = Object.keys(dropdownStates[group].characters[character]).reduce((attrAcc, attribute) => {
        if (attribute !== 'open') {
          attrAcc[attribute] = isChecked;
        }
        return attrAcc;
      }, {});
      acc[character] = { ...updatedAttributes, checked: isChecked };
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

  return (
    <div className="characters-container">
      <h2 className="characters-title">CHARACTERS</h2>
      {Object.keys(dropdownStates).map((group, index) => (
        <div key={index} className="checkbox-container">
          <CharacterDropdown 
            dropdownName={group.toUpperCase()}
            dropdownStates={dropdownStates} 
            setDropdownStates={setDropdownStates}
          />
          <input
            type="checkbox"
            checked={dropdownStates[group].checked}
            onChange={() => handleCheckboxChange(group)}
          />
        </div>
      ))}
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
