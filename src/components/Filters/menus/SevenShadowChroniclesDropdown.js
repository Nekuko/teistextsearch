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
    categoryFilters,
    images
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

            {parts.filter(part => !categoryFilters['all'] || part.toLowerCase().includes(categoryFilters['all'].toLowerCase())).sort((a, b) => {
                const episodeA = parseInt(a.split(" | ")[0].replace("Part ", ""), 10);
                const episodeB = parseInt(b.split(" | ")[0].replace("Part ", ""), 10);
                return episodeA - episodeB; // Otherwise, sort by part
            })
                .map((part, index) => (
                    <div key={index}>
                        <div className="item-header">
                            <div className="volume-trigger-drop">
                                <span
                                    className={`part-title ${partsChecked[part]?.checked ? '' : 'dimmed'}`}
                                    onClick={(event) => handlePartClick(event, part)}
                                    title={part.split(' | ')[1]}
                                >
                                    <span style={{ color: 'red' }}>{`${part.split(' | ')[0]}`}&nbsp;</span>
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
                                    {Object.keys(partsChecked[part]).filter(section => section !== 'checked' && (!sectionFilters[part] || section.toLowerCase().includes(sectionFilters[part].toLowerCase()))).sort((a, b) => {
                                        const [partA, subpartA] = a.split('|')[0].split("-"); // Extract part and subpart
                                        const [partB, subpartB] = b.split('|')[0].split("-");
                                        if (partA === '1 Final ') return 1;
                                        if (partB === '1 Final ') return -1;
                                        if (partA === partB) {
                                            return subpartA - subpartB; // Sort by subpart if parts are equal
                                        }
                                        return partA - partB; // Otherwise, sort by part
                                    })
                                        .map((section, index) => {
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
                                                                <span style={{ color: 'red' }}>{sectionName.split(' | ')[0]}&nbsp;</span>
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
                                                            {Object.keys(partsChecked[part][section]).filter(episode => episode !== 'checked' && episode.startsWith('e')).sort((a, b) => {
                                                                const episodeA = parseInt(a.split("e")[1], 10);
                                                                const episodeB = parseInt(b.split("e")[1], 10);
                                                                return episodeA - episodeB; // Otherwise, sort by part
                                                            })
                                                                .map((episode, index) => {
                                                                    const episodeNumber = episode.split("e")[1];
                                                                    const episodeName = partsChecked[part][section][episode].title;
                                                                    return (
                                                                        <div key={index} className="episode-item">
                                                                            <div className="episode-name">
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

export default SevenShadowChroniclesDropdown;
