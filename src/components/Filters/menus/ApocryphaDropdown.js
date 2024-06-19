import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function ApocryphaDropdown({
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
    categoryFilters,
    images
}) {

    const endOfDropdownRef = useRef(null);
    useEffect(() => {
        if (openParts && endOfDropdownRef.current) {
            endOfDropdownRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [openParts]);

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
            <input type="text" value={categoryFilters['all-apo'] || ''} onChange={(event) => handleCategoryFilterChange(event, 'all-apo')} placeholder="Search parts..." />

            {parts.filter(part => !categoryFilters['all-apo'] || part.toLowerCase().includes(categoryFilters['all-apo'].toLowerCase())).map((part, index) => (
                <div key={index}>
                    <div className="item-header">
                        <div className="volume-trigger-drop">
                            <span
                                className={`part-title ${partsChecked[part]?.checked ? '' : 'dimmed'}`}
                                onClick={(event) => handlePartClick(event, part)}
                                title={part.split(' | ')[1]}
                            >
                                <span style={{ color: 'red' }}>{part.split(' | ')[0]}&nbsp;</span>
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
                                    const sectionKey = `${part.split(' | ')[0]}-${sectionName.split(' | ')[0]}`;
                                    return (
                                        <div key={index}>
                                            <div className="item-header">
                                                <div className="volume-trigger-drop">
                                                    <span
                                                        className={`section-title ${partsChecked[part][section]?.checked ? '' : 'dimmed'}`}
                                                        title={sectionName.split(' | ')[1]}
                                                        onClick={(event) => handleSectionClick(event, part, section)}
                                                    >
                                                        <span style={{ color: 'red' }}>{part.split(' | ')[0]}-{sectionName.split(' | ')[0]}&nbsp;</span>
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
                                                        const imageKey = `${part.split(' | ')[0]}-${sectionName.split(' | ')[0]}-${episodeNumber}`
                                                        return (
                                                            <div key={index} className="episode-item">
                                                                <div className="episode-name">
                                                                    {images[imageKey] && <img className="cover-image-apo-small" src={images[imageKey]} alt={episodeName} />}
                                                                    <span className={partsChecked[part][section][episode].checked ? "episode-checked" : "episode-unchecked"}>
                                                                        <span style={{ color: 'red' }}>{episodeNumber} </span>
                                                                        <span className="episode-text" title={episodeName}>| {episodeName}</span>
                                                                    </span>
                                                                </div>
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

export default ApocryphaDropdown;
