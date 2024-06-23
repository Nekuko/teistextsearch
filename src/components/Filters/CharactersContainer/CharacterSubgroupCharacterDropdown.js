import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function CharacterSubgroupCharacterDropdown({
    characterName,
    dropdownName,
    dropdownStates,
    subgroupName,
    setDropdownStates,
    namedCharacters,
    characterImages
}) {
    const characterData = dropdownStates[dropdownName].groups[subgroupName].characters[characterName];

    const handleCheckboxChange = () => {
        const newCheckedState = !characterData.checked;
    
        setDropdownStates((prevState) => {
            // Create a copy of characters within the group
            const updatedCharacters = { ...prevState[dropdownName].groups[subgroupName].characters };
            // Create a copy of groups at the dropdown level
            const updatedGroups = { ...prevState[dropdownName].groups };
            const updatedMainCharacters = { ...prevState[dropdownName].characters };
    
            // Update the current character's checked state and its options in the copy
            updatedCharacters[characterName] = {
                ...updatedCharacters[characterName],
                checked: newCheckedState,
                // Set all options to match the newCheckedState
                ...Object.keys(updatedCharacters[characterName]).reduce((options, key) => {
                    if (key !== 'checked' && key !== 'open') {
                        options[key] = newCheckedState;
                    }
                    return options;
                }, {}),
            };
    
            // Determine if any characters within the group are checked, excluding 'open' value
            const isAnyCharacterChecked = Object.values(updatedCharacters).some((character) => {
                return Object.entries(character).some(([key, value]) => {
                    if (key !== 'checked' && key !== 'open') {
                        return value === true;
                    }
                    return false;
                }) || character.checked;
            });
    
            // Update based on any characters being checked within the group
            updatedGroups[subgroupName] = {
                ...updatedGroups[subgroupName],
                checked: isAnyCharacterChecked,
                characters: updatedCharacters,
            };
    
            const isAnyGroupChecked = Object.values(updatedGroups).some(group => group.checked);
            const isAnyMainCharacterChecked = Object.values(updatedMainCharacters).some(character => character.checked);

            // Update the dropdown's checked state based on groups or if the current character is checked
            const isDropdownChecked = isAnyGroupChecked || newCheckedState || isAnyMainCharacterChecked;
            
            return {
                ...prevState,
                [dropdownName]: {
                    ...prevState[dropdownName],
                    checked: isDropdownChecked, // This will now also consider the current character's newCheckedState
                    groups: updatedGroups,
                },
            };
        });
    };

    const handleOpenToggle = () => {
        setDropdownStates((prevState) => {
            const updatedCharacters = { ...prevState[dropdownName].groups[subgroupName].characters };
            for (const charName in updatedCharacters) {
                if (charName !== characterName && updatedCharacters[charName].open) {
                    updatedCharacters[charName].open = false;
                }
            }
    
            return {
                ...prevState,
                [dropdownName]: {
                    ...prevState[dropdownName],
                    groups: {
                        ...prevState[dropdownName].groups,
                        [subgroupName]: {
                            ...prevState[dropdownName].groups[subgroupName],
                            characters: {
                                ...updatedCharacters,
                                [characterName]: {
                                    ...characterData,
                                    open: !characterData.open,
                                },
                            },
                        },
                    },
                },
            };
        });
    };
    

    const handleCheckboxChangeOption = (optionKey) => {
        // Toggle the checked state of the option key
        setDropdownStates((prevState) => {
    
            // Create a copy of characters within the group
            const updatedCharacters = { ...prevState[dropdownName].groups[subgroupName].characters };
    
            // Create a copy of groups at the dropdown level
            const updatedGroups = { ...prevState[dropdownName].groups };
            const updatedMainCharacters = { ...prevState[dropdownName].characters };
    
            // Update the current character's checked state and option in the copy
            const updatedCharacterData = {
                ...updatedCharacters[characterName],
                [optionKey]: !updatedCharacters[characterName][optionKey],
            };
    
            // Set the character's checked state based on any option being checked
            updatedCharacterData.checked = Object.keys(updatedCharacterData).some(
                (key) => key !== 'checked' && key !== 'open' && updatedCharacterData[key]
            );
    
    
            // Update the character in the characters copy
            updatedCharacters[characterName] = updatedCharacterData;
    
            // Check if any character within the group is checked
            const isAnyCharacterChecked = Object.values(updatedCharacters).some(character => character.checked);
            
    
            // Update based on any characters being checked within the group
            updatedGroups[subgroupName] = {
                ...updatedGroups[subgroupName],
                checked: isAnyCharacterChecked,
                characters: updatedCharacters,
            };
    
            // Determine if any groups are checked
            const isAnyGroupChecked = Object.values(updatedGroups).some(group => group.checked);
            
    
            // Determine if any main characters are checked
            const isAnyMainCharacterChecked = Object.values(updatedMainCharacters).some(character => character.checked);
    
    
            const newState = {
                ...prevState,
                [dropdownName]: {
                    ...prevState[dropdownName],
                    checked: isAnyGroupChecked || isAnyMainCharacterChecked, // This will now also consider main characters and groups
                    groups: updatedGroups,
                    characters: updatedMainCharacters, // Include main characters in the update
                },
            };
            
            return newState;
        });
    };
    
    
    
    
    





    const hasDropdownOptions = Object.keys(characterData).some(
        (key) => key !== 'checked' && key !== 'open'
    );

    return (
        <div className="episode-list">
          <div className="item-header">
            <div className="volume-trigger-drop">
            {characterImages[characterName] && <img className="characters-container-image" src={characterImages[characterName]} alt={characterName} />}
              <span
                className={
                  characterData.checked ? "episode-checked" : "episode-unchecked"
                }
              >
                <div className="episode-name">
                  <span className="season-title" title={characterName}>
                    {characterName}
                  </span>
                  {hasDropdownOptions && (
                    <FontAwesomeIcon
                      className="dropdown-icon"
                      icon={characterData.open ? faChevronUp : faChevronDown}
                      onClick={handleOpenToggle}
                    />
                  )}
                </div>
              </span>
            </div>
            <input
              type="checkbox"
              checked={characterData.checked}
              onChange={() => handleCheckboxChange()}
              disabled={
                namedCharacters.length > 0 && !namedCharacters.includes(characterName)
              }
            />
          </div>
          {hasDropdownOptions && characterData.open && (
            <div className="episode-list">
              {Object.keys(characterData)
                .filter((key) => key !== "checked" && key !== "open")
                .map((optionKey, index) => (
                  <div key={index} className="item-header">
                    <div className="volume-trigger-drop">
                    {characterImages[optionKey] && <img className="characters-container-image-small" src={characterImages[optionKey]} alt={optionKey} />}
                      <span
                        className={
                          characterData[optionKey]
                            ? "episode-checked"
                            : "episode-unchecked"
                        }
                      >
                        <span className="episode-text" title={optionKey}>
                          {optionKey}
                        </span>
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={!!characterData[optionKey]}
                      onChange={() => handleCheckboxChangeOption(optionKey)}
                      disabled={
                        namedCharacters.length > 0 &&
                        !namedCharacters.includes(characterName)
                      }
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      );
      
}

export default CharacterSubgroupCharacterDropdown;
