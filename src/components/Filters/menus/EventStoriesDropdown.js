import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

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

    return (
        <div>
            {/* Add this input field for category filter */}
            <input type="text" value={categoryFilters['all-event'] || ''} onChange={(event) => handleCategoryFilterChange(event, 'all-event')} placeholder="Search stories..." />
            <div className="es-list">
                {parts.filter(part => !categoryFilters['all-event'] || part.toLowerCase().includes(categoryFilters['all-event'].toLowerCase())).map((part, index) => (
                    <div key={index}>
                        <div className="item-header">
                            <div className="volume-trigger-drop">
                                {images[part] && <img className="cover-image-es-small" src={images[part]} alt={part} />}
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
                                {Object.keys(partsChecked[part]).filter(episode => episode !== 'checked' && episode.startsWith('e')).map((episode, index) => {
                                    const episodeNumber = episode.split("e")[1];
                                    const episodeName = partsChecked[part][episode].title;
                                    return (
                                        <div key={index} className="episode-item">
                                            <span className={partsChecked[part][episode] ? "episode-checked" : "episode-unchecked"}>
                                                <span style={{ color: 'red' }}>{episodeNumber} </span>
                                                <span className="episode-name" title={episodeName}>| {episodeName}</span>
                                            </span>
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


