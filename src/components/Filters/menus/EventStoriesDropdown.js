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
    canonES
 }) {

    const episodeMap = {
        "Event Stories": {
            "Holiday Rhapsody": {
                "e1": "1 | Holiday Rhapsody Ep.1",
                "e2": "2 | Holiday Rhapsody Ep.2",
                "e3": "3 | Holiday Rhapsody Ep.3",
                "e4": "4 | Holiday Rhapsody Ep.4",
                "e5": "5 | Holiday Rhapsody Ep.5",
                "e6": "6 | Holiday Rhapsody Ep.6",
                "e7": "7 | Holiday Rhapsody Ep.7",
            },
            "Fantastic! The Great Ize-athelon!": {
                "e1": "1 | Fantastic! The Great Ize-athelon!",
                "e2": "2 | Fantastic! The Great Ize-athelon!",
                "e3": "3 | Fantastic! The Great Ize-athelon!",
                "e4": "4 | Fantastic! The Great Ize-athelon!",
                "e5": "5 | Fantastic! The Great Ize-athelon!",
                "e6": "6 | Fantastic! The Great Ize-athelon!",
                "e7": "7 | Fantastic! The Great Ize-athelon!",
            },
            "Natural vs. Artificial: Chocolate Showdown!": {
                "e1": "1 | Natural vs. Artificial: Chocolate Showdown!",
                "e2": "2 | Natural vs. Artificial: Chocolate Showdown!",
                "e3": "3 | Natural vs. Artificial: Chocolate Showdown!",
                "e4": "4 | Natural vs. Artificial: Chocolate Showdown!",
                "e5": "5 | Natural vs. Artificial: Chocolate Showdown!",
                "e6": "6 | Natural vs. Artificial: Chocolate Showdown!",
                "e7": "7 | Natural vs. Artificial: Chocolate Showdown!",
            },
            "Rose of Garden": {
                "e1": "1 | Rose of Garden",
                "e2": "2 | Rose of Garden",
                "e3": "3 | Rose of Garden",
                "e4": "4 | Rose of Garden",
                "e5": "5 | Rose of Garden",
                "e6": "6 | Rose of Garden",
                "e7": "7 | Rose of Garden",
            },
            "HIGHEST DREAM": {
                "e1": "1 | HIGHEST DREAM",
                "e2": "2 | HIGHEST DREAM",
                "e3": "3 | HIGHEST DREAM",
                "e4": "4 | HIGHEST DREAM",
                "e5": "5 | HIGHEST DREAM",
                "e6": "6 | HIGHEST DREAM",
                "e7": "7 | HIGHEST DREAM",
            },
            "Clever & Lucky Bunny Girls!": {
                "e1": "1 | Clever & Lucky Bunny Girls!",
                "e2": "2 | Clever & Lucky Bunny Girls!",
                "e3": "3 | Clever & Lucky Bunny Girls!",
                "e4": "4 | Clever & Lucky Bunny Girls!",
                "e5": "5 | Clever & Lucky Bunny Girls!",
                "e6": "6 | Clever & Lucky Bunny Girls!",
                "e7": "7 | Clever & Lucky Bunny Girls!",
            },
            "Shadows Unite! Let's party!": {
                "e1": "1 | Shadows Unite! Let's party!",
                "e2": "2 | Shadows Unite! Let's party!",
                "e3": "3 | Shadows Unite! Let's party!",
                "e4": "4 | Shadows Unite! Let's party!",
                "e5": "5 | Shadows Unite! Let's party!",
                "e6": "6 | Shadows Unite! Let's party!",
                "e7": "7 | Shadows Unite! Let's party!",
            },
            "Truth Seekers": {
                "e1": "1 | Truth Seekers",
                "e2": "2 | Truth Seekers",
                "e3": "3 | Truth Seekers",
                "e4": "4 | Truth Seekers",
                "e5": "5 | Truth Seekers",
                "e6": "6 | Truth Seekers",
                "e7": "7 | Truth Seekers",
            },
            "Midsummer Triangle": {
                "e1": "1 | Midsummer Triangle",
                "e2": "2 | Midsummer Triangle",
                "e3": "3 | Midsummer Triangle",
                "e4": "4 | Midsummer Triangle",
                "e5": "5 | Midsummer Triangle",
                "e6": "6 | Midsummer Triangle",
                "e7": "7 | Midsummer Triangle",
            },
            "Dreamy Summer Sunset": {
                "e1": "1 | Dreamy Summer Sunset",
                "e2": "2 | Dreamy Summer Sunset",
                "e3": "3 | Dreamy Summer Sunset",
                "e4": "4 | Dreamy Summer Sunset",
                "e5": "5 | Dreamy Summer Sunset",
                "e6": "6 | Dreamy Summer Sunset",
                "e7": "7 | Dreamy Summer Sunset",
            },
            "Interlude": {
                "e1": "1 | Interlude",
                "e2": "2 | Interlude",
                "e3": "3 | Interlude",
                "e4": "4 | Interlude",
                "e5": "5 | Interlude",
                "e6": "6 | Interlude",
                "e7": "7 | Interlude",
            },
            "Let's Smile! Halloween Night!": {
                "e1": "1 | Let's Smile! Halloween Night!",
                "e2": "2 | Let's Smile! Halloween Night!",
                "e3": "3 | Let's Smile! Halloween Night!",
                "e4": "4 | Let's Smile! Halloween Night!",
                "e5": "5 | Let's Smile! Halloween Night!",
                "e6": "6 | Let's Smile! Halloween Night!",
                "e7": "7 | Let's Smile! Halloween Night!",
            },
            "Amnesia?! Noob Again!": {
                "e1": "1 | Amnesia?! Noob Again!",
                "e2": "2 | Amnesia?! Noob Again!",
                "e3": "3 | Amnesia?! Noob Again!",
                "e4": "4 | Amnesia?! Noob Again!",
                "e5": "5 | Amnesia?! Noob Again!",
                "e6": "6 | Amnesia?! Noob Again!",
                "e7": "7 | Amnesia?! Noob Again!",
            },
            "A Gift from Miss Santa!": {
                "e1": "1 | A Gift from Miss Santa!",
                "e2": "2 | A Gift from Miss Santa!",
                "e3": "3 | A Gift from Miss Santa!",
                "e4": "4 | A Gift from Miss Santa!",
                "e5": "5 | A Gift from Miss Santa!",
                "e6": "6 | A Gift from Miss Santa!",
                "e7": "7 | A Gift from Miss Santa!",
            },
            "Run! The Great Ize-athlon 2.0!": {
                "e1": "1 | Run! The Great Ize-athlon 2.0!",
                "e2": "2 | Run! The Great Ize-athlon 2.0!",
                "e3": "3 | Run! The Great Ize-athlon 2.0!",
                "e4": "4 | Run! The Great Ize-athlon 2.0!",
                "e5": "5 | Run! The Great Ize-athlon 2.0!",
                "e6": "6 | Run! The Great Ize-athlon 2.0!",
                "e7": "7 | Run! The Great Ize-athlon 2.0!",
            },
            "Masquerade": {
                "e1": "1 | Masquerade",
                "e2": "2 | Masquerade",
                "e3": "3 | Masquerade",
                "e4": "4 | Masquerade",
                "e5": "5 | Masquerade",
                "e6": "6 | Masquerade",
                "e7": "7 | Masquerade",
            },
            "Be Mine! Sweet Valentine": {
                "e1": "1 | Be Mine! Sweet Valentine",
                "e2": "2 | Be Mine! Sweet Valentine",
                "e3": "3 | Be Mine! Sweet Valentine",
                "e4": "4 | Be Mine! Sweet Valentine",
                "e5": "5 | Be Mine! Sweet Valentine",
                "e6": "6 | Be Mine! Sweet Valentine",
                "e7": "7 | Be Mine! Sweet Valentine",
            },
            "HIGHEST DREAM II": {
                "e1": "1 | HIGHEST DREAM II",
                "e2": "2 | HIGHEST DREAM II",
                "e3": "3 | HIGHEST DREAM II",
                "e4": "4 | HIGHEST DREAM II",
                "e5": "5 | HIGHEST DREAM II",
                "e6": "6 | HIGHEST DREAM II",
                "e7": "7 | HIGHEST DREAM II",
            },
            "The Producer in Shadow!": {
                "e1": "1 | The Producer in Shadow!",
                "e2": "2 | The Producer in Shadow!",
                "e3": "3 | The Producer in Shadow!",
                "e4": "4 | The Producer in Shadow!",
                "e5": "5 | The Producer in Shadow!",
                "e6": "6 | The Producer in Shadow!",
                "e7": "7 | The Producer in Shadow!",
            }
        }
    }

    return (
        <div>
            {/* Add this input field for category filter */}
            <input type="text" value={categoryFilters['all-event'] || ''} onChange={(event) => handleCategoryFilterChange(event, 'all-event')} placeholder="Search stories..." />
            <div className="es-list">
            {parts.filter(part => !categoryFilters['all-event'] || part.toLowerCase().includes(categoryFilters['all-event'].toLowerCase())).map((part, index) => (
                <div key={index}>
                    <div className="item-header">
                        <div className="volume-trigger-drop">
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
                                const [episodeNumber, episodeName] = episodeMap["Event Stories"][part][episode].split('|');
                                return (
                                    <div key={index} className="episode-item">
                                    <span className={partsChecked[part][episode] ? "episode-checked" : "episode-unchecked"}>
                                        <span style={{color: 'red'}}>{episodeNumber}</span>
                                        <span className="episode-name" title={episodeName}>|{episodeName}</span>
                                    </span>
                                    <input
                                        type="checkbox"
                                        checked={!!partsChecked[part][episode]}
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
    
    
