import React, { useState } from 'react';
import './CharactersContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight, faN } from '@fortawesome/free-solid-svg-icons';
import CharacterGroupDropdown from './CharacterGroupDropdown.js';

function CharactersContainer({
  dropdownStates,
  setDropdownStates,
  namedCharacters,
  namedActive,
  setNamedActive
}) {



  const handleReset = () => {
    setDropdownStates(prevState => {
        const resetState = { ...prevState };

        // Iterate over each dropdown
        Object.keys(resetState).forEach(dropdownName => {
            const dropdown = resetState[dropdownName];
            dropdown.openGroup = false;
            dropdown.checked = false;
            dropdown.open = false;
            dropdown.filters = '';

            // Check if groups exist and iterate over them
            if (dropdown.groups) {
                Object.keys(dropdown.groups).forEach(groupName => {
                    const group = dropdown.groups[groupName];
                    group.openGroup = false;
                    group.checked = false;
                    group.open = false;
                    group.filters = '';

                    // Iterate over each character within the group
                    Object.keys(group.characters).forEach(characterName => {
                        const character = group.characters[characterName];
                        Object.keys(character).forEach(key => {
                            if (typeof character[key] === 'boolean') {
                                character[key] = false;
                            }
                        });
                    });
                });
            }

            // Check if characters exist and iterate over them
            if (dropdown.characters) {
                Object.keys(dropdown.characters).forEach(characterName => {
                    const character = dropdown.characters[characterName];
                    Object.keys(character).forEach(key => {
                        if (typeof character[key] === 'boolean') {
                            character[key] = false;
                        }
                    });
                });
            }
        });

        return resetState;
    });
};


  const handleNamed = () => {
    
  };

  const handleCheckboxChange = (groupName) => {
    setDropdownStates((prevState) => {
        const updateCheckedState = (items, newCheckedState) => {
            return Object.keys(items).reduce((updatedItems, itemName) => {
                const item = items[itemName];
                const updatedItem = { ...item, checked: newCheckedState };

                // Update options for this item
                Object.keys(updatedItem).forEach((key) => {
                    if (key !== 'checked' && key !== 'open' && key !== 'groups' && key !== 'characters') {
                        updatedItem[key] = newCheckedState;
                    }
                });

                // If this item has characters, update them
                if (updatedItem.characters) {
                    updatedItem.characters = updateCheckedState(updatedItem.characters, newCheckedState);
                }

                // If this item has nested groups, update them recursively
                if (updatedItem.groups) {
                    updatedItem.groups = updateCheckedState(updatedItem.groups, newCheckedState);
                }

                updatedItems[itemName] = updatedItem;
                return updatedItems;
            }, {});
        };

        const group = prevState[groupName];
        const newCheckedState = !group.checked;

        // Update all characters and nested groups within this group to match the new checked state
        const updatedGroup = { ...group, checked: newCheckedState };
        if (updatedGroup.characters) {
            updatedGroup.characters = updateCheckedState(updatedGroup.characters, newCheckedState);
        }
        if (updatedGroup.groups) {
            updatedGroup.groups = updateCheckedState(updatedGroup.groups, newCheckedState);
        }

        return {
            ...prevState,
            [groupName]: updatedGroup,
        };
    });
};




  
  
  

  return (
    <div className="characters-container">
      <h2 className="characters-title">CHARACTERS</h2>
      {Object.keys(dropdownStates).map((group, index) => (
        <div key={index} className="checkbox-container">
          <CharacterGroupDropdown
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
