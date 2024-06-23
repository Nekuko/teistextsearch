import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function CharacterDropdown({
    characterName,
    dropdownName,
    dropdownStates,
    setDropdownStates,
    namedCharacters,
    characterImages
}) {
    const characterData = dropdownStates[dropdownName].characters[characterName];


    const handleCheckboxChange = () => {
        setDropdownStates((prevState) => {
            const updatedGroups = { ...prevState[dropdownName].groups };
            const updatedCharacters = { ...prevState[dropdownName].characters };
            const newCheckedState = !characterData.checked;
    
            // Update the current character's checked state and its options
            updatedCharacters[characterName] = {
                ...updatedCharacters[characterName],
                checked: newCheckedState,
                // Toggle all options based on the new checked state
                ...Object.keys(updatedCharacters[characterName]).reduce((options, key) => {
                    if (key !== 'checked' && key !== 'open') {
                        options[key] = newCheckedState;
                    }
                    return options;
                }, {}),
            };
    
            // Check if any group or character is checked
            const anyGroupChecked = Object.keys(updatedGroups).some(key => updatedGroups[key].checked);
            const anyCharacterChecked = Object.keys(updatedCharacters).some(key => updatedCharacters[key].checked);
    
            // Update the 'checked' state for dropdown based on groups and characters
            const updatedDropdownCheckedState = anyGroupChecked || anyCharacterChecked;
    
            return {
                ...prevState,
                [dropdownName]: {
                    ...prevState[dropdownName],
                    checked: updatedDropdownCheckedState,
                    groups: updatedGroups,
                    characters: updatedCharacters,
                },
            };
        });
    };
    
    
    const handleOpenToggle = () => {
        setDropdownStates((prevState) => {
            const updatedCharacters = { ...prevState[dropdownName].characters };
            const updatedGroups = { ...prevState[dropdownName].groups };
            for (const charName in updatedCharacters) {
                if (charName !== characterName && updatedCharacters[charName].open) {
                    updatedCharacters[charName].open = false;
                }
            }

            for (const groupName in updatedGroups) {
                console.log(updatedGroups[groupName])
                if (updatedGroups[groupName].open) {
                    updatedGroups[groupName].open = false;
                }
            }
    
            return {
                ...prevState,
                [dropdownName]: {
                    ...prevState[dropdownName],
                    characters: {
                        ...updatedCharacters,
                        [characterName]: {
                            ...prevState[dropdownName].characters[characterName],
                            open: !characterData.open,
                        },
                    },
                    groups: {
                        ...updatedGroups
                    }
                },
            };
        });
    };
    
    
    const handleCheckboxChangeOption = (optionKey) => {
        setDropdownStates((prevState) => {
            const updatedCharacters = { ...prevState[dropdownName].characters };
            const updatedGroups = { ...prevState[dropdownName].groups };
            
            // Toggle the option's checked state
            updatedCharacters[characterName][optionKey] = !updatedCharacters[characterName][optionKey];
    
            // Determine if any options are checked
            const isAnyOptionChecked = Object.keys(updatedCharacters[characterName]).some(
                (key) => key !== 'checked' && key !== 'open' && updatedCharacters[characterName][key]
            );
    
            // Update the character's checked state based on options
            updatedCharacters[characterName].checked = isAnyOptionChecked;

            const isAnyGroupChecked = Object.values(updatedGroups).some(group => group.checked);

            // Determine if any main characters are checked
            const isAnyMainCharacterChecked = Object.values(updatedCharacters).some(character => character.checked);
    
            return {
                ...prevState,
                [dropdownName]: {
                    ...prevState[dropdownName],
                    checked: isAnyGroupChecked || isAnyMainCharacterChecked,
                    groups: updatedGroups,
                    characters: updatedCharacters,
                },
            };
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
                    {characterImages[optionKey] && <img className="characters-container-image-small" src={characterImages[optionKey]} alt={characterName} />}
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

export default CharacterDropdown;
