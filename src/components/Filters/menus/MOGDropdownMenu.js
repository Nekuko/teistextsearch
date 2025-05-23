// MOGDropdownMenu.js
import React, { useEffect, useRef } from 'react';
import SevenShadowChroniclesDropdown from './SevenShadowChroniclesDropdown'; // Import the new component
import EventStoriesDropdown from './EventStoriesDropdown.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './DropdownMenu.css';
import ApocryphaDropdown from './ApocryphaDropdown.js';

function MOGDropdownMenu({ mogDropdownState, setMogDropdownState, openMOG, setOpenMOG, canonActive, canonES, images }) {
  const { mogMainChecked, filter, openParts, partsChecked, sectionFilters, categoryFilters } = mogDropdownState;

  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Ignore clicks on the checkbox
        if (event.target.type !== 'checkbox') {
          setOpenMOG(false);
        }
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

  const handleMOGClick = () => {
    setMogDropdownState(prevState => ({
      ...prevState,
      openParts: {
        "Seven Shadows Chronicles": false,
        "Event Stories": false,
        "Apocrypha": false,
      }
    }));
    setOpenMOG(!openMOG);
  };


  const handlePartClick = (event, part) => {
    // Toggle the clicked part's dropdown and close others
    setMogDropdownState(prevState => {
      // Get all the parts from the previous state
      const { openParts, partsChecked } = prevState;

      // Create a new object with all parts closed
      const newOpenParts = Object.keys(openParts).reduce((acc, key) => {
        // If 'Event Stories' is open and the clicked part is a key name of partsChecked['Event Stories']
        // then close all other parts except 'Event Stories' and the clicked part
        if (openParts['Event Stories'] && partsChecked['Event Stories'][part]) {
          acc[key] = (key === 'Event Stories' || key === part);
        } else if (openParts['Apocrypha'] && partsChecked['Apocrypha'][part]) {
          acc[key] = (key === 'Apocrypha' || key === part);
        }
        // If the clicked part doesn't start with "Part", close all other parts
        else if (!part.startsWith("Part")) {
          acc[key] = false;
        }
        // If the part starts with "Part", close other parts that also start with "Part"
        else if (part.startsWith("Part") && key.startsWith("Part")) {
          acc[key] = false;
        } else {
          acc[key] = openParts[key];
        }
        return acc;
      }, {});

      // Toggle the clicked part
      newOpenParts[part] = !openParts[part];

      return {
        ...prevState,
        openParts: newOpenParts
      };
    });
  };








  const handleSectionCheck = (event, part, section) => {
    event.stopPropagation();
    const isSectionChecked = !mogDropdownState.partsChecked["Seven Shadows Chronicles"][part]?.[section]?.checked;
    const updatedSection = { ...mogDropdownState.partsChecked["Seven Shadows Chronicles"][part]?.[section] };

    Object.keys(updatedSection).forEach(episode => {
      if (episode !== 'checked' && typeof updatedSection[episode] === 'object') {
        updatedSection[episode].checked = isSectionChecked;
      }
    });

    // Create a new object for the updated part
    const updatedPart = {
      ...mogDropdownState.partsChecked["Seven Shadows Chronicles"][part],
      [section]: { ...updatedSection, checked: isSectionChecked }
    };

    // Check if any section is checked
    const anyChecked = Object.values(updatedPart).some((section) => section.checked);

    // Update the checked state of the part itself
    updatedPart.checked = anyChecked;

    // Create a new object for the updated partsChecked
    const updatedPartsChecked = {
      ...mogDropdownState.partsChecked,
      "Seven Shadows Chronicles": {
        ...mogDropdownState.partsChecked["Seven Shadows Chronicles"],
        [part]: updatedPart
      }
    };

    // Check if any part is checked
    const anyPartChecked = Object.values(updatedPartsChecked["Seven Shadows Chronicles"]).some((part) => part.checked);

    // Update the checked state of "Seven Shadows Chronicles"
    updatedPartsChecked["Seven Shadows Chronicles"].checked = anyPartChecked;

    const anyEventStoryChecked = Object.values(updatedPartsChecked['Event Stories']).some((part) => part.checked);

    const anyApocryphaChecked = Object.values(updatedPartsChecked['Apocrypha']).some((part) => part.checked);

    // Update the checked state of "mogMainChecked"
    const mogMainChecked = anyPartChecked || anyEventStoryChecked || anyApocryphaChecked;

    setMogDropdownState(prevState => ({
      ...prevState,
      mogMainChecked,
      partsChecked: updatedPartsChecked
    }));
  };

  const handleAPOSectionCheck = (event, part, section) => {
    event.stopPropagation();
    const isSectionChecked = !mogDropdownState.partsChecked["Apocrypha"][part]?.[section]?.checked;
    const updatedSection = { ...mogDropdownState.partsChecked["Apocrypha"][part]?.[section] };

    Object.keys(updatedSection).forEach(episode => {
      if (episode !== 'checked' && typeof updatedSection[episode] === 'object') {
        updatedSection[episode].checked = isSectionChecked;
      }
    });

    // Create a new object for the updated part
    const updatedPart = {
      ...mogDropdownState.partsChecked["Apocrypha"][part],
      [section]: { ...updatedSection, checked: isSectionChecked }
    };

    // Check if any section is checked
    const anyChecked = Object.values(updatedPart).some((section) => section.checked);

    // Update the checked state of the part itself
    updatedPart.checked = anyChecked;

    // Create a new object for the updated partsChecked
    const updatedPartsChecked = {
      ...mogDropdownState.partsChecked,
      "Apocrypha": {
        ...mogDropdownState.partsChecked["Apocrypha"],
        [part]: updatedPart
      }
    };

    // Check if any part is checked
    const anyPartChecked = Object.values(updatedPartsChecked["Apocrypha"]).some((part) => part.checked);

    // Update the checked state of "Apocrypha"
    updatedPartsChecked["Apocrypha"].checked = anyPartChecked;

    const anyEventStoryChecked = Object.values(updatedPartsChecked['Event Stories']).some((part) => part.checked);
    
    const anyApocryphaChecked = Object.values(updatedPartsChecked['Apocrypha']).some((part) => part.checked);

    // Update the checked state of "mogMainChecked"
    const mogMainChecked = anyPartChecked || anyEventStoryChecked || anyApocryphaChecked;

    setMogDropdownState(prevState => ({
      ...prevState,
      mogMainChecked,
      partsChecked: updatedPartsChecked
    }));
  };




  const handleEpisodeCheck = (event, part, section, episode) => {
    event.stopPropagation();
    const isEpisodeChecked = !mogDropdownState.partsChecked["Seven Shadows Chronicles"][part]?.[section]?.[episode]?.checked;

    // Create a new object for the updated episode
    const updatedEpisode = {
      ...mogDropdownState.partsChecked["Seven Shadows Chronicles"][part]?.[section]?.[episode],
      checked: isEpisodeChecked
    };

    // Create a new object for the updated section
    const updatedSection = {
      ...mogDropdownState.partsChecked["Seven Shadows Chronicles"][part]?.[section],
      [episode]: updatedEpisode
    };

    // Check if all episodes are unchecked
    const allUnchecked = Object.entries(updatedSection).every(([key, value]) => key === 'checked' ? true : !value.checked);

    if (allUnchecked) {
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

    // Check if any section is checked
    const anyChecked = Object.values(updatedPart).some((section) => section.checked);

    // Update the checked state of the part itself
    updatedPart.checked = anyChecked;

    // Create a new object for the updated partsChecked
    const updatedPartsChecked = {
      ...mogDropdownState.partsChecked,
      "Seven Shadows Chronicles": {
        ...mogDropdownState.partsChecked["Seven Shadows Chronicles"],
        [part]: updatedPart
      }
    };

    // Check if any part is checked
    const anyPartChecked = Object.values(updatedPartsChecked["Seven Shadows Chronicles"]).some((part) => part.checked);

    // Update the checked state of "Seven Shadows Chronicles"
    updatedPartsChecked["Seven Shadows Chronicles"].checked = anyPartChecked;

    const anyEventStoryChecked = Object.values(updatedPartsChecked['Event Stories']).some((part) => part.checked);

    const anyApocryphaChecked = Object.values(updatedPartsChecked['Apocrypha']).some((part) => part.checked);

    // Update the checked state of "mogMainChecked"
    const mogMainChecked = anyPartChecked || anyEventStoryChecked || anyApocryphaChecked;

    setMogDropdownState(prevState => ({
      ...prevState,
      mogMainChecked,
      partsChecked: updatedPartsChecked
    }));
  };
  
  const handleAPOEpisodeCheck = (event, part, section, episode) => {
    event.stopPropagation();
    const isEpisodeChecked = !mogDropdownState.partsChecked["Apocrypha"][part]?.[section]?.[episode]?.checked;

    // Create a new object for the updated episode
    const updatedEpisode = {
      ...mogDropdownState.partsChecked["Apocrypha"][part]?.[section]?.[episode],
      checked: isEpisodeChecked
    };

    // Create a new object for the updated section
    const updatedSection = {
      ...mogDropdownState.partsChecked["Apocrypha"][part]?.[section],
      [episode]: updatedEpisode
    };

    // Check if all episodes are unchecked
    const allUnchecked = Object.entries(updatedSection).every(([key, value]) => key === 'checked' ? true : !value.checked);

    if (allUnchecked) {
      // If all episodes are unchecked, uncheck the section checkbox
      updatedSection.checked = false;
    } else {
      // If not all episodes are unchecked, check the section checkbox
      updatedSection.checked = true;
    }

    // Create a new object for the updated part
    const updatedPart = {
      ...mogDropdownState.partsChecked["Apocrypha"][part],
      [section]: updatedSection
    };

    // Check if any section is checked
    const anyChecked = Object.values(updatedPart).some((section) => section.checked);

    // Update the checked state of the part itself
    updatedPart.checked = anyChecked;

    // Create a new object for the updated partsChecked
    const updatedPartsChecked = {
      ...mogDropdownState.partsChecked,
      "Apocrypha": {
        ...mogDropdownState.partsChecked["Apocrypha"],
        [part]: updatedPart
      }
    };

    // Check if any part is checked
    const anyPartChecked = Object.values(updatedPartsChecked["Apocrypha"]).some((part) => part.checked);

    // Update the checked state of "Apocrypha"
    updatedPartsChecked["Apocrypha"].checked = anyPartChecked;

    const anyEventStoryChecked = Object.values(updatedPartsChecked['Event Stories']).some((part) => part.checked);

    const anyApocryphaChecked = Object.values(updatedPartsChecked['Apocrypha']).some((part) => part.checked);

    // Update the checked state of "mogMainChecked"
    const mogMainChecked = anyPartChecked || anyEventStoryChecked || anyApocryphaChecked;

    setMogDropdownState(prevState => ({
      ...prevState,
      mogMainChecked,
      partsChecked: updatedPartsChecked
    }));
  };



  const handlePartCheck = (event, part) => {
    event.stopPropagation();
    const isPartChecked = !mogDropdownState.partsChecked["Seven Shadows Chronicles"][part]?.checked;
    const updatedPartsChecked = { ...mogDropdownState.partsChecked };

    // Update the checked state of the part and all sections and episodes within it
    Object.keys(updatedPartsChecked["Seven Shadows Chronicles"][part]).forEach(section => {
      if (section !== 'checked') {
        updatedPartsChecked["Seven Shadows Chronicles"][part][section].checked = isPartChecked;
        Object.keys(updatedPartsChecked["Seven Shadows Chronicles"][part][section]).forEach(episode => {
          if (episode !== 'checked' && typeof updatedPartsChecked["Seven Shadows Chronicles"][part][section][episode] === 'object') {
            updatedPartsChecked["Seven Shadows Chronicles"][part][section][episode].checked = isPartChecked;
          }
        });
      }
    });

    // Update the checked state of the part itself
    updatedPartsChecked["Seven Shadows Chronicles"][part].checked = isPartChecked;

    // Check if any part is checked
    const anyChecked = Object.values(updatedPartsChecked["Seven Shadows Chronicles"]).some((part) => part.checked);

    // Update the checked state of "Seven Shadows Chronicles"
    updatedPartsChecked["Seven Shadows Chronicles"].checked = anyChecked;

    const anyEventStoryChecked = Object.values(updatedPartsChecked['Event Stories']).some((part) => part.checked);

    const anyApocryphaChecked = Object.values(updatedPartsChecked['Apocrypha']).some((part) => part.checked);

    // Update the checked state of "mogMainChecked"
    const mogMainChecked = anyChecked || anyEventStoryChecked || anyApocryphaChecked;

    setMogDropdownState(prevState => ({
      ...prevState,
      mogMainChecked,
      partsChecked: updatedPartsChecked
    }));
  };

  const handleAPOPartCheck = (event, part) => {
    event.stopPropagation();
    const isPartChecked = !mogDropdownState.partsChecked["Apocrypha"][part]?.checked;
    const updatedPartsChecked = { ...mogDropdownState.partsChecked };

    // Update the checked state of the part and all sections and episodes within it
    Object.keys(updatedPartsChecked["Apocrypha"][part]).forEach(section => {
      if (section !== 'checked') {
        updatedPartsChecked["Apocrypha"][part][section].checked = isPartChecked;
        Object.keys(updatedPartsChecked["Apocrypha"][part][section]).forEach(episode => {
          if (episode !== 'checked' && typeof updatedPartsChecked["Apocrypha"][part][section][episode] === 'object') {
            updatedPartsChecked["Apocrypha"][part][section][episode].checked = isPartChecked;
          }
        });
      }
    });

    // Update the checked state of the part itself
    updatedPartsChecked["Apocrypha"][part].checked = isPartChecked;

    // Check if any part is checked
    const anyChecked = Object.values(updatedPartsChecked["Apocrypha"]).some((part) => part.checked);

    // Update the checked state of "Apocrypha"
    updatedPartsChecked["Apocrypha"].checked = anyChecked;

    const anyEventStoryChecked = Object.values(updatedPartsChecked['Event Stories']).some((part) => part.checked);

    // Update the checked state of "mogMainChecked"
    const mogMainChecked = anyChecked || anyEventStoryChecked;

    setMogDropdownState(prevState => ({
      ...prevState,
      mogMainChecked,
      partsChecked: updatedPartsChecked
    }));
  };




  const handleCategoryFilterChange = (event, part) => {
    setMogDropdownState(prevState => ({
      ...prevState,
      categoryFilters: {
        ...prevState.categoryFilters,
        [part]: event.target.value
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
              if (episode !== 'checked' && typeof updatedPartsChecked['Seven Shadows Chronicles'][part][section][episode] === 'object') {
                updatedPartsChecked['Seven Shadows Chronicles'][part][section][episode].checked = isSevenShadowsChecked;
              }
            });
          }
        });
      }
    });

    // Check if any part is checked in 'Event Stories'
    const anyEventStoryChecked = Object.values(updatedPartsChecked['Event Stories']).some((part) => part.checked);

    const anyApocryphaChecked = Object.values(updatedPartsChecked['Apocrypha']).some((part) => part.checked);

    // Update the checked state of "mogMainChecked"
    const mogMainChecked = isSevenShadowsChecked || anyEventStoryChecked || anyApocryphaChecked;

    setMogDropdownState(prevState => ({
      ...prevState,
      mogMainChecked,
      partsChecked: updatedPartsChecked
    }));
  };

  const handleApocryphaCheck = (event) => {
    const isApocryphaChecked = !partsChecked["Apocrypha"]?.checked;
    const updatedPartsChecked = { ...partsChecked };

    // Update the checked state of "Apocrypha"
    updatedPartsChecked["Apocrypha"].checked = isApocryphaChecked;

    // Update the checked state of all parts, sections, and episodes
    Object.keys(updatedPartsChecked["Apocrypha"]).forEach(part => {
      if (part !== 'checked') {
        updatedPartsChecked["Apocrypha"][part].checked = isApocryphaChecked;
        Object.keys(updatedPartsChecked["Apocrypha"][part]).forEach(section => {
          if (section !== 'checked') {
            updatedPartsChecked["Apocrypha"][part][section].checked = isApocryphaChecked;
            Object.keys(updatedPartsChecked["Apocrypha"][part][section]).forEach(episode => {
              if (episode !== 'checked' && typeof updatedPartsChecked["Apocrypha"][part][section][episode] === 'object') {
                updatedPartsChecked["Apocrypha"][part][section][episode].checked = isApocryphaChecked;
              }
            });
          }
        });
      }
    });

    // Check if any part is checked in 'Event Stories'
    const anyEventStoryChecked = Object.values(updatedPartsChecked['Event Stories']).some((part) => part.checked);

    const anySevenShadowsChecked = Object.values(updatedPartsChecked['Seven Shadows Chronicles']).some((part) => part.checked);

    // Update the checked state of "mogMainChecked"
    const mogMainChecked = isApocryphaChecked || anyEventStoryChecked || anySevenShadowsChecked;

    setMogDropdownState(prevState => ({
      ...prevState,
      mogMainChecked,
      partsChecked: updatedPartsChecked
    }));
  };




  const handleEventStoriesCheck = (event) => {
    const isEventStoriesChecked = !partsChecked['Event Stories']?.checked;
    const updatedPartsChecked = { ...partsChecked };

    // Update the checked state of 'Event Stories'
    updatedPartsChecked['Event Stories'].checked = isEventStoriesChecked;

    // Update the checked state of all parts and episodes
    Object.keys(updatedPartsChecked['Event Stories']).forEach(part => {
      if (part !== 'checked') {
        // If canonActive is true and part is not in canonES, skip updating the checked state for this part and its episodes
        if (!(canonActive && !canonES.includes(part))) {
          updatedPartsChecked['Event Stories'][part].checked = isEventStoriesChecked;
          Object.keys(updatedPartsChecked['Event Stories'][part]).forEach(episode => {
            if (episode !== 'checked' && typeof updatedPartsChecked['Event Stories'][part][episode] === 'object') {
              updatedPartsChecked['Event Stories'][part][episode].checked = isEventStoriesChecked;
            }
          });
        }
      }
    });

    // Check if any part is checked
    const anyPartChecked = Object.values(updatedPartsChecked['Event Stories']).some((part) => part.checked);

    const anySevenShadowsChecked = Object.values(updatedPartsChecked['Seven Shadows Chronicles']).some((part) => part.checked);

    const anyApocryphaChecked = Object.values(updatedPartsChecked['Apocrypha']).some((part) => part.checked);

    // Update the checked state of "mogMainChecked"
    const mogMainChecked = anyPartChecked || anySevenShadowsChecked || anyApocryphaChecked;

    setMogDropdownState(prevState => ({
      ...prevState,
      mogMainChecked,
      partsChecked: updatedPartsChecked
    }));
  };





  const handleEventPartCheck = (event, part) => {
    event.stopPropagation();
    const isPartChecked = !mogDropdownState.partsChecked["Event Stories"][part]?.checked;
    const updatedPartsChecked = { ...mogDropdownState.partsChecked["Event Stories"] };

    // Update the checked state of the part and all episodes within it
    Object.keys(updatedPartsChecked[part]).forEach(episode => {
      if (episode !== 'checked' && typeof updatedPartsChecked[part][episode] === 'object') {
        updatedPartsChecked[part][episode].checked = isPartChecked;
      }
    });

    // Update the checked state of the part itself
    updatedPartsChecked[part].checked = isPartChecked;

    // Check if any part is checked
    const anyChecked = Object.values(updatedPartsChecked).some((part) => part.checked);

    // Update the checked state of "Event Stories"
    updatedPartsChecked.checked = anyChecked;

    // Check if any part is checked in 'Seven Shadows Chronicles'
    const anySevenShadowsChecked = Object.values(mogDropdownState.partsChecked['Seven Shadows Chronicles']).some((part) => part.checked);

    const anyApocryphaChecked = Object.values(mogDropdownState.partsChecked['Apocrypha']).some((part) => part.checked);

    // Update the checked state of "mogMainChecked"
    const mogMainChecked = anyChecked || anySevenShadowsChecked || anyApocryphaChecked;

    setMogDropdownState(prevState => ({
      ...prevState,
      mogMainChecked,
      partsChecked: {
        ...prevState.partsChecked,
        "Event Stories": updatedPartsChecked
      }
    }));
  };


  const handleEventEpisodeCheck = (event, part, episode) => {
    event.stopPropagation();
    const isEpisodeChecked = !mogDropdownState.partsChecked["Event Stories"][part]?.[episode]?.checked;

    // Create a new object for the updated part
    const updatedPart = {
      ...mogDropdownState.partsChecked["Event Stories"][part],
      [episode]: { ...mogDropdownState.partsChecked["Event Stories"][part][episode], checked: isEpisodeChecked }
    };

    // Check if any episode is checked
    const anyChecked = Object.keys(updatedPart).some((key) => key !== 'checked' && updatedPart[key].checked === true);

    // Update the checked state of the part itself
    updatedPart.checked = anyChecked;

    // Create a new object for the updated partsChecked
    const updatedPartsChecked = {
      ...mogDropdownState.partsChecked,
      "Event Stories": {
        ...mogDropdownState.partsChecked["Event Stories"],
        [part]: updatedPart
      }
    };

    // Check if any part is checked
    const anyPartChecked = Object.keys(updatedPartsChecked["Event Stories"]).some((key) => key !== 'checked' && updatedPartsChecked["Event Stories"][key].checked === true);

    // Update the checked state of "Event Stories"
    updatedPartsChecked["Event Stories"].checked = anyPartChecked;

    // Check if any part is checked in 'Seven Shadows Chronicles'
    const anySevenShadowsChecked = Object.values(mogDropdownState.partsChecked['Seven Shadows Chronicles']).some((part) => part.checked);

    const anyApocryphaChecked = Object.values(updatedPartsChecked['Apocrypha']).some((part) => part.checked);

    // Update the checked state of "mogMainChecked"
    const mogMainChecked = anyPartChecked || anySevenShadowsChecked || anyApocryphaChecked;

    setMogDropdownState(prevState => ({
      ...prevState,
      mogMainChecked,
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
          <div className="item-header">
            <div className="volume-trigger-drop">
              {images.sscCoverImages["ssc"] && <img className="ssc-image" src={images.sscCoverImages["ssc"]} alt={"Seven Shadows Chronicles"} />}
              <span onClick={(event) => handlePartClick(event, 'Seven Shadows Chronicles')} className={`season-title ${partsChecked['Seven Shadows Chronicles']?.checked ? '' : 'dimmed'}`}>Seven Shadows Chronicles</span>
              <FontAwesomeIcon onClick={(event) => handlePartClick(event, 'Seven Shadows Chronicles')} className="dropdown-icon" icon={openParts['Seven Shadows Chronicles'] ? faChevronUp : faChevronDown} />
            </div>
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
              handleCategoryFilterChange={handleCategoryFilterChange}
              categoryFilters={categoryFilters}
              images={images.sscCoverImages}
            />
          )}
          <div className="item-header">
            <div className="volume-trigger-drop">
              {images.esCoverImages["Event Stories"] && <img className="es-image" src={images.esCoverImages["Event Stories"]} alt={"Event Stories"} />}
              <span onClick={(event) => handlePartClick(event, 'Event Stories')} className={`season-title ${partsChecked['Event Stories']?.checked ? '' : 'dimmed'}`}>Event Stories</span>
              <FontAwesomeIcon className="dropdown-icon" icon={openParts['Event Stories'] ? faChevronUp : faChevronDown} onClick={(event) => handlePartClick(event, 'Event Stories')} />
            </div>
            <input
              type="checkbox"
              checked={!!partsChecked['Event Stories']?.checked}
              onChange={handleEventStoriesCheck} // Make sure to define this handler
            />
          </div>
          {openParts['Event Stories'] && (
            <EventStoriesDropdown
              parts={Object.keys(partsChecked['Event Stories']).filter(part => part !== 'checked')}
              partsChecked={partsChecked['Event Stories']}
              handleEventPartCheck={handleEventPartCheck}
              handleEventEpisodeCheck={handleEventEpisodeCheck}
              openParts={openParts}
              handlePartClick={handlePartClick}
              sectionFilters={sectionFilters}
              handleFilterChange={handleFilterChange}
              setMogDropdownState={setMogDropdownState}
              handleCategoryFilterChange={handleCategoryFilterChange}
              categoryFilters={categoryFilters}
              canonES={canonES}
              canonActive={canonActive}
              images={images.esCoverImages}
            />
          )}
          <div className="item-header">
            <div className="volume-trigger-drop">
              {images.apoCoverImages["Apocrypha"] && <img className="apo-image" src={images.apoCoverImages["Apocrypha"]} alt={"SApocrypha"} />}
              <span onClick={(event) => handlePartClick(event, 'Apocrypha')} className={`season-title ${partsChecked['Apocrypha']?.checked ? '' : 'dimmed'}`}>Apocrypha</span>
              <FontAwesomeIcon className="dropdown-icon" icon={openParts['Apocrypha'] ? faChevronUp : faChevronDown} onClick={(event) => handlePartClick(event, 'Apocrypha')} />
            </div>
            <input
              type="checkbox"
              checked={!!partsChecked['Apocrypha']?.checked}
              onChange={handleApocryphaCheck}
            />
          </div>
          {openParts['Apocrypha'] && (
            <ApocryphaDropdown
              parts={Object.keys(partsChecked['Apocrypha']).filter(part => part !== 'checked')}
              partsChecked={partsChecked['Apocrypha']}
              handlePartCheck={handleAPOPartCheck}
              handleSectionCheck={handleAPOSectionCheck}
              handleEpisodeCheck={handleAPOEpisodeCheck}
              openParts={openParts}
              handlePartClick={handlePartClick}
              sectionFilters={sectionFilters}
              handleFilterChange={handleFilterChange}
              setMogDropdownState={setMogDropdownState}
              handleCategoryFilterChange={handleCategoryFilterChange}
              categoryFilters={categoryFilters}
              images={images.apoCoverImages}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default MOGDropdownMenu;

