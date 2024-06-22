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
}) {

  const dropdownRef = useRef(null);
  const selectedGroup = dropdownStates[dropdownName];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (event.target.type !== 'checkbox') {
          // Update the dropdown state to close it
          setDropdownStates(prevState => ({
            ...prevState,
            [dropdownName]: {
              ...prevState[dropdownName],
              open: false, // Set open to false to close the dropdown
              // Reset other state as needed
            },
          }));
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
    // Implement your logic for handling group click here
    // For example, toggle the 'open' property
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

  const handleGroupChange = (groupKey) => {
    // Implement your logic for handling group selection here
    // For example, toggle the 'checked' property
    const updatedGroup = {
      ...selectedGroup,
      checked: !selectedGroup.checked,
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
  const filteredGroups = Object.keys(selectedGroup.groups || {}).filter((groupName) =>
    groupName.toLowerCase().includes(filter.toLowerCase())
  );

  // Filter characters based on the filter value
  const filteredCharacters = Object.keys(selectedGroup.characters || {}).filter((characterName) =>
    characterName.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div className="dropdown" ref={dropdownRef}>
        <div className="checkbox-container">
          <div onClick={handleGroupClick}>
            <span className={selectedGroup.checked ? '' : 'dimmed'}>{dropdownName}</span>
            <FontAwesomeIcon className="dropdown-icon-main" icon={selectedGroup.open ? faChevronUp : faChevronDown} />
          </div>
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
              />
            </div>
          ))}

          
        </div>
      )}
    </div>
    </div>
  );
}

export default CharacterGroupDropdown;