import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function SevenShadowChroniclesDropdown({
    setMogDropdownState,
    parts,
    partsChecked,
    handlePartCheck,
    handleSectionCheck,
    handleEpisodeCheck,
    openParts,
    handlePartClick,
    sectionFilters,
    handleFilterChange,
    handleCategoryFilterChange,
    categoryFilters
}) {

    const handleSectionClick = (event, part, section) => {
        event.stopPropagation();
        setMogDropdownState(prevState => {
          // Get all the sections from the previous state
          const { openParts } = prevState;
      
          // Create a new object with all sections closed
          const newOpenSections = Object.keys(openParts[part]).reduce((acc, key) => {
            acc[key] = false;
            return acc;
          }, {});
      
          // Toggle the clicked section
          newOpenSections[section] = !openParts[part][section];
      
          return {
            ...prevState,
            openParts: {
              ...prevState.openParts,
              [part]: newOpenSections
            }
          };
        });
      };
      

    return (
        <div>
            {/* Add this input field for category filter */}
            <input type="text" value={categoryFilters['all'] || ''} onChange={(event) => handleCategoryFilterChange(event, 'all')} placeholder="Search parts..." />

            {parts.filter(part => !categoryFilters['all'] || part.toLowerCase().includes(categoryFilters['all'].toLowerCase())).map((part, index) => (
                <div key={index}>
                    <div className="item-header">
                        <div className="volume-trigger-drop">
                            <span
                                className={`part-title ${partsChecked[part]?.checked ? '' : 'dimmed'}`}
                                onClick={(event) => handlePartClick(event, part)}
                                title={part.split(' | ')[1]}
                            >
                                <span style={{ color: 'red' }}>{part.split(' | ')[0]}</span>
                                <span> | {part.split(' | ')[1]}</span>
                            </span>
                            <FontAwesomeIcon className="dropdown-icon" icon={openParts[part] ? faChevronUp : faChevronDown} onClick={(event) => handlePartClick(event, part)} />
                        </div>
                        <input
                            type="checkbox"
                            checked={!!partsChecked[part]?.checked}
                            onChange={(event) => handlePartCheck(event, part)}
                        />
                    </div>
                    {openParts[part] && (
                        <div>
                            <input type="text" value={sectionFilters[part] || ''} onChange={(event) => handleFilterChange(event, part)} placeholder="Search chapters..." />
                            <div className="section-list">
                                {Object.keys(partsChecked[part]).filter(section => section !== 'checked' && (!sectionFilters[part] || section.toLowerCase().includes(sectionFilters[part].toLowerCase()))).map((section, index) => {
                                    const sectionName = section;
                                    const sectionKey = section.split(" |")[0];
                                    return (
                                        <div key={index}>
                                            <div className="item-header">
                                                <div className="volume-trigger-drop">
                                                    <span
                                                        className={`section-title ${partsChecked[part][section]?.checked ? '' : 'dimmed'}`}
                                                        title={sectionName.split(' | ')[1]}
                                                        onClick={(event) => handleSectionClick(event, part, section)}
                                                    >
                                                        <span style={{ color: 'red' }}>{sectionName.split(' | ')[0]}</span>
                                                        <span> | {sectionName.split(' | ')[1]}</span>
                                                    </span>
                                                    <FontAwesomeIcon className="dropdown-icon" icon={openParts[part]?.[section] ? faChevronUp : faChevronDown} onClick={(event) => handleSectionClick(event, part, section)} />
                                                </div>
                                                <input
                                                    type="checkbox"
                                                    checked={!!partsChecked[part][section]?.checked}
                                                    onChange={(event) => handleSectionCheck(event, part, section)}
                                                />
                                            </div>
                                            {openParts[part]?.[section] && (
                                                <div className="episode-list">
                                                    {Object.keys(partsChecked[part][section]).filter(episode => episode !== 'checked' && episode.startsWith('e')).map((episode, index) => {
                                                        const episodeNumber = episode.split("e")[1];
                                                        const episodeName = partsChecked[part][section][episode].title;
                                                        return (
                                                            <div key={index} className="episode-item">
                                                                <span className={partsChecked[part][section][episode].checked ? "episode-checked" : "episode-unchecked"}>
                                                                    <span style={{ color: 'red' }}>{episodeNumber} </span>
                                                                    <span className="episode-name" title={episodeName}>| {episodeName}</span>
                                                                </span>
                                                                <input
                                                                    type="checkbox"
                                                                    checked={!!partsChecked[part][section][episode].checked}
                                                                    onChange={(event) => handleEpisodeCheck(event, part, section, episode)}
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
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default SevenShadowChroniclesDropdown;
