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
}) {
    const handleGroupClick = () => {
        // Implement your logic for handling subgroup click here
        // For example, toggle the 'checked' property
        const updatedGroup = {
            ...dropdownStates[dropdownName].groups[subgroupName],
            open: !dropdownStates[dropdownName].groups[subgroupName].open,
        };

        // Update the state with the modified subgroup
        setDropdownStates((prevState) => ({
            ...prevState,
            [dropdownName]: {
                ...prevState[dropdownName],
                groups: {
                    ...prevState[dropdownName].groups,
                    [subgroupName]: updatedGroup,
                },
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

            // Update characters with the modified character data and options
            characters[characterName] = {
                ...updatedCharacterOptions,
                checked: newCheckedState, // Update the 'checked' property for the character
            };
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
                        <span className={`season-title ${selectedGroup.checked ? '' : 'dimmed'}`}>{subgroupName}</span>
                        <FontAwesomeIcon className="dropdown-icon-main" icon={selectedGroup.open ? faChevronUp : faChevronDown} />
                    </div>
                </div>
                <input
                    type="checkbox"
                    checked={selectedGroup.checked}
                    onChange={(event) => handleGroupCheck(selectedGroup)}
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
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CharacterSubgroupDropdown;
