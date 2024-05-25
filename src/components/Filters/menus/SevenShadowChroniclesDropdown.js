import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function SevenShadowChroniclesDropdown({ setMogDropdownState, parts, partsChecked, handlePartCheck, handleSectionCheck, handleEpisodeCheck, openParts, handlePartClick, sectionFilters, handleFilterChange }) {
    const handleSectionClick = (event, part, section) => {
        event.stopPropagation();
        setMogDropdownState(prevState => ({
            ...prevState,
            openParts: {
                ...prevState.openParts,
                [part]: {
                    ...prevState.openParts[part],
                    [section]: !prevState.openParts[part]?.[section]
                }
            }
        }));
    };

    return (
        <div>
            {parts.map((part, index) => (
                <div key={index}>
                    <div className="item-header">
                        <div className="volume-trigger-drop">
                            <span
                                className={`part-title ${partsChecked[part]?.checked ? '' : 'dimmed'}`}
                                onClick={(event) => handlePartClick(event, part)}
                            >
                                {part}
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
                            <input type="text" value={sectionFilters[part] || ''} onChange={(event) => handleFilterChange(event, part)} placeholder="Search sections..." />
                            <div className="section-list">
                                {Object.keys(partsChecked[part]).filter(section => section !== 'checked' && (!sectionFilters[part] || section.toLowerCase().includes(sectionFilters[part].toLowerCase()))).map((section, index) => {
                                    const sectionName = section;
                                    return (
                                        <div key={index}>
                                            <div className="item-header">
                                                <div className="volume-trigger-drop">
                                                    <span
                                                        className={`section-title ${partsChecked[part][section]?.checked ? '' : 'dimmed'}`}
                                                        onClick={(event) => handleSectionClick(event, part, section)}
                                                    >
                                                        {sectionName}
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
                                                    {Object.keys(partsChecked[part][section]).filter(episode => episode !== 'checked' && episode.startsWith('e')).map((episode, index) => (
                                                        <div key={index} className="episode-item">
                                                            <span className={partsChecked[part][section][episode] ? "episode-checked" : "episode-unchecked"}>
                                                                {episode}
                                                            </span>
                                                            <input
                                                                type="checkbox"
                                                                checked={!!partsChecked[part][section][episode]}
                                                                onChange={(event) => handleEpisodeCheck(event, part, section, episode)}
                                                            />
                                                        </div>
                                                    ))}
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
