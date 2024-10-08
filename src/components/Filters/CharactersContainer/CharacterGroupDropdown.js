import React, { useState, useEffect, useRef } from 'react';
import CharacterSubgroupDropdown from './CharacterSubgroupDropdown';
import CharacterDropdown from './CharacterDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function CharacterGroupDropdown({
  dropdownName,
  dropdownStates,
  setDropdownStates,
  namedCharacters,
  characterImages
}) {

  const dropdownRef = useRef(null);
  const selectedGroup = dropdownStates[dropdownName];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (event.target.type !== 'checkbox') {
          // Close all open dropdowns
          setDropdownStates((prevState) => {
            const updatedState = { ...prevState };
            setFilter('');
            for (const name in updatedState) {
              updatedState[name].open = false;
              updatedState[name].filters = '';
              // Reset other state properties as needed
              if (updatedState[name].groups) {
                for (const groupName in updatedState[name].groups) {
                  updatedState[name].groups[groupName].open = false;
                  // Reset other group properties as needed
                }
              }
              if (updatedState[name].characters) {
                for (const charName in updatedState[name].characters) {
                  const character = updatedState[name].characters[charName];
                  for (const key in character) {
                    if (key === 'open') {
                      character[key] = false;
                    }
                  }
                }
              }
            }
            return updatedState;
          });
        }
      }
    };

    // Add event listener if the dropdown is open
    if (selectedGroup.open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Clean up event listener on component unmount or when dropdown closes
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedGroup.open, dropdownName, setDropdownStates]);



  const [filter, setFilter] = useState(''); // State for the filter input
  const handleGroupClick = () => {
    const updatedGroup = {
      ...selectedGroup,
      open: !selectedGroup.open,
    };

    // Update the state with the modified group
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdownName]: updatedGroup,
    }));
  };

  const handleFilterChange = (event) => {
    // Update the filter state based on user input
    setFilter(event.target.value);
  };

  // Filter subgroups based on the filter value
  const filteredGroups = Object.keys(selectedGroup.groups || {}).filter((groupName) => {
    const group = selectedGroup.groups[groupName];
    const groupCharacters = group.characters || {};
    return groupName.toLowerCase().includes(filter.toLowerCase()) || Object.keys(groupCharacters).some((characterName) => {
      if (Object.keys(groupCharacters[characterName]).length > 2) {
        let charKeys = Object.keys(groupCharacters[characterName]);
        charKeys = charKeys.some((key) => key !== "checked" && key !== "open" && key.toLowerCase().includes(filter.toLowerCase()));
        return charKeys;
      } else {
        return characterName.toLowerCase().includes(filter.toLowerCase());
      }
    });
  });

  // Filter characters based on the filter value
  const filteredCharacters = Object.keys(selectedGroup.characters || {}).filter((characterName) => {
    if (selectedGroup.open === true) {
      if (Object.keys(selectedGroup.characters[characterName]).length > 2) {
        let charKeys = Object.keys(selectedGroup.characters[characterName]);
        charKeys = charKeys.some((key) => key !== "checked" && key !== "open" && key.toLowerCase().includes(filter.toLowerCase()));
        return charKeys
      } else {
        return characterName.toLowerCase().includes(filter.toLowerCase());
      }
    }
    return {};

  });


  return (
    <div className="dropdown" ref={dropdownRef}>
      <div onClick={handleGroupClick}>
        <span className={selectedGroup.checked ? '' : 'dimmed'}>{dropdownName}</span>
        <FontAwesomeIcon className="dropdown-icon-main" icon={selectedGroup.open ? faChevronUp : faChevronDown} />
      </div>
      {selectedGroup.open && (
        <div className="dropdown-menu">
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Search..."
          />
          {filteredCharacters.map((characterName) => (
            <div key={characterName}>
              <CharacterDropdown
                characterName={characterName}
                dropdownName={dropdownName}
                dropdownStates={dropdownStates}
                setDropdownStates={setDropdownStates}
                namedCharacters={namedCharacters}
                characterImages={characterImages}
              />
            </div>
          ))}
          {filteredGroups.map((groupName) => (
            <div key={groupName}>
              <CharacterSubgroupDropdown
                subgroupName={groupName}
                dropdownName={dropdownName}
                dropdownStates={dropdownStates}
                setDropdownStates={setDropdownStates}
                namedCharacters={namedCharacters}
                characterImages={characterImages}
              />
            </div>
          ))}


        </div>
      )}
    </div>
  );
}

export default CharacterGroupDropdown;