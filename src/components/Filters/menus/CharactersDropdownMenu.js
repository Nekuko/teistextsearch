// CharacterDropdownMenu.js
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './DropdownMenu.css';

function CharacterDropdownMenu({ characterDropdownState, updateCharacterDropdownState, groups, openSG, setOpenSG }) {
  const { sgMainChecked, filter, openGroups, groupsChecked, characterFilters } = characterDropdownState;

  const dropdownRef = useRef(null);

  // Add an event listener to the document when the dropdown is open
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenSG(false);
      }
    };

    if (openSG) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openSG]);

  useEffect(() => {
    const allUnchecked = Object.values(groupsChecked).every(group => Object.values(group).every(checked => !checked));
    if (allUnchecked) {
      updateCharacterDropdownState('sgMainChecked', false);
    } else {
      updateCharacterDropdownState('sgMainChecked', true);
    }
  }, [groupsChecked]);

  const handleCharacterClick = () => {
    setOpenSG(!openSG);
  };

  const handleGroupClick = (group) => {
    // Close the currently open group's dropdown
    if (openGroups[group]) {
      updateCharacterDropdownState('openGroups', {
        ...openGroups,
        [group]: false
      });
    } else {
      // Close all group's dropdowns
      const newOpenGroups = Object.keys(openGroups).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      // Open the clicked group's dropdown
      newOpenGroups[group] = true;

      updateCharacterDropdownState('openGroups', newOpenGroups);
    }
  };

  const handleCharacterCheck = (group, character) => {
    const isCharacterChecked = !groupsChecked[group]?.[character];
    const updatedGroup = {
      ...groupsChecked[group],
      [character]: isCharacterChecked
    };

    // Check if all characters are unchecked
    const allChecks = Object.entries(updatedGroup);
    const isAllUnchecked = allChecks.every(([name, checked]) => name === 'checked' ? true : !checked);

    if (isAllUnchecked) {
      // If all characters are unchecked, uncheck the group checkbox
      updatedGroup.checked = false;
    } else {
      // If not all characters are unchecked, check the group checkbox
      updatedGroup.checked = true;
    }

    updateCharacterDropdownState('groupsChecked', {
      ...groupsChecked,
      [group]: updatedGroup
    });
  };

  const handleGroupCheck = (group) => {
    const isGroupChecked = !groupsChecked[group]?.checked;
    const updatedGroup = {
      ...groupsChecked[group],
    };
    Object.keys(updatedGroup).forEach(character => {
      updatedGroup[character] = isGroupChecked;
    });

    updateCharacterDropdownState('groupsChecked', {
      ...groupsChecked,
      [group]: { ...updatedGroup, checked: isGroupChecked }
    });
  };

  const handleFilterChange = (event, group) => {
    if (group) {
      updateCharacterDropdownState('characterFilters', {
        ...characterFilters,
        [group]: event.target.value
      });
    } else {
      updateCharacterDropdownState('filter', event.target.value);
    }
  };

  const filteredGroups = useMemo(() => {
    if (!filter) return groups;
    return groups.filter(group => group.name.toLowerCase().includes(filter.toLowerCase()));
  }, [groups, filter]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div onClick={handleCharacterClick}>
        <span className={sgMainChecked ? '' : 'dimmed'}>SHADOW GARDEN</span>
        <FontAwesomeIcon className="dropdown-icon-main"icon={openSG ? faChevronUp : faChevronDown} />
      </div>
      {openSG && (
        <div className = "dropdown-menu">
          <input type="text" value={filter} onChange={handleFilterChange} placeholder="Search groups..." />
          {filteredGroups.map((group, index) => (
            <div key={index}>
              <div className="item-header">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <span 
                    className={`group-title ${groupsChecked[group.name]?.checked ? '' : 'dimmed'}`} 
                    onClick={() => handleGroupClick(group.name)}
                  >
                    {group.name}
                  </span>
                  <FontAwesomeIcon className="dropdown-icon" icon={openGroups[group.name] ? faChevronUp : faChevronDown} onClick={() => handleGroupClick(group.name)} />
                </div>
                <input
                  type="checkbox"
                  checked={!!groupsChecked[group.name]?.checked}
                  onChange={() => handleGroupCheck(group.name)}
                />
              </div>
              {openGroups[group.name] && (
                <div>
                  <input type="text" value={characterFilters[group.name] || ''} onChange={(event) => handleFilterChange(event, group.name)} placeholder="Search characters..." />
                  <div className="character-list">
                  {group.characters.filter(character => !characterFilters[group.name] || character.name.toLowerCase().includes(characterFilters[group.name].toLowerCase())).map((character, index) => {
                  const [characterNumber, characterName] = character.name.split('|');
                  return (
                    <div key={index} className="character-item">
                      <span className={groupsChecked[group.name]?.[character.id] ? "character-checked" : "character-unchecked"}>
                        <span style={{color: 'red'}}>{characterNumber}</span>
                        <span className="character-name" title={characterName}>|{characterName}</span>
                      </span>
                      <input
                        type="checkbox"
                        checked={!!groupsChecked[group.name]?.[character.id]}
                        onChange={() => handleCharacterCheck(group.name, character.id)}
                      />
                    </div>
                  );
                })}

                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterDropdownMenu;
