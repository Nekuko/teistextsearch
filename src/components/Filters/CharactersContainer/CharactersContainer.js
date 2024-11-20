import React, { useEffect, useState } from 'react';
import './CharactersContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight, faN } from '@fortawesome/free-solid-svg-icons';
import CharacterGroupDropdown from './CharacterGroupDropdown.js';
function CharactersContainer({
  dropdownStates,
  setDropdownStates,
  namedCharacters,
  namedActive,
  setNamedActive,
  characterImages,
}) {

  let [allOpen, setAllOpen] = useState(false);
  useEffect(() => {
    if (namedActive) {
      // Assuming you have a list of character names called namedCharacters
      const namedCharacterSet = new Set(namedCharacters);

      // Update the state to uncheck characters not in the namedCharacters list
      setDropdownStates((prevState) => {
        const updatedState = { ...prevState };
        for (const dropdownName in updatedState) {
          const dropdown = updatedState[dropdownName];
          if (dropdown.characters) {
            for (const charName in dropdown.characters) {
              const character = dropdown.characters[charName];
              if (character.checked && !namedCharacterSet.has(charName)) {
                for (const key in character) {
                  if (typeof character[key] === 'boolean') {
                    character[key] = false;
                  }
                }
              }
            }
          }
          if (dropdown.groups) {
            for (const groupName in dropdown.groups) {
              const group = dropdown.groups[groupName];
              if (group.characters) {
                for (const charName in group.characters) {
                  const character = group.characters[charName];
                  if (character.checked && !namedCharacterSet.has(charName)) {
                    for (const key in character) {
                      if (typeof character[key] === 'boolean') {
                        character[key] = false;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        for (const dropdownName in updatedState) {
          const dropdown = updatedState[dropdownName];
          let allUnchecked = true; // Flag to track if all characters are unchecked

          if (Object.keys(dropdown.characters).length > 0) {
            for (const charName in dropdown.characters) {
              const character = dropdown.characters[charName];
              if (character.checked) {
                allUnchecked = false;
                break; // Exit loop if any character is checked
              }
            }
          } else {
            allUnchecked = false;
          }

          if (allUnchecked) {
            // Uncheck the entire dropdown
            dropdown.checked = false;
          }

          if (dropdown.groups) {
            for (const groupName in dropdown.groups) {
              const group = dropdown.groups[groupName];
              let allGroupUnchecked = true; // Flag to track if all characters in the group are unchecked

              if (group.characters) {
                for (const charName in group.characters) {
                  const character = group.characters[charName];
                  if (character.checked) {
                    allGroupUnchecked = false;
                    break; // Exit loop if any character in the group is checked
                  }
                }
              }

              if (allGroupUnchecked) {
                // Uncheck the entire group
                group.checked = false;
              }
            }
          }
        }
        return updatedState;
      });
    }
  }, [namedCharacters]);

  const handleReset = () => {
    setNamedActive(false);
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
    // Set namedActive to true
    setNamedActive(!namedActive);

    // Assuming you have a list of character names called namedCharacters
    const namedCharacterSet = new Set(namedCharacters);

    // Update the state to uncheck characters not in the namedCharacters list
    setDropdownStates((prevState) => {
      const updatedState = { ...prevState };
      for (const dropdownName in updatedState) {
        const dropdown = updatedState[dropdownName];
        if (dropdown.characters) {
          for (const charName in dropdown.characters) {
            const character = dropdown.characters[charName];
            if (character.checked && !namedCharacterSet.has(charName)) {
              for (const key in character) {
                if (typeof character[key] === 'boolean') {
                  character[key] = false;
                }
              }
            }
          }
        }
        if (dropdown.groups) {
          for (const groupName in dropdown.groups) {
            const group = dropdown.groups[groupName];
            if (group.characters) {
              for (const charName in group.characters) {
                const character = group.characters[charName];
                if (character.checked && !namedCharacterSet.has(charName)) {
                  for (const key in character) {
                    if (typeof character[key] === 'boolean') {
                      character[key] = false;
                    }
                  }
                }
              }
            }
          }
        }
      }
      for (const dropdownName in updatedState) {
        const dropdown = updatedState[dropdownName];
        let allUnchecked = true; // Flag to track if all characters are unchecked

        if (Object.keys(dropdown.characters).length > 0) {
          for (const charName in dropdown.characters) {
            const character = dropdown.characters[charName];
            if (character.checked) {
              allUnchecked = false;
              break; // Exit loop if any character is checked
            }
          }
        } else {
          allUnchecked = false;
        }

        if (allUnchecked) {
          // Uncheck the entire dropdown
          dropdown.checked = false;
        }

        if (dropdown.groups) {
          for (const groupName in dropdown.groups) {
            const group = dropdown.groups[groupName];
            let allGroupUnchecked = true; // Flag to track if all characters in the group are unchecked

            if (group.characters) {
              for (const charName in group.characters) {
                const character = group.characters[charName];
                if (character.checked) {
                  allGroupUnchecked = false;
                  break; // Exit loop if any character in the group is checked
                }
              }
            }

            if (allGroupUnchecked) {
              // Uncheck the entire group
              group.checked = false;
            }
          }
        }
      }
      return updatedState;
    });
  };





  const handleCheckboxChange = (groupName) => {
    setDropdownStates((prevState) => {
      const updateCheckedState = (items, newCheckedState) => {
        return Object.keys(items).reduce((updatedItems, itemName) => {
          const item = items[itemName];
          const updatedItem = { ...item, checked: newCheckedState };

          if (namedActive) {
            if (Object.keys(updatedItem).length === 1) {
              if (namedCharacters.includes(itemName)) {
                updatedItem.checked = newCheckedState
              } else {
                updatedItem.checked = false;
              }

            } else if (!Object.keys(updatedItem).includes('openGroup')) {

              if (namedCharacters.includes(itemName)) {
                updatedItem.checked = newCheckedState;
                Object.keys(updatedItem).forEach((object) => {
                  updatedItem[object] = newCheckedState;
                });
              } else {

                updatedItem.checked = false;
                Object.keys(updatedItem).forEach((object) => {
                  updatedItem[object] = false;
                });
              }

            }
          }

          // Update options for this item
          if (!namedActive) {
            Object.keys(updatedItem).forEach((key) => {
              if (key !== 'checked' && key !== 'open' && key !== 'groups' && key !== 'characters') {
                updatedItem[key] = newCheckedState;
              }
            });
          }


          // If this item has characters, update them
          if (updatedItem.characters) {
            updatedItem.characters = updateCheckedState(updatedItem.characters, newCheckedState);
            if (namedActive) {
              Object.keys(updatedItem.characters).forEach((characterName) => {
                const character = updatedItem.characters[characterName];
                if (typeof character === 'object') {
                  if (namedCharacters.includes(characterName)) {
                    updatedItem.characters[characterName].checked = newCheckedState;
                    Object.keys(updatedItem.characters[characterName]).forEach((object) => {
                      updatedItem.characters[characterName][object] = newCheckedState;
                    });
                  } else {
                    updatedItem.characters[characterName].checked = false;
                    Object.keys(updatedItem.characters[characterName]).forEach((object) => {
                      updatedItem.characters[characterName][object] = false;
                    });
                  }
                } else {
                  if (namedCharacters.includes(characterName)) {
                    updatedItem.characters[characterName].checked = newCheckedState;
                  } else {
                    updatedItem.characters[characterName].checked = false;
                  }
                }

              });
            }
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
      {Object.keys(dropdownStates).map((group, index) => {
        const groups = dropdownStates[group].groups;
        const characters = dropdownStates[group].characters; // Assuming this is where the characters are stored
        let allGroupsBad = true; // Initialize to true, assuming all groups are bad initially
        let allCharactersBad = false;

        if (namedActive) {
          if (groups) {
            for (const groupName in groups) {
              const groupCharacters = groups[groupName].characters;
              const groupHasBadCharacter = Object.keys(groupCharacters).every(key =>
                !namedCharacters.includes(key)
              );

              if (!groupHasBadCharacter) {
                allGroupsBad = false; // Set to false if any group has a good character
                break;
              }
            }
          } else {
            allGroupsBad = false; // No groups, so set to false
          }

          if (characters) {
            allCharactersBad = Object.keys(characters).every(key =>
              !namedCharacters.includes(key)
            );
          } else {
            allCharactersBad = true; // No characters, so assume all are bad
          }
        }

        const updatedCheckedState = allGroupsBad && allCharactersBad;

        return (
          <div key={index} className="checkbox-container">
            <CharacterGroupDropdown
              dropdownName={group.toUpperCase()}
              dropdownStates={dropdownStates}
              setDropdownStates={setDropdownStates}
              namedCharacters={namedActive ? namedCharacters : []}
              disabled={updatedCheckedState}
              characterImages={characterImages}
            />
            <input
              type="checkbox"
              checked={dropdownStates[group].checked}
              onChange={() => handleCheckboxChange(group)}
              disabled={updatedCheckedState}
            />
          </div>
        );
      })}
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
