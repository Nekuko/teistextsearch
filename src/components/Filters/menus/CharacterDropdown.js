import React, { useState, useMemo, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './DropdownMenu.css';

function CharacterDropdown({ dropdownName, dropdownStates, setDropdownStates, namedCharacters }) {
  const { openGroup, checked, filters, characters } = dropdownStates[dropdownName];
  const dropdownRef = useRef(null);

  // Add an event listener to the document when the dropdown is open
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Ignore clicks on the checkbox
        if (event.target.type !== 'checkbox') {
          setDropdownStates(prevState => ({ ...prevState, [dropdownName]: { ...prevState[dropdownName], openGroup: false } }));
        }
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
    if (namedCharacters.length > 0 && !namedCharacters.includes(character)) {
      return; // Ignore characters not in the namedCharacters list
    }

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
    if (namedCharacters.length > 0 && !namedCharacters.includes(character)) {
      return; // Ignore characters not in the namedCharacters list
    }

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


  // Handler for subattribute checkbox
  const handleSubattributeCheck = (character, attribute, subattribute) => {
    const isSubattributeChecked = !characters[character]?.[attribute]?.[subattribute]?.checked;
    const updatedSubattributes = {
      ...characters[character][attribute],
      [subattribute]: {
        ...characters[character][attribute][subattribute],
        checked: isSubattributeChecked
      }
    };

    // Update the state with the new subattributes
    setDropdownStates(prevState => ({
      ...prevState,
      [dropdownName]: {
        ...prevState[dropdownName],
        characters: {
          ...prevState[dropdownName].characters,
          [character]: {
            ...prevState[dropdownName].characters[character],
            [attribute]: updatedSubattributes
          }
        }
      }
    }));
  };

  // Handler for attribute dropdown click
  const handleAttributeDropdownClick = (character, attribute) => {
    const isOpen = characters[character]?.[attribute]?.open;
    const updatedAttributes = {
      ...characters[character],
      [attribute]: {
        ...characters[character][attribute],
        open: !isOpen
      }
    };

    // Update the state with the new attributes open state
    setDropdownStates(prevState => ({
      ...prevState,
      [dropdownName]: {
        ...prevState[dropdownName],
        characters: {
          ...prevState[dropdownName].characters,
          [character]: updatedAttributes
        }
      }
    }));
  };

  // Handler for subattribute dropdown click (if needed)
  const handleSubattributeDropdownClick = (character, attribute, subattribute) => {
    const isOpen = characters[character]?.[attribute]?.[subattribute]?.open;
    const updatedSubattributes = {
      ...characters[character][attribute],
      [subattribute]: {
        ...characters[character][attribute][subattribute],
        open: !isOpen
      }
    };

    // Update the state with the new subattributes open state
    setDropdownStates(prevState => ({
      ...prevState,
      [dropdownName]: {
        ...prevState[dropdownName],
        characters: {
          ...prevState[dropdownName].characters,
          [character]: {
            ...prevState[dropdownName].characters[character],
            [attribute]: updatedSubattributes
          }
        }
      }
    }));
  };





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
            const isDisabled = namedCharacters.length > 0 && !namedCharacters.includes(character);
            return (
              <div key={index}>
                <div className="item-header">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span
                      className={`character-title ${characters[character]?.checked ? '' : 'dimmed'}`}
                      onClick={() => !isDisabled && handleCharacterCheck(character)}
                    >
                      {character}
                    </span>
                    {hasAttributes && <FontAwesomeIcon className="dropdown-icon" icon={characters[character]?.open ? faChevronUp : faChevronDown} onClick={() => !isDisabled && handleCharacterDropdownClick(character)} />}
                  </div>
                  <input
                    type="checkbox"
                    checked={!!characters[character]?.checked}
                    onChange={(event) => {
                      event.stopPropagation(); // Prevent the event from bubbling up to the div
                      !isDisabled && handleCharacterCheck(character);
                    }}
                    disabled={isDisabled}
                  />
                </div>
                {characters[character]?.open && (
                  <div className="attribute-list">
                    {characterAttributes.map((attribute, index) => {
                      const subAttributes = Object.keys(characters[character][attribute]).filter(subAttribute => subAttribute !== 'checked' && subAttribute !== 'open');
                      const hasAttributes = subAttributes.length > 0;
                      return (
                        <div key={index} className="item-header">
                          {hasAttributes ? (
                            // Render dropdown menu for attributes with subattributes
                            <div className="dropdown">
                              <div onClick={() => !isDisabled && handleAttributeDropdownClick(character, attribute)}>
                                <span
                                  className={`attribute-title ${characters[character]?.[attribute]?.checked ? '' : 'dimmed'}`}
                                >
                                  {attribute}
                                </span>
                                <FontAwesomeIcon className="dropdown-icon" icon={characters[character]?.[attribute]?.open ? faChevronUp : faChevronDown} />
                              </div>
                              {characters[character]?.[attribute]?.open && (
                                <div className="dropdown-menu">
                                  {Object.keys(characters[character][attribute]).map((subattribute, subIndex) => (
                                    <div key={subIndex} className="attribute-item">
                                      <span
                                        className={`attribute-title ${characters[character]?.[attribute]?.[subattribute]?.checked ? '' : 'dimmed'}`}
                                        onClick={() => !isDisabled && handleSubattributeDropdownClick(character, attribute, subattribute)}
                                      >
                                        {subattribute}
                                      </span>
                                      {characters[character]?.[attribute]?.[subattribute]?.open && (
                                        // Render interactive elements for subattributes here
                                        <input
                                          type="checkbox"
                                          checked={!!characters[character]?.[attribute]?.[subattribute]?.checked}
                                          onChange={() => !isDisabled && handleSubattributeCheck(character, attribute, subattribute)}
                                          disabled={isDisabled}
                                        />
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            // Render checkbox for attributes without subattributes
                            <span className={characters[character]?.[attribute]?.checked ? "attribute-unchecked" : "attribute-checked"}>
                              {attribute}
                            </span>
                          )}
                          <input
                            type="checkbox"
                            checked={!!characters[character]?.[attribute]?.checked}
                            onChange={() => !isDisabled && handleAttributeCheck(character, attribute)}
                            disabled={isDisabled}
                          />
                        </div>
                      );
                    })}
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
