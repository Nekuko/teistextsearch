import React, { useState } from 'react';
import CharacterSubgroupCharacterDropdown from './CharacterSubgroupCharacterDropdown'; // Import your CharacterDropdown component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../menus/DropdownMenu.css';

function CharacterSubgroupDropdown({
    subgroupName,
    dropdownName,
    dropdownStates,
    setDropdownStates,
    namedCharacters,
    characterImages
}) {

    const handleGroupClick = () => {
        // Close all other subgroups within the same dropdown
        const updatedCharacters = { ...dropdownStates[dropdownName].characters };
        const updatedSubCharacters = { ...dropdownStates[dropdownName].groups[subgroupName].characters };

        for (const charName in updatedCharacters) {
            if (updatedCharacters[charName].open) {
                updatedCharacters[charName].open = false;
            }
        }

        for (const charName in updatedSubCharacters) {
            if (updatedSubCharacters[charName].open) {
                updatedSubCharacters[charName].open = false;
            }
        }

        const updatedGroups = { ...dropdownStates[dropdownName].groups };
        for (const group in updatedGroups) {
            if (group !== subgroupName) {
                updatedGroups[group].open = false;
            }
        }

        // Toggle the 'open' property for the selected subgroup
        const updatedSubgroup = {
            ...updatedGroups[subgroupName],
            open: !updatedGroups[subgroupName].open,
            characters: updatedSubCharacters, // Add this line to update the characters
        };

        // Update the state with the modified subgroup and other subgroups
        setDropdownStates((prevState) => ({
            ...prevState,
            [dropdownName]: {
                ...prevState[dropdownName],
                groups: {
                    ...updatedGroups,
                    [subgroupName]: updatedSubgroup,
                },
                characters: {
                    ...updatedCharacters
                }
            },
        }));
    };


    const selectedGroup = dropdownStates[dropdownName].groups[subgroupName];
    const handleGroupCheck = (selectedGroup) => {
        // Toggle the 'checked' state for the subgroup
        const newCheckedState = !selectedGroup.checked;

        // Update all characters within this subgroup to match the new checked state
        const updatedCharacters = Object.keys(selectedGroup.characters).reduce((characters, characterName) => {
            const character = selectedGroup.characters[characterName];
            // Create a new object for character with all options set to the new checked state
            const updatedCharacterOptions = Object.keys(character).reduce((options, key) => {
                if (key !== 'checked' && key !== 'open') {
                    options[key] = newCheckedState;
                } else {
                    options[key] = character[key];
                }
                return options;
            }, {});
        
            // Check if namedCharacters exists and only update characters whose name is in the list
            if (namedCharacters.length > 0) {
                if (namedCharacters.includes(characterName)) {
                    characters[characterName] = {
                        ...updatedCharacterOptions,
                        checked: newCheckedState, // Update the 'checked' property for the character
                    };
                } else {
                    characters[characterName] = character;
                }
            } else {
                characters[characterName] = {
                    ...updatedCharacterOptions,
                    checked: newCheckedState, // Update the 'checked' property for the character
                };
            }
                
        
            return characters;
        }, {});

        // Update the state with the modified subgroup and characters
        setDropdownStates((prevState) => {
            // Check if all groups are in the same checked state as newCheckedState
            const groups = prevState[dropdownName].groups;
            const characters = prevState[dropdownName].characters; // Assuming this is where the characters are stored

            const anyGroupChecked = Object.keys(groups).some(key =>
                key === subgroupName ? newCheckedState : groups[key].checked
            );

            const anyCharacterChecked = characters && Object.keys(characters).some(key =>
                characters[key].checked
            );

            const updatedCheckedState = anyGroupChecked || anyCharacterChecked;

            return {
                ...prevState,
                [dropdownName]: {
                    ...prevState[dropdownName],
                    checked: updatedCheckedState, // Conditionally update based on other groups
                    groups: {
                        ...prevState[dropdownName].groups,
                        [subgroupName]: {
                            ...selectedGroup,
                            checked: newCheckedState, // Always update subgroup
                            characters: updatedCharacters, // Always update characters
                        },
                    },
                },
            };
        });
    };

    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredCharacters = Object.keys(selectedGroup.characters || {}).filter((characterName) =>
        characterName.toLowerCase().includes(filter.toLowerCase())
    );






    return (
        <div className="episode-list">
          <div className="item-header">
            <div className="volume-trigger-drop">
              <div onClick={handleGroupClick}>
                <span
                  className={`season-title ${
                    selectedGroup.checked ? '' : 'dimmed'
                  }`}
                >
                  {subgroupName}
                </span>
                <FontAwesomeIcon
                  className="dropdown-icon-main"
                  icon={selectedGroup.open ? faChevronUp : faChevronDown}
                />
              </div>
            </div>
            <input
              type="checkbox"
              checked={selectedGroup.checked}
              onChange={(event) => handleGroupCheck(selectedGroup)}
              disabled={
                namedCharacters.length > 0 &&
                Object.keys(selectedGroup.characters).every(
                  (characterName) =>
                    !namedCharacters.includes(characterName)
                )
              }
            />
          </div>
      
          {selectedGroup.open && (
            <div>
              <input
                type="text"
                value={filter}
                onChange={handleFilterChange}
                placeholder="Search..."
              />
              {/* Render filtered characters within the subgroup */}
              {filteredCharacters.map((characterName) => (
                <CharacterSubgroupCharacterDropdown
                  key={characterName} // Don't forget to add a key for list items
                  characterName={characterName}
                  subgroupName={subgroupName}
                  dropdownName={dropdownName}
                  dropdownStates={dropdownStates}
                  setDropdownStates={setDropdownStates}
                  namedCharacters={namedCharacters}
                  characterImages={characterImages}
                />
              ))}
            </div>
          )}
        </div>
      );
      
      
};

export default CharacterSubgroupDropdown;
