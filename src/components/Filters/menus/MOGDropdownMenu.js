// MOGDropdownMenu.js
import React, { useEffect, useRef } from 'react';
import SevenShadowChroniclesDropdown from './SevenShadowChroniclesDropdown'; // Import the new component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './DropdownMenu.css';

function MOGDropdownMenu({ mogDropdownState, setMogDropdownState, openMOG, setOpenMOG }) {
  const { mogMainChecked, filter, openParts, partsChecked, sectionFilters } = mogDropdownState;

  const dropdownRef = useRef(null);

  // Add an event listener to the document when the dropdown is open
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMOG(false);
      }
    };

    if (openMOG) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMOG, setOpenMOG]);

  useEffect(() => {
    console.log(mogDropdownState)
    return;
    const allUnchecked = Object.values(partsChecked).every(part => Object.values(part).every(checked => !checked));
    if (allUnchecked) {
      setMogDropdownState(prevState => ({ ...prevState, mogMainChecked: false }));
    } else {
      setMogDropdownState(prevState => ({ ...prevState, mogMainChecked: true }));
    }
  }, [partsChecked, setMogDropdownState]);

  const handleMOGClick = () => {
    setOpenMOG(!openMOG);
  };

  const handlePartClick = (event, part) => {
    // Close the currently open part's dropdown
    if (openParts[part]) {
      setMogDropdownState(prevState => ({
        ...prevState,
        openParts: {
          ...prevState.openParts,
          [part]: false
        }
      }));
    } else {
      // Close all part's dropdowns
      const newOpenParts = Object.keys(openParts).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});

      // Open the clicked part's dropdown
      newOpenParts[part] = true;

      setMogDropdownState(prevState => ({
        ...prevState,
        openParts: newOpenParts
      }));
    }
  };

  const handleEpisodeCheck = (event, part, section, episode) => {
    event.stopPropagation();
    const isEpisodeChecked = !mogDropdownState.partsChecked["Seven Shadows Chronicles"][part]?.[section]?.[episode];
  
    // Create a new object for the updated section
    const updatedSection = {
      ...mogDropdownState.partsChecked["Seven Shadows Chronicles"][part]?.[section],
      [episode]: isEpisodeChecked
    };
  
    // Check if all episodes are unchecked
    const allChecks = Object.values(updatedSection).every(checked => !checked);
  
    if (allChecks) {
      // If all episodes are unchecked, uncheck the section checkbox
      updatedSection.checked = false;
    } else {
      // If not all episodes are unchecked, check the section checkbox
      updatedSection.checked = true;
    }
  
    // Create a new object for the updated part
    const updatedPart = {
      ...mogDropdownState.partsChecked["Seven Shadows Chronicles"][part],
      [section]: updatedSection
    };
  
    setMogDropdownState(prevState => ({
      ...prevState,
      partsChecked: {
        ...prevState.partsChecked,
        "Seven Shadows Chronicles": {
          ...prevState.partsChecked["Seven Shadows Chronicles"],
          [part]: updatedPart
        }
      }
    }));
  };
  

  const handleSectionCheck = (event, part, section) => {
    event.stopPropagation();
    const isSectionChecked = !mogDropdownState.partsChecked["Seven Shadows Chronicles"][part]?.[section]?.checked;
    const updatedSection = { ...mogDropdownState.partsChecked["Seven Shadows Chronicles"][part]?.[section] };
  
    Object.keys(updatedSection).forEach(episode => {
      if (episode !== 'checked') {
        updatedSection[episode] = isSectionChecked;
      }
    });
  
    setMogDropdownState(prevState => ({
      ...prevState,
      partsChecked: {
        ...prevState.partsChecked,
        "Seven Shadows Chronicles": {
          ...prevState.partsChecked["Seven Shadows Chronicles"],
          [part]: {
            ...prevState.partsChecked["Seven Shadows Chronicles"][part],
            [section]: { ...updatedSection, checked: isSectionChecked }
          }
        }
      }
    }));
  };
  
  const handlePartCheck = (event, part) => {
    event.stopPropagation();
    const isPartChecked = !mogDropdownState.partsChecked["Seven Shadows Chronicles"][part]?.checked;
    const updatedPartsChecked = { ...mogDropdownState.partsChecked["Seven Shadows Chronicles"] };
  
    // Update the checked state of the part and all sections and episodes within it
    Object.keys(updatedPartsChecked[part]).forEach(section => {
      if (section !== 'checked') {
        updatedPartsChecked[part][section].checked = isPartChecked;
        Object.keys(updatedPartsChecked[part][section]).forEach(episode => {
          if (episode !== 'checked' && typeof updatedPartsChecked[part][section][episode] === 'boolean') {
            updatedPartsChecked[part][section][episode] = isPartChecked;
          }
        });
      }
    });
  
    // Update the checked state of the part itself
    updatedPartsChecked[part].checked = isPartChecked;
  
    setMogDropdownState(prevState => ({
      ...prevState,
      partsChecked: {
        ...prevState.partsChecked,
        "Seven Shadows Chronicles": updatedPartsChecked
      }
    }));
  };


  const handleFilterChange = (event, part) => {
    if (part) {
      setMogDropdownState(prevState => ({
        ...prevState,
        sectionFilters: {
          ...prevState.sectionFilters,
          [part]: event.target.value
        }
      }));
    } else {
      setMogDropdownState(prevState => ({
        ...prevState,
        filter: event.target.value
      }));
    }
  };

  const handleSevenShadowsCheck = (event) => {
    const isSevenShadowsChecked = !partsChecked['Seven Shadows Chronicles']?.checked;
    const updatedPartsChecked = { ...partsChecked };

    // Update the checked state of 'Seven Shadows Chronicles'
    updatedPartsChecked['Seven Shadows Chronicles'].checked = isSevenShadowsChecked;

    // Update the checked state of all parts, sections, and episodes
    Object.keys(updatedPartsChecked['Seven Shadows Chronicles']).forEach(part => {
      if (part !== 'checked') {
        updatedPartsChecked['Seven Shadows Chronicles'][part].checked = isSevenShadowsChecked;
        Object.keys(updatedPartsChecked['Seven Shadows Chronicles'][part]).forEach(section => {
          if (section !== 'checked') {
            updatedPartsChecked['Seven Shadows Chronicles'][part][section].checked = isSevenShadowsChecked;
            Object.keys(updatedPartsChecked['Seven Shadows Chronicles'][part][section]).forEach(episode => {
              if (episode !== 'checked' && typeof updatedPartsChecked['Seven Shadows Chronicles'][part][section][episode] === 'boolean') {
                updatedPartsChecked['Seven Shadows Chronicles'][part][section][episode] = isSevenShadowsChecked;
              }
            });
          }
        });
      }
    });

    setMogDropdownState(prevState => ({
      ...prevState,
      partsChecked: updatedPartsChecked
    }));
  };



  return (
    <div className="dropdown" ref={dropdownRef}>
      <div onClick={handleMOGClick}>
        <span className={mogMainChecked ? '' : 'dimmed'}>MASTER OF GARDEN</span>
        <FontAwesomeIcon className="dropdown-icon-main" icon={openMOG ? faChevronUp : faChevronDown} />
      </div>
      {openMOG && (
        <div className="dropdown-menu">
          <input type="text" value={filter} onChange={handleFilterChange} placeholder="Search stories..." />
          <div>
            <span className={partsChecked['Seven Shadows Chronicles']?.checked ? '' : 'dimmed'}>Seven Shadows Chronicles</span>
            <FontAwesomeIcon className="dropdown-icon" icon={openParts['Seven Shadows Chronicles'] ? faChevronUp : faChevronDown} onClick={(event) => handlePartClick(event, 'Seven Shadows Chronicles')} />
            <input
              type="checkbox"
              checked={!!partsChecked['Seven Shadows Chronicles']?.checked}
              onChange={handleSevenShadowsCheck}
            />
          </div>
          {openParts['Seven Shadows Chronicles'] && (
            <SevenShadowChroniclesDropdown
              parts={Object.keys(partsChecked['Seven Shadows Chronicles']).filter(part => part !== 'checked')}
              partsChecked={partsChecked['Seven Shadows Chronicles']}
              handlePartCheck={handlePartCheck}
              handleSectionCheck={handleSectionCheck}
              handleEpisodeCheck={handleEpisodeCheck}
              openParts={openParts}
              handlePartClick={handlePartClick}
              sectionFilters={sectionFilters}
              handleFilterChange={handleFilterChange}
              setMogDropdownState={setMogDropdownState}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default MOGDropdownMenu;
