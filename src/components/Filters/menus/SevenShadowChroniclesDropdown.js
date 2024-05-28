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

    const episodeMap = {
        "Seven Shadows Chronicles": {
            "Part 1 | Rise of Garden": {
                "1-1 | Shadow Garden, Mobilize!": {
                    "e1": "1 | Prelude",
                    "e2": "2 | Garden Policy",
                    "e3": "3 | Shadow Garden Covert Op",
                    "e4": "4 | Possessed Search",
                    "e5": "5 | After the Rescue",

                },
                "1-2 | Ancient Dragon of Alexandria": {
                    "e1": "1 | The Lost City",
                    "e2": "2 | Abyss Woods",
                    "e3": "3 | Tale of Ruin",
                    "e4": "4 | Shadow's Sword",
                    "e5": "5 | Future Unlocked",

                },
                "1-3 | Have Mercy! Eta's Protocol": {
                    "e1": "1 | Eta's Scheme",
                    "e2": "2 | Defense System",
                    "e3": "3 | Magic Gear",
                    "e4": "4 | Try, Try Again",
                    "e5": "5 | The Gear's Value",

                },
                "1-4 | Behold! Tuna Chaos": {
                    "e1": "1 | Day Off Together",
                    "e2": "2 | Going Fishing",
                    "e3": "3 | Tasty Tuna Sammy",
                    "e4": "4 | Victory Formula",
                    "e5": "5 | A King is Born",

                },
                "1-5 | Here Comes Trouble": {
                    "e1": "1 | News Beginnings",
                    "e2": "2 | Open the Door",
                    "e3": "3 | N. Kafka is Born",
                    "e4": "4 | Mystery Paladin",
                    "e5": "5 | Point Blank",

                },
                "1-6 | Intense! Unstoppable Alpha": {
                    "e1": "1 | Poking the Bear",
                    "e2": "2 | Re-Infiltration",
                    "e3": "3 | BBQ Provocation",
                    "e4": "4 | Merciless Probe",
                    "e5": "5 | Grace Thy Blade",

                },
                "1-7 | Brutal! Delta's Night Hunt": {
                    "e1": "1 | Mountaineering",
                    "e2": "2 | As Cats and Dogs",
                    "e3": "3 | Begin the Hunt",
                    "e4": "4 | Brutal Diplomacy",
                    "e5": "5 | My Fangs Rejoice",

                },
                "1-8 | She is Beauty, She is Grace!": {
                    "e1": "1 | Inspired by Ire",
                    "e2": "2 | Presentation Row",
                    "e3": "3 | Shadow Power!",
                    "e4": "4 | Epsilon's Justice",
                    "e5": "5 | Pianist Shiron",

                },
                "1-9 | Watch Out, Gamma!": {
                    "e1": "1 | Morning Shopping",
                    "e2": "2 | Luna's Past",
                    "e3": "3 | Luna: The Truth",
                    "e4": "4 | Gamma Capriccio",
                    "e5": "5 | Shadow World Foe",

                },
                "1-10 | Mitsugoshi, Ltd. is Open!": {
                    "e1": "1 | Info Wars Begin",
                    "e2": "2 | Plot at A-Okay Co.",
                    "e3": "3 | Deception Op",
                    "e4": "4 | Mitsugoshi Credo",
                    "e5": "5 | No Shadows Left",

                },
                "1-11 | Deal! Arranged Booking": {
                    "e1": "1 | Beta Reminisces",
                    "e2": "2 | Harsh Happenings",
                    "e3": "3 | 2 Birds 1 Stone",
                    "e4": "4 | Sponsor's Intent",
                    "e5": "5 | Ebony Swirl",

                },
                "1-12 | Natsume & Shiron Hang Out!": {
                    "e1": "1 | City-State Duo",
                    "e2": "2 | Fleeting Vacance",
                    "e3": "3 | Jugang Ruins",
                    "e4": "4 | Beta—Behind You!",
                    "e5": "5 | Great Collapse",

                },
                "1-13 | Visions... Zeta and the Prophet": {
                    "e1": "1 | Spy Request",
                    "e2": "2 | Saintly Prayer",
                    "e3": "3 | Secret Cathedral",
                    "e4": "4 | Wonky Background",
                    "e5": "5 | Victoria—Prophet",

                },
                "1-14 | The Garden on the Eve of Battle!": {
                    "e1": "1 | Can You Lift?",
                    "e2": "2 | Research & Hair",
                    "e3": "3 | Garden's Enemy",
                    "e4": "4 | Cherish Shadow",
                    "e5": "5 | To the Prelude",

                },
                "1 Final | Final Battle! Templar Fanatics": {
                    "e1": "1 | Battlefront: Part 1",
                    "e2": "2 | Battlefront: Part 2",
                    "e3": "3 | Battlefront: Part 3",
                    "e4": "4 | Reunion in Flame",
                    "e5": "5 | Prelude to a New Battle",

                },


            },
            "Part 2 | Sturm of Velgalta": {
                "2-1 | Operation: Rescue & Recover": {
                    "e1": "1 | Zeta's Departure",
                    "e2": "2 | Lurk in Darkness, Hunt Down Shadows",
                    "e3": "3 | Possessed Heiress",
                    "e4": "4 | Nicoletta Marquez",
                    "e5": "5 | Opeartion: Rescue",

                },
                "2-2 | A Brilliant Mission!": {
                    "e1": "1 | Slow and Slay",
                    "e2": "2 | The Weakest Link",
                    "e3": "3 | Pitfall Experiments",
                    "e4": "4 | Prophetess' Doubt",
                    "e5": "5 | Destined Numbers",

                },
                "2-3 | Investigation! In Search of Oil": {
                    "e1": "1 | Buried Black Gold",
                    "e2": "2 | The Land of Madlid",
                    "e3": "3 | Nyle River Trouble",
                    "e4": "4 | Malak the Malevolent",
                    "e5": "5 | The Perfect Base",

                },
                "2-4 | Possessed Cult Leader": {
                    "e1": "1 | Keep Investigating",
                    "e2": '2 | Two "Seven Blades"',
                    "e3": "3 | Confronting Sergey",
                    "e4": "4 | Not Even a Scratch",
                    "e5": "5 | Glorious Escape",

                },
                "2-5 |  Cult Secrets Revealed!": {
                    "e1": "1 | Possessed Lady Karen",
                    "e2": "2 | Two Ruthless Choices",
                    "e3": "3 | Cult Secrets Unveiled",
                    "e4": "4 | To Know Thyself",
                    "e5": "5 | Loss and Rebirth",

                },
                "2-6 | The Garden Heads North": {
                    "e1": '1 | Mysterious "Tears"',
                    "e2": "2 | Countering Regeneration",
                    "e3": "3 | Altered History",
                    "e4": "4 | Vengeance is Mine",
                    "e5": "5 | Journey to the North",

                },
                "2-7 | Blood Pact! Unlikely Pair": {
                    "e1": "1 | Secret Villa Seizure",
                    "e2": "2 | Secret Fund in Laugus",
                    "e3": "3 | RIP Mundane Man",
                    "e4": "4 | Authorized Savagery",
                    "e5": "5 | Without Loyalties",

                },
                "2-8 | Seven Blades Swordswoman": {
                    "e1": "1 | Her Name is Annerose",
                    "e2": "2 | Naive Swordswoman",
                    "e3": "3 | Luna & Annerose",
                    "e4": "4 | A Knight's Honor",
                    "e5": "5 | What is Passed Down",

                },
                "2-9 | The Ones We Protect": {
                    "e1": "1 | Fallout",
                    "e2": "2 | Painted Lies",
                    "e3": "3 | Reason to Fight",
                    "e4": "4 | The Ones We Protect",
                    "e5": "5 | Embarkment",

                },
                "2-10 | Duel! Defeat Malak!": {
                    "e1": "1 | Path of the Dragon",
                    "e2": "2 | Evolutionary Dead-End",
                    "e3": "3 | Muscles Are Stored",
                    "e4": "4 | Break Apart!",
                    "e5": "5 | White Diamond",

                },
                "2-11 | Faith and Conviction": {
                    "e1": "1 | People in the Stands",
                    "e2": "2 | Shadow Actress",
                    "e3": "3 | Trust's Companion",
                    "e4": "4 | A Saint Gone Mad",
                    "e5": "5 | False Oracles",

                },
                "2-12 | Evil Ambition's End": {
                    "e1": "1 | The First Child",
                    "e2": "2 | Numbers Advantage",
                    "e3": '3 | "He" is Here',
                    "e4": "4 | Dragon Awakes",
                    "e5": "5 | Summit of Strength",

                },
                "2-13 | Hero...... Lured by Illusions": {
                    "e1": "1 | A New Journey",
                    "e2": "2 | Sergey's Hideout",
                    "e3": "3 | Artificial Dragons",
                    "e4": "4 | Ambition's End",
                    "e5": "5 | A Mysterious Elf",

                },
            },
            "Part 3 | Secret of Sacra": {
                "3-1 | Shadow Garden Revamp": {
                    "e1": "1 | A Bitter Retreat",
                    "e2": "2 | Reorganizing",
                    "e3": "3 | Girls Reshuffled",
                    "e4": "4 | Lambda's Favorite",
                    "e5": "5 | Take No One Lightly",
                }
            }
        }
    }




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
                                                        const [episodeNumber, episodeName] = episodeMap["Seven Shadows Chronicles"][part][section][episode].split('|');
                                                        return (
                                                            <div key={index} className="episode-item">
                                                                <span className={partsChecked[part][section][episode] ? "episode-checked" : "episode-unchecked"}>
                                                                    <span style={{ color: 'red' }}>{episodeNumber}</span>
                                                                    <span className="episode-name" title={episodeName}>|{episodeName}</span>
                                                                </span>
                                                                <input
                                                                    type="checkbox"
                                                                    checked={!!partsChecked[part][section][episode]}
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
