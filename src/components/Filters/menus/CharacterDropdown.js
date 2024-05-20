import React, { useState, useMemo, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './DropdownMenu.css';

function CharacterDropdown({ dropdownName, dropdownStates, setDropdownStates }) {
  const { openGroup, checked, filters, characters } = dropdownStates[dropdownName];

  const dropdownRef = useRef(null);

  // Add an event listener to the document when the dropdown is open
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownStates(prevState => ({ ...prevState, [dropdownName]: { ...prevState[dropdownName], openGroup: false } }));
      }
    };

    if (openGroup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openGroup]);

  const handleGroupClick = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up to the document
    setDropdownStates(prevState => ({ ...prevState, [dropdownName]: { ...prevState[dropdownName], openGroup: !prevState[dropdownName].openGroup } }));
  };

  const handleCharacterDropdownClick = (character) => {
    const isOpen = characters[character]?.open;
    const updatedCharacters = {
      ...characters,
      [character]: {
        ...characters[character],
        open: !isOpen
      }
    };

    setDropdownStates(prevState => ({
      ...prevState,
      [dropdownName]: {
        ...prevState[dropdownName],
        characters: updatedCharacters
      }
    }));
  };

  const handleCharacterCheck = (character) => {
    const isCharacterChecked = !characters[character]?.checked;
    const updatedCharacter = {
      ...characters[character],
      checked: isCharacterChecked
    };

    // Check or uncheck all attributes depending on the character's checkbox
    Object.keys(updatedCharacter).forEach(attribute => {
      if (attribute !== 'checked' && attribute !== 'open') {
        updatedCharacter[attribute] = isCharacterChecked;
      }
    });

    const updatedCharacters = {
      ...characters,
      [character]: updatedCharacter
    };

    // Check if any character is checked
    const anyCharacterChecked = Object.values(updatedCharacters).some(character => character.checked);

    setDropdownStates(prevState => ({
      ...prevState,
      [dropdownName]: {
        ...prevState[dropdownName],
        characters: updatedCharacters,
        checked: anyCharacterChecked
      }
    }));
  };

  const handleAttributeCheck = (character, attribute) => {
    const isAttributeChecked = !characters[character]?.[attribute];
    const updatedCharacter = {
      ...characters[character],
      [attribute]: isAttributeChecked
    };

    // Check if all attributes are unchecked
    const allChecks = Object.entries(updatedCharacter);
    const isAllUnchecked = allChecks.every(([name, checked]) => name === 'checked' || name === 'open' ? true : !checked);

    if (isAllUnchecked) {
      // If all attributes are unchecked, uncheck the character checkbox
      updatedCharacter.checked = false;
    } else {
      // If not all attributes are unchecked, check the character checkbox
      updatedCharacter.checked = true;
    }

    const updatedCharacters = {
      ...characters,
      [character]: updatedCharacter
    };

    // Check if any character is checked
    const anyCharacterChecked = Object.values(updatedCharacters).some(character => character.checked);

    setDropdownStates(prevState => ({
      ...prevState,
      [dropdownName]: {
        ...prevState[dropdownName],
        characters: updatedCharacters,
        checked: anyCharacterChecked
      }
    }));
  };

  const handleFilterChange = (event) => {
    setDropdownStates(prevState => ({ ...prevState, [dropdownName]: { ...prevState[dropdownName], filters: event.target.value } }));
  };

  const filteredCharacters = useMemo(() => {
    if (!filters) return Object.keys(characters);
    return Object.keys(characters).filter(character => {
      const characterAttributes = Object.keys(characters[character]).filter(attribute => attribute !== 'checked' && attribute !== 'open');
      return character.toLowerCase().includes(filters.toLowerCase()) || characterAttributes.some(attribute => attribute.toLowerCase().includes(filters.toLowerCase()));
    });
  }, [characters, filters]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div onClick={handleGroupClick}>
        <span className={checked ? '' : 'dimmed'}>{dropdownName}</span>
        <FontAwesomeIcon className="dropdown-icon-main" icon={openGroup ? faChevronUp : faChevronDown} />
      </div>
      {openGroup && (
        <div className="dropdown-menu">
          <input type="text" value={filters} onChange={handleFilterChange} placeholder="Search characters..." />
          {filteredCharacters.map((character, index) => {
            const characterAttributes = Object.keys(characters[character]).filter(attribute => attribute !== 'checked' && attribute !== 'open');
            const hasAttributes = characterAttributes.length > 0;
            return (
              <div key={index}>
                <div className="item-header">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span 
                      className={`character-title ${characters[character]?.checked ? '' : 'dimmed'}`} 
                      onClick={() => handleCharacterCheck(character)}
                    >
                      {character}
                    </span>
                    {hasAttributes && <FontAwesomeIcon className="dropdown-icon" icon={characters[character]?.open ? faChevronUp : faChevronDown} onClick={() => handleCharacterDropdownClick(character)} />}
                  </div>
                  <input
                    type="checkbox"
                    checked={!!characters[character]?.checked}
                    onChange={(event) => {
                      event.stopPropagation(); // Prevent the event from bubbling up to the div
                      handleCharacterCheck(character);
                    }}
                  />
                </div>
                {characters[character]?.open && (
                  <div className="attribute-list">
                    {characterAttributes.map((attribute, index) => (
                      <div key={index} className="attribute-item">
                        <span className={characters[character]?.[attribute] ? "attribute-unchecked" : "attribute-checked"}>
                          {attribute}
                        </span>
                        <input
                          type="checkbox"
                          checked={!!characters[character]?.[attribute]}
                          onChange={() => handleAttributeCheck(character, attribute)}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CharacterDropdown;
