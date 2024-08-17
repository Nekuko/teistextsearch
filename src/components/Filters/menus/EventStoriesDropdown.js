import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { ESMAPREVERSE, ESMAP } from '../../../esMap';

function EventStoriesDropdown({
    setMogDropdownState,
    parts,
    partsChecked,
    handleEventPartCheck,
    handleEventEpisodeCheck,
    openParts,
    handlePartClick,
    handleCategoryFilterChange,
    categoryFilters,
    canonActive,
    canonES,
    images
}) {
    const customOrder = Object.values(ESMAP);

    return (
        <div>
            {/* Add this input field for category filter */}
            <input type="text" value={categoryFilters['all-event'] || ''} onChange={(event) => handleCategoryFilterChange(event, 'all-event')} placeholder="Search stories..." />
            <div className="es-list">
                {parts.filter(part => !categoryFilters['all-event'] || part.toLowerCase().includes(categoryFilters['all-event'].toLowerCase())).sort((a, b) => {
                    const aIndex = customOrder.indexOf(a);
                    const bIndex = customOrder.indexOf(b);
                    return aIndex - bIndex;
                }).map((part, index) => (
                    <div key={index}>
                        <div className="item-header">
                            <div className="volume-trigger-drop">
                                {images[ESMAPREVERSE[part]] && <img className="cover-image-es-small" src={images[ESMAPREVERSE[part]]} alt={part} />}
                                <span
                                    className={`part-title ${partsChecked[part]?.checked ? '' : 'dimmed'}`}
                                    onClick={(event) => handlePartClick(event, part)}
                                    title={part}
                                >
                                    {part}
                                </span>
                                <FontAwesomeIcon className="dropdown-icon" icon={openParts[part] ? faChevronUp : faChevronDown} onClick={(event) => handlePartClick(event, part)} />
                            </div>
                            <input
                                type="checkbox"
                                checked={!!partsChecked[part]?.checked}
                                onChange={(event) => handleEventPartCheck(event, part)}
                                disabled={canonActive && !canonES.includes(part)} // Disable the checkbox if canonActive is true and part is not in canonES
                            />
                        </div>
                        {openParts[part] && (
                            <div className="episode-list">
                                {Object.keys(partsChecked[part]).filter(episode => episode !== 'checked' && episode.startsWith('e')).sort((a, b) => {
                                    const episodeA = parseInt(a.split("e")[1], 10);
                                    const episodeB = parseInt(b.split("e")[1], 10);
                                    return episodeA - episodeB; // Otherwise, sort by part
                                })
                                    .map((episode, index) => {
                                        const episodeNumber = episode.split("e")[1];
                                        const episodeName = partsChecked[part][episode].title;
                                        return (
                                            <div key={index} className="episode-item">
                                                <div className="episode-name">
                                                    <span className={partsChecked[part][episode].checked ? "episode-checked" : "episode-unchecked"}>
                                                        <span style={{ color: 'red' }}>{episodeNumber} </span>
                                                        <span className="episode-text" title={episodeName}>| {episodeName}</span>
                                                    </span>
                                                </div>
                                                <input
                                                    type="checkbox"
                                                    checked={!!partsChecked[part][episode].checked}
                                                    onChange={(event) => handleEventEpisodeCheck(event, part, episode)}
                                                    disabled={canonActive && !canonES.includes(part)} // Disable the checkbox for episodes if canonActive is true and part is not in canonES
                                                />
                                            </div>
                                        );
                                    })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventStoriesDropdown;


