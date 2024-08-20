// InfoPage.js
import React, { useState, useEffect } from 'react';
import './InfoPage.css'; // Import the CSS file
import Collapsible from 'react-collapsible';
import { ESMAP } from '../../esMap';
import { fetchInformationData, fetchVersionData } from '../../utils/firebaseFunctions';

const formatNumber = (num) => num.toLocaleString();

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const kjMap = {
    "kj1": "Kage-Jitsu!",
    "kj2": "Kage-Jitsu! 2nd",
    "kj1m": "s101",
    "kj2m": "s102"
}

const customOrder = Object.keys(ESMAP);


function InfoPage() {
    const [versionData, setVersionData] = useState();
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(false)
    const [informationData, setInformationData] = useState();
    const [openMenus, setOpenMenus] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                let versionDataTemp;
                let storedVersionData = sessionStorage.getItem('versionData');
                if (storedVersionData) {
                    const parsedData = JSON.parse(storedVersionData);
                    const currentTime = Date.now();
                    const expirationTime = 30 * 60 * 1000;

                    if (parsedData.timestamp && currentTime - parsedData.timestamp < expirationTime) {
                        // Data is still valid, use it
                        setVersionData(parsedData.data);
                        versionDataTemp = parsedData.data;
                    } else {
                        // Fetch new data
                        const data = await fetchVersionData(versionData);
                        versionDataTemp = data;
                        setVersionData(data);
                        sessionStorage.setItem('versionData', JSON.stringify({ data, timestamp: currentTime }));
                    }
                } else {
                    // Fetch data if not found in session storage
                    let data = await fetchVersionData(versionData);
                    versionDataTemp = data;
                    setVersionData(data);
                    sessionStorage.setItem('versionData', JSON.stringify({ data, timestamp: Date.now() }));
                }

                if (!informationData) {
                    let infoData = await fetchInformationData(versionDataTemp, setVersionData);
                    setInformationData(infoData.data);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
                setErrors(true);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [informationData]);

    const [mediumImages, setMediumImages] = useState(() => {
        const savedState = sessionStorage.getItem('mediumImages');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }
        return {}
    });

    useEffect(() => {
        sessionStorage.setItem('mediumImages', JSON.stringify(mediumImages));
    }, [mediumImages]);

    const [characterImages, setCharacterImages] = useState(() => {
        const savedState = sessionStorage.getItem('characterImages');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }

        return {}
    });

    useEffect(() => {
        sessionStorage.setItem('characterImages', JSON.stringify(characterImages));
    }, [characterImages]);

    const [mogDropdownState, setMogDropdownState] = useState(() => {
        const savedState = sessionStorage.getItem('mogDropdown');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }

        return {}
    });
    useEffect(() => {
        sessionStorage.setItem('mogDropdown', JSON.stringify(mogDropdownState));
    }, [mogDropdownState]);

    const [namedCharacters, setNamedCharacters] = useState(() => {
        // Get the initial value from sessionStorage or default to false
        const savedState = sessionStorage.getItem('namedCharacters');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }

        return ["Akane Nishino", "Alexia Midgar", "Alpha", "Annerose Nichtsehen", "Aurora",
            "Beatrix", "Beta", "Chi", "Cid Kagenou", "Claire Kagenou", "Claudia", "Crimson", "Delta", "Duet",
            "Elisabeth", "Epsilon", "Eta", "Freya", "Gamma", "Garter Kikuchi", "Gettan", "Glen", "Goldy Gilded",
            "Grease", "Iota", "Iris Midgar", "Jack Nelson", "Juggernaut", "Kana", "Kevin", "Klaus Midgar",
            "Kouadoi", "Lambda", "Lili", "Lutheran Barnett", "Marco Granger", "Margaret", "Marie", "Mary",
            "Mist Dragon", "Mordred", "Mr. Kagenou", "Mrs. Kagenou", "Natsu", "No. 664", "No. 665", "Nu", "Olivier",
            "Omega", "Pente", "Perv Asshat", "Po Tato", "Quinton", "Raphael Oriana", "Reina Oriana", "Rex",
            "Rose Oriana", "Sergey Gorman", "Sherry Barnett", "Skel Etal", "Victoria", "White Demon", "Yukime",
            "Zenon Griffey", "Zeta"]
    });

    const [animeDropdownState, setAnimeDropdownState] = useState(() => {
        const savedState = sessionStorage.getItem('animeDropdown');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }
        return {}
    });

    useEffect(() => {
        sessionStorage.setItem('animeDropdown', JSON.stringify(animeDropdownState));
    }, [animeDropdownState]);

    // Use an effect to update sessionStorage when namedActive changes
    useEffect(() => {
        sessionStorage.setItem('namedCharacters', JSON.stringify(namedCharacters));
    }, [namedCharacters]);

    if (loading || errors) {
        return (
            <div className="info-page">
                <h1 className="filters-header">INFORMATION</h1>
                <div className="info-content">
                    <div className="info-main">
                        <h1 className="info-header">MEDIUMS</h1>
                        <div className="info-info">
                            <p>Lines: 0</p>
                            <p>Approximate Word Count: 0</p>
                            <p>Character Count: 0</p>
                        </div>
                    </div>
                    <br /><br />
                    <div className="info-main">
                        <h1 className="info-header">CHARACTERS</h1>
                        <div className="info-info">
                            <p>Total Characters: 0</p>
                            <p>Total Lines: 0</p>
                        </div>
                        <button title={"To Top"} className="scroll-top-button" onClick={scrollToTop}>UP</button>
                    </div>
                </div>

            </div>
        );
    }

    const lnCoverImages = mediumImages.lnCoverImages;
    const animeCoverImages = mediumImages.animeCoverImages;
    const sscCoverImages = mediumImages.sscCoverImages;
    const esCoverImages = mediumImages.esCoverImages;
    const apoCoverImages = mediumImages.apoCoverImages;

    const generateCollapsiblesLN = (all_counts) => {
        const volumes = Object.keys(all_counts).filter(key => key !== 'total'); // Exclude the 'total' key
        return (
            <Collapsible onOpening={() => handleMenu('ln')} onClose={() => handleMenu('ln')} trigger="Light Novel">
                <div className="info-collapse">
                    {openMenus['ln'] && (
                        <>
                            <p>Volumes: {formatNumber(volumes.length)}</p>
                            <p>Approximate Paragraphs: {formatNumber(all_counts.total.line_count)}</p>
                            <p>Approximate Word Count: {formatNumber(all_counts.total.word_count)}</p>
                            <p>Character Count: {formatNumber(all_counts.total.char_count)}</p>
                            {volumes.sort().map(volume => (
                                <Collapsible key={volume} trigger={
                                    <>
                                        <div className="volume-trigger">
                                            {lnCoverImages[volume] && <img className="cover-image" src={lnCoverImages[volume]} alt={all_counts[volume].total.title} />}
                                            {`${all_counts[volume].total.title}`}
                                        </div>
                                    </>
                                }>
                                    <p>Chapters: {formatNumber(Object.keys(all_counts[volume]).length - 1)}</p> {/* Exclude the 'total' key */}
                                    <p>Approximate Paragraphs: {formatNumber(all_counts[volume].total.line_count)}</p>
                                    <p>Approximate Word Count: {formatNumber(all_counts[volume].total.word_count)}</p>
                                    <p>Character Count: {formatNumber(all_counts[volume].total.char_count)}</p>
                                    {Object.keys(all_counts[volume]).filter(key => key !== 'total').sort((a, b) => {
                                        const chapterA = a.split("c")[1];
                                        const chapterB = b.split("c")[1];
                                        return chapterA - chapterB; // Otherwise, sort by part
                                    })
                                        .map(chapter => (
                                            <Collapsible key={chapter} trigger={`${all_counts[volume][chapter].title}`}>
                                                <p>Approximate Paragraphs: {formatNumber(all_counts[volume][chapter].line_count)}</p>
                                                <p>Approximate Word Count: {formatNumber(all_counts[volume][chapter].word_count)}</p>
                                                <p>Character Count: {formatNumber(all_counts[volume][chapter].char_count)}</p>
                                            </Collapsible>
                                        ))}
                                </Collapsible>
                            ))}
                        </>
                    )}
                </div>
            </Collapsible>
        );
    };

    const generateCollapsiblesWN = (all_counts) => {
        const volumes = Object.keys(all_counts).filter(key => key !== 'total'); // Exclude the 'total' key
        return (
            <Collapsible onOpening={() => handleMenu('wn')} onClose={() => handleMenu('wn')} trigger="Web Novel">
                <div className="info-collapse">
                    {openMenus['wn'] && (
                        <>
                            <p>Volumes: {formatNumber(volumes.length)}</p>
                            <p>Approximate Paragraphs: {formatNumber(all_counts.total.line_count)}</p>
                            <p>Approximate Word Count: {formatNumber(all_counts.total.word_count)}</p>
                            <p>Character Count: {formatNumber(all_counts.total.char_count)}</p>
                            {volumes.sort().map(volume => (
                                <Collapsible key={volume} trigger={`${all_counts[volume].total.title}`}>
                                    <p>Chapters: {formatNumber(Object.keys(all_counts[volume]).length - 1)}</p> {/* Exclude the 'total' key */}
                                    <p>Approximate Paragraphs: {formatNumber(all_counts[volume].total.line_count)}</p>
                                    <p>Approximate Word Count: {formatNumber(all_counts[volume].total.word_count)}</p>
                                    <p>Character Count: {formatNumber(all_counts[volume].total.char_count)}</p>
                                    {Object.keys(all_counts[volume]).filter(key => key !== 'total').map(chapter => (
                                        <Collapsible key={chapter} trigger={`${chapter} | ${all_counts[volume][chapter].title}`}>
                                            <p>Approximate Paragraphs: {formatNumber(all_counts[volume][chapter].line_count)}</p>
                                            <p>Approximate Word Count: {formatNumber(all_counts[volume][chapter].word_count)}</p>
                                            <p>Character Count: {formatNumber(all_counts[volume][chapter].char_count)}</p>
                                        </Collapsible>
                                    ))}
                                    <br />
                                </Collapsible>
                            ))}
                        </>
                    )}
                </div>
                <br />
            </Collapsible>
        );
    };

    const generateCollapsiblesAPO = (all_counts) => {
        const parts = Object.keys(all_counts.parts); // Get all part keys
        const apo = mogDropdownState.partsChecked['Apocrypha'];
        return (
            <Collapsible onOpening={() => handleMenu('apo')} onClose={() => handleMenu('apo')} trigger="Apocrypha">
                {openMenus['apo'] && (
                    <>
                        <p>Parts: {formatNumber(all_counts.part_count)}</p>
                        <p>Paragraphs: {formatNumber(all_counts.line_count)}</p>
                        <p>Approximate Word Count: {formatNumber(all_counts.word_count)}</p>
                        <p>Character Count: {formatNumber(all_counts.char_count)}</p>
                        <Collapsible trigger="Characters">
                            <div className='info-character-box-small'>
                                {Object.keys(all_counts.characters).sort((a, b) => {
                                    return all_counts.characters[b] - all_counts.characters[a]
                                }).map(character => (
                                    <div key={character}>
                                        <span>{character}: </span>
                                        <span>{all_counts.characters[character]}</span>
                                    </div>
                                ))}
                            </div>
                        </Collapsible>
                        {parts.map(part => {
                            const partTitle = Object.keys(apo).find(key => key.startsWith(`${part.replace('p', '')} |`));
                            return (
                                <Collapsible onOpening={() => handleMenu(`apo-${part}`)} onClose={() => handleMenu(`apo-${part}`)} key={`apo-${part}`} trigger={
                                    <>
                                        <div className="volume-trigger">
                                            {`Part ${partTitle}`}
                                        </div>
                                    </>
                                }>
                                    {openMenus[`apo-${part}`] && (
                                        <>
                                            <p>Chapters: {Object.keys(all_counts.parts[part].chapters).length}</p>
                                            <p>Paragraphs:{formatNumber(all_counts.parts[part].line_count)}</p>
                                            <p>Approximate Word Count: {formatNumber(all_counts.parts[part].word_count)}</p>
                                            <p>Character Count: {formatNumber(all_counts.parts[part].char_count)}</p>
                                            <Collapsible trigger="Characters">
                                                <div className='info-character-box-small'>
                                                    {Object.keys(all_counts.parts[part].characters).sort((a, b) => {
                                                        return all_counts.parts[part].characters[b] - all_counts.parts[part].characters[a]
                                                    }).map(character => (
                                                        <div key={character}>
                                                            <span>{character}: </span>
                                                            <span>{all_counts.parts[part].characters[character]}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Collapsible>
                                            {Object.keys(all_counts.parts[part].chapters)
                                                .sort((a, b) => {
                                                    // Extract the numeric part of the chapter keys
                                                    const aNum = parseInt(a.split('-')[1]);
                                                    const bNum = parseInt(b.split('-')[1]);
                                                    return aNum - bNum;
                                                })
                                                .map(chapter => {
                                                    const chapterTitle = Object.keys(apo[partTitle]).find(key => key.startsWith(`${chapter.split("-")[1]} |`));
                                                    return (
                                                        <Collapsible onOpening={() => handleMenu(`apo-${part}-${chapter}`)} onClose={() => handleMenu(`apo-${part}-${chapter}`)} trigger={
                                                            <>
                                                                <div className="volume-trigger">
                                                                    {apoCoverImages[`${chapter.replace('c', '')}`] && <img className="cover-image-apo-chapter-small" src={apoCoverImages[`${chapter.replace('c', '')}`]} alt={`${part}-${chapter}`} />}
                                                                    {`Chapter ${part.replace('p', '')}-${chapterTitle}`}
                                                                </div>
                                                            </>
                                                        }>
                                                            {openMenus[`apo-${part}-${chapter}`] && (
                                                                <>
                                                                    <p>Episodes: {Object.keys(all_counts.parts[part].chapters[chapter].episodes).length}</p>
                                                                    <p>Paragraphs: {formatNumber(all_counts.parts[part].chapters[chapter].line_count)}</p>
                                                                    <p>Approximate Word Count: {formatNumber(all_counts.parts[part].chapters[chapter].word_count)}</p>
                                                                    <p>Character Count: {formatNumber(all_counts.parts[part].chapters[chapter].char_count)}</p>
                                                                    <Collapsible trigger="Characters">
                                                                        <div className='info-character-box-small'>
                                                                            {Object.keys(all_counts.parts[part].chapters[chapter].characters).sort((a, b) => {
                                                                                return all_counts.parts[part].chapters[chapter].characters[b] - all_counts.parts[part].chapters[chapter].characters[a]
                                                                            }).map(character => (
                                                                                <div key={character}>
                                                                                    <span>{character}: </span>
                                                                                    <span>{all_counts.parts[part].chapters[chapter].characters[character]}</span>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </Collapsible>
                                                                    {Object.keys(all_counts.parts[part].chapters[chapter].episodes).sort().map(episode => (
                                                                        <Collapsible key={`apo-${part}-${chapter}-${episode}`} trigger={
                                                                            <>
                                                                                <div className="volume-trigger">
                                                                                    {apoCoverImages[`${chapter.replace('c', '')}-${episode.replace('e', '')}`] && <img className="cover-image-apo-small" src={apoCoverImages[`${chapter.replace('c', '')}-${episode.replace('e', '')}`]} alt={`${chapter}-${episode}`} />}
                                                                                    {`Episode ${episode.replace("e", "")}`}
                                                                                </div>
                                                                            </>
                                                                        }>
                                                                            <p>Paragraphs: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].line_count)}</p>
                                                                            <p>Approximate Word Count: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].word_count)}</p>
                                                                            <p>Character Count: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].char_count)}</p>
                                                                            <Collapsible trigger="Characters">
                                                                                <div className='info-character-box-small'>
                                                                                    {Object.keys(all_counts.parts[part].chapters[chapter].episodes[episode].characters).sort((a, b) => {
                                                                                        return all_counts.parts[part].chapters[chapter].episodes[episode].characters[b] - all_counts.parts[part].chapters[chapter].episodes[episode].characters[a]
                                                                                    }).map(character => (
                                                                                        <div key={character}>
                                                                                            <span>{character}: </span>
                                                                                            <span>{all_counts.parts[part].chapters[chapter].episodes[episode].characters[character]}</span>
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            </Collapsible>
                                                                        </Collapsible>
                                                                    ))}
                                                                </>
                                                            )}
                                                        </Collapsible>
                                                    );
                                                })}
                                        </>
                                    )}
                                </Collapsible>
                            );
                        })}
                    </>
                )}
            </Collapsible>
        );
    };

    const generateCollapsiblesSSC = (all_counts) => {
        const parts = Object.keys(all_counts.parts); // Get all part keys
        const ssc = mogDropdownState.partsChecked['Seven Shadows Chronicles'];
        return (
            <Collapsible onOpening={() => handleMenu('ssc')} onClose={() => handleMenu('ssc')} trigger="Seven Shadows Chronicles">
                {openMenus['ssc'] && (
                    <>
                        <p>Parts: {formatNumber(all_counts.part_count)}</p>
                        <p>Paragraphs: {formatNumber(all_counts.line_count)}</p>
                        <p>Approximate Word Count: {formatNumber(all_counts.word_count)}</p>
                        <p>Character Count: {formatNumber(all_counts.char_count)}</p>
                        <Collapsible trigger="Characters">
                            <div className='info-character-box-small'>
                                {Object.keys(all_counts.characters).sort((a, b) => {
                                    return all_counts.characters[b] - all_counts.characters[a]
                                }).map(character => (
                                    <div key={character}>
                                        <span>{character}: </span>
                                        <span>{all_counts.characters[character]}</span>
                                    </div>
                                ))}
                            </div>
                        </Collapsible>
                        {parts.sort().map(part => {
                            const partTitle = Object.keys(ssc).find(key => key.startsWith(`${part.replace('p', 'Part ')} |`));
                            return (
                                <Collapsible onOpening={() => handleMenu(`ssc-${part}`)} onClose={() => handleMenu(`ssc-${part}`)} key={part} trigger={partTitle}>
                                    {openMenus[`ssc-${part}`] && (
                                        <>
                                            <p>Chapters: {Object.keys(all_counts.parts[part].chapters).length}</p>
                                            <p>Paragraphs: {formatNumber(all_counts.parts[part].line_count)}</p>
                                            <p>Approximate Word Count: {formatNumber(all_counts.parts[part].word_count)}</p>
                                            <p>Character Count: {formatNumber(all_counts.parts[part].char_count)}</p>
                                            <Collapsible trigger="Characters">
                                                <div className='info-character-box-small'>
                                                    {Object.keys(all_counts.parts[part].characters).sort((a, b) => {
                                                        return all_counts.parts[part].characters[b] - all_counts.parts[part].characters[a]
                                                    }).map(character => (
                                                        <div key={character}>
                                                            <span>{character}: </span>
                                                            <span>{all_counts.parts[part].characters[character]}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Collapsible>
                                            {Object.keys(all_counts.parts[part].chapters)
                                                .sort((a, b) => {
                                                    // Extract the numeric part of the chapter keys
                                                    const aNum = parseInt(a.split('-')[1]);
                                                    const bNum = parseInt(b.split('-')[1]);
                                                    return aNum - bNum;
                                                })
                                                .map(chapter => {
                                                    const chapterTitle = Object.keys(ssc[partTitle]).find(key => key.startsWith(`${chapter.replace('c', '').replace('1-15', '1 Final')} |`));
                                                    return (
                                                        <Collapsible onOpening={() => handleMenu(`ssc-${part}-${chapter}`)} onClose={() => handleMenu(`ssc-${part}-${chapter}`)} key={chapter} trigger={
                                                            <>
                                                                <div className="volume-trigger">
                                                                    {sscCoverImages[`${chapter.replace('c', '')}`] && <img className="cover-image-ssc" src={sscCoverImages[`${chapter.replace('c', '')}`]} alt={`${part}-${chapter}`} />}
                                                                    {`Chapter ${chapterTitle}`}
                                                                </div>
                                                            </>
                                                        }>
                                                            {openMenus[`ssc-${part}-${chapter}`] && (
                                                                <>
                                                                    <p>Episodes: {Object.keys(all_counts.parts[part].chapters[chapter].episodes).length}</p>
                                                                    <p>Paragraphs: {formatNumber(all_counts.parts[part].chapters[chapter].line_count)}</p>
                                                                    <p>Approximate Word Count: {formatNumber(all_counts.parts[part].chapters[chapter].word_count)}</p>
                                                                    <p>Character Count: {formatNumber(all_counts.parts[part].chapters[chapter].char_count)}</p>
                                                                    <Collapsible trigger="Characters">
                                                                        <div className='info-character-box-small'>
                                                                            {Object.keys(all_counts.parts[part].chapters[chapter].characters).sort((a, b) => {
                                                                                return all_counts.parts[part].chapters[chapter].characters[b] - all_counts.parts[part].chapters[chapter].characters[a]
                                                                            }).map(character => (
                                                                                <div key={character}>
                                                                                    <span>{character}: </span>
                                                                                    <span>{all_counts.parts[part].chapters[chapter].characters[character]}</span>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </Collapsible>
                                                                    {Object.keys(all_counts.parts[part].chapters[chapter].episodes).sort().map(episode => {
                                                                        const episodeTitle = ssc[partTitle][chapterTitle][episode].title;
                                                                        return (
                                                                            <Collapsible key={episode} trigger={
                                                                                <>
                                                                                    <div className="volume-trigger">
                                                                                        {`${episode.replace('e', 'Episode ')} | ${episodeTitle}`}
                                                                                    </div>
                                                                                </>
                                                                            }>
                                                                                <p>Paragraphs: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].line_count)}</p>
                                                                                <p>Approximate Word Count: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].word_count)}</p>
                                                                                <p>Character Count: {formatNumber(all_counts.parts[part].chapters[chapter].episodes[episode].char_count)}</p>
                                                                                <Collapsible trigger="Characters">
                                                                                    <div className='info-character-box-small'>
                                                                                        {Object.keys(all_counts.parts[part].chapters[chapter].episodes[episode].characters).sort((a, b) => {
                                                                                            return all_counts.parts[part].chapters[chapter].episodes[episode].characters[b] - all_counts.parts[part].chapters[chapter].episodes[episode].characters[a]
                                                                                        }).map(character => (
                                                                                            <div key={character}>
                                                                                                <span>{character}: </span>
                                                                                                <span>{all_counts.parts[part].chapters[chapter].episodes[episode].characters[character]}</span>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                </Collapsible>
                                                                            </Collapsible>
                                                                        );
                                                                    })}
                                                                </>
                                                            )}
                                                        </Collapsible>
                                                    );
                                                })}
                                        </>
                                    )}
                                </Collapsible>
                            );
                        })}
                    </>
                )}
            </Collapsible>
        );
    };

    const generateCollapsiblesES = (all_counts) => {
        const parts = Object.keys(all_counts.parts); // Get all part keys
        return (
            <Collapsible onOpening={() => handleMenu('es')} onClose={() => handleMenu('es')} trigger="Event Stories">
                {openMenus['es'] && (
                    <>
                        <p>Stories: {formatNumber(all_counts.stories)}</p>
                        <p>Paragraphs: {formatNumber(all_counts.line_count)}</p>
                        <p>Approximate Word Count: {formatNumber(all_counts.word_count)}</p>
                        <p>Character Count: {formatNumber(all_counts.char_count)}</p>
                        <Collapsible trigger="Characters">
                            <div className='info-character-box-small'>
                                {Object.keys(all_counts.characters).sort((a, b) => {
                                    return all_counts.characters[b] - all_counts.characters[a]
                                }).map(character => (
                                    <div key={character}>
                                        <span>{character}: </span>
                                        <span>{all_counts.characters[character]}</span>
                                    </div>
                                ))}
                            </div>
                        </Collapsible>
                        {parts.sort((a, b) => {
                            const aIndex = customOrder.indexOf(a);
                            const bIndex = customOrder.indexOf(b);
                            return aIndex - bIndex;
                        }).map(part => (
                            <Collapsible onOpening={() => handleMenu(`es-${part}`)} onClose={() => handleMenu(`es-${part}`)} key={part} trigger={
                                <>
                                    <div className="volume-trigger">
                                        {esCoverImages[`${part}`] && <img className="cover-image-es" src={esCoverImages[`${part}`]} alt={`es-${part}`} />}
                                        {ESMAP[part]}
                                    </div>
                                </>
                            }>
                                {openMenus[`es-${part}`] && (
                                    <>
                                        <p>Episodes: {Object.keys(all_counts.parts[part].episodes).length}</p>
                                        <p>Paragraphs: {formatNumber(all_counts.parts[part].line_count)}</p>
                                        <p>Approximate Word Count: {formatNumber(all_counts.parts[part].word_count)}</p>
                                        <p>Character Count: {formatNumber(all_counts.parts[part].char_count)}</p>
                                        <Collapsible trigger="Characters">
                                            <div className='info-character-box-small'>
                                                {Object.keys(all_counts.parts[part].characters).sort((a, b) => {
                                                    return all_counts.parts[part].characters[b] - all_counts.parts[part].characters[a]
                                                }).map(character => (
                                                    <div key={character}>
                                                        <span>{character}: </span>
                                                        <span>{all_counts.parts[part].characters[character]}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </Collapsible>
                                        {Object.keys(all_counts.parts[part].episodes).sort().map(episode => (
                                            <Collapsible key={episode} trigger={
                                                <>
                                                    <div className="volume-trigger">
                                                        {`Episode ${episode.replace("e", "")}`}
                                                    </div>
                                                </>
                                            }>
                                                <p>Paragraphs: {formatNumber(all_counts.parts[part].episodes[episode].line_count)}</p>
                                                <p>Approximate Word Count: {formatNumber(all_counts.parts[part].episodes[episode].word_count)}</p>
                                                <p>Character Count: {formatNumber(all_counts.parts[part].episodes[episode].char_count)}</p>
                                                <Collapsible trigger="Characters">
                                                    <div className='info-character-box-small'>
                                                        {Object.keys(all_counts.parts[part].episodes[episode].characters).sort((a, b) => {
                                                            return all_counts.parts[part].episodes[episode].characters[b] - all_counts.parts[part].episodes[episode].characters[a]
                                                        }).map(character => (
                                                            <div key={character}>
                                                                <span>{character}: </span>
                                                                <span>{all_counts.parts[part].episodes[episode].characters[character]}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Collapsible>
                                            </Collapsible>
                                        ))}
                                    </>
                                )}
                            </Collapsible>
                        ))}
                    </>
                )}
            </Collapsible>
        );
    };

    const generateCollapsiblesKJ = (all_counts) => {
        const parts = Object.keys(all_counts.seasons); // Get all part keys
        return (
            <Collapsible trigger="Kage-Jitsu!">
                <p>Seasons: {formatNumber(all_counts.season_count)}</p>
                <p>Subtitles: {formatNumber(all_counts.line_count)}</p>
                <p>Approximate Word Count: {formatNumber(all_counts.word_count)}</p>
                <p>Character Count: {formatNumber(all_counts.char_count)}</p>
                <Collapsible trigger="Characters">
                    <div className='info-character-box-small'>
                        {Object.keys(all_counts.characters).sort((a, b) => {
                            return all_counts.characters[b] - all_counts.characters[a]
                        }).map(character => (
                            <div key={character}>
                                <span>{character}: </span>
                                <span>{all_counts.characters[character]}</span>
                            </div>
                        ))}
                    </div>
                </Collapsible>
                {parts.sort().map(part => (
                    <Collapsible key={part} trigger={
                        <>
                            <div className="volume-trigger">
                                {animeCoverImages[kjMap[`${part}m`]] && <img className="cover-image" src={animeCoverImages[kjMap[`${part}m`]]} alt={`kj-${part}`} />}
                                {kjMap[part]}
                            </div>
                        </>
                    }>
                        <p>Episodes: {Object.keys(all_counts.seasons[part].episodes).length}</p>
                        <p>Subtitles: {formatNumber(all_counts.seasons[part].line_count)}</p>
                        <p>Approximate Word Count: {formatNumber(all_counts.seasons[part].word_count)}</p>
                        <p>Character Count: {formatNumber(all_counts.seasons[part].char_count)}</p>
                        <Collapsible trigger="Characters">
                            <div className='info-character-box-small'>
                                {Object.keys(all_counts.seasons[part].characters).sort((a, b) => {
                                    return all_counts.seasons[part].characters[b] - all_counts.seasons[part].characters[a]
                                }).map(character => (
                                    <div key={character}>
                                        <span>{character}: </span>
                                        <span>{all_counts.seasons[part].characters[character]}</span>
                                    </div>
                                ))}
                            </div>
                        </Collapsible>
                        {Object.keys(all_counts.seasons[part].episodes).sort((a, b) => {
                            const episodeA = parseInt(a.split("e")[1], 10);
                            const episodeB = parseInt(b.split("e")[1], 10);
                            return episodeA - episodeB;
                        }).map(episode => (
                            <Collapsible key={episode} trigger={
                                <>
                                    <div className="volume-trigger">
                                        {`Episode ${animeDropdownState.seasonsChecked[part === 'kj1' ? 'Kage-Jitsu!' : 'Kage-Jitsu! 2nd'][`${part === 'kj1' ? 's101' : 's102'}${episode}`].title}`}
                                    </div>
                                </>
                            }>
                                <p>Subtitles: {formatNumber(all_counts.seasons[part].episodes[episode].line_count)}</p>
                                <p>Approximate Word Count: {formatNumber(all_counts.seasons[part].episodes[episode].word_count)}</p>
                                <p>Character Count: {formatNumber(all_counts.seasons[part].episodes[episode].char_count)}</p>
                                <Collapsible trigger="Characters">
                                    {Object.keys(all_counts.seasons[part].episodes[episode].characters).sort((a, b) => {
                                        return all_counts.seasons[part].episodes[episode].characters[b] - all_counts.seasons[part].episodes[episode].characters[a]
                                    }).map(character => (
                                        <div key={character}>
                                            <span>{character}: </span>
                                            <span>{all_counts.seasons[part].episodes[episode].characters[character]}</span>
                                        </div>
                                    ))}
                                </Collapsible>
                            </Collapsible>
                        ))}
                    </Collapsible>
                ))}
            </Collapsible>
        );
    };

    const generateCollapsiblesAN = (all_counts) => {
        const parts = Object.keys(all_counts.seasons); // Get all part keys
        return (
            <Collapsible trigger="Seasons">
                <p>Seasons: {formatNumber(all_counts.season_count)}</p>
                <p>Subtitles: {formatNumber(all_counts.line_count)}</p>
                <p>Approximate Word Count: {formatNumber(all_counts.word_count)}</p>
                <p>Character Count: {formatNumber(all_counts.char_count)}</p>
                <Collapsible trigger="Characters">
                    <div className='info-character-box-small'>
                        {Object.keys(all_counts.characters).sort((a, b) => {
                            return all_counts.characters[b] - all_counts.characters[a]
                        }).map(character => (
                            <div key={character}>
                                <span>{character}: </span>
                                <span>{all_counts.characters[character]}</span>
                            </div>
                        ))}
                    </div>
                </Collapsible>
                {parts.sort().map(part => (
                    <Collapsible key={part} trigger={
                        <>
                            <div className="volume-trigger">
                                {animeCoverImages[`s${part}`] && <img className="cover-image" src={animeCoverImages[`s${part}`]} alt={`an-${part}`} />}
                                {`Season ${part}`}
                            </div>
                        </>
                    }>
                        <p>Episodes: {Object.keys(all_counts.seasons[part].episodes).length}</p>
                        <p>Subtitles: {formatNumber(all_counts.seasons[part].line_count)}</p>
                        <p>Approximate Word Count: {formatNumber(all_counts.seasons[part].word_count)}</p>
                        <p>Character Count: {formatNumber(all_counts.seasons[part].char_count)}</p>

                        <Collapsible trigger="Characters">
                            <div className='info-character-box-small'>
                                {Object.keys(all_counts.seasons[part].characters).sort((a, b) => {
                                    return all_counts.seasons[part].characters[b] - all_counts.seasons[part].characters[a]
                                }).map(character => (
                                    <div key={character}>
                                        <span>{character}: </span>
                                        <span>{all_counts.seasons[part].characters[character]}</span>
                                    </div>
                                ))}
                            </div>
                        </Collapsible>
                        {Object.keys(all_counts.seasons[part].episodes).sort((a, b) => {
                            const episodeA = parseInt(a.split("e")[1], 10);
                            const episodeB = parseInt(b.split("e")[1], 10);
                            return episodeA - episodeB;
                        }).map(episode => (
                            <Collapsible key={episode} trigger={
                                <>
                                    <div className="volume-trigger">
                                        {`Episode ${animeDropdownState.seasonsChecked[`Season ${part}`][episode].title}`}
                                    </div>
                                </>
                            }>
                                <p>Subtitles: {formatNumber(all_counts.seasons[part].episodes[episode].line_count)}</p>
                                <p>Approximate Word Count: {formatNumber(all_counts.seasons[part].episodes[episode].word_count)}</p>
                                <p>Character Count: {formatNumber(all_counts.seasons[part].episodes[episode].char_count)}</p>
                                <Collapsible trigger="Characters">
                                    <div className='info-character-box-small'>
                                        {Object.keys(all_counts.seasons[part].episodes[episode].characters).sort((a, b) => {
                                            return all_counts.seasons[part].episodes[episode].characters[b] - all_counts.seasons[part].episodes[episode].characters[a]
                                        }).map(character => (
                                            <div key={character}>
                                                <span>{character}: </span>
                                                <span>{all_counts.seasons[part].episodes[episode].characters[character]}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Collapsible>
                            </Collapsible>
                        ))}
                    </Collapsible>
                ))}
            </Collapsible>
        );
    };

    const generateCollapsiblesChar = (all_counts) => {
        let total = 0;
        for (const value of Object.values(all_counts)) {
            total = total + value.total;
        }
        return (
            <>
                <div className="info-info">
                    <p>Total Characters: {formatNumber(Object.keys(all_counts).length)}</p>
                    <p>Total Lines: {formatNumber(total)}</p>
                </div>
                <div className='info-character-box'>
                    {Object.entries(all_counts).sort((a, b) => {
                        const aIndex = namedCharacters.indexOf(a[0]);
                        const bIndex = namedCharacters.indexOf(b[0]);

                        if (aIndex !== -1 && bIndex !== -1) {
                            return b[1].total - a[1].total;
                        } else if (aIndex !== -1) {
                            return -1; // Choose a because it has an index
                        } else if (bIndex !== -1) {
                            return 1; // Choose b because it has an index
                        }

                        return b[1].total - a[1].total;
                    }).map(([character, value]) => (
                        <>
                            <Collapsible key={`char-${character}`} onOpening={() => handleMenu(`char-${character}`)} onClose={() => handleMenu(`char-${character}`)} trigger={
                                <>
                                    <div className="volume-trigger">
                                        {characterImages[character] && <img className="characters-container-image" src={characterImages[character]} alt={character} />}
                                        {`${character} (Total: ${value.total})`}
                                    </div>
                                </>
                            }>
                                <div className='info-character-box-small'>
                                    {Object.entries(value.names).sort((a, b) => {
                                        return b[1] - a[1];
                                    }).map(([name, amount]) => (
                                        <>
                                            <div key={`char-${character}-${name}`} className="volume-trigger">
                                                {`${name} (Total: ${amount})`}
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </Collapsible>
                            <br />
                        </>
                    ))}

                </div>
            </>
        );
    };

    const mg_info = {
        "line_count": informationData['apo']["line_count"] + informationData['ssc']["line_count"] + informationData['es']["line_count"],
        "word_count": informationData['apo']["word_count"] + informationData['ssc']["word_count"] + informationData['es']["word_count"],
        "char_count": informationData['apo']["char_count"] + informationData['ssc']["char_count"] + informationData['es']["char_count"],
        characters: {},
    }
    for (const info of [informationData['apo'], informationData['ssc'], informationData['es']]) {
        for (const [character, count] of Object.entries(info.characters)) {
            mg_info.characters[character] = (mg_info.characters[character] || 0) + count;
        }
    }

    const all_an_info = {
        "line_count": informationData['an']["line_count"] + informationData['kj']["line_count"],
        "word_count": informationData['an']["word_count"] + informationData['kj']["word_count"],
        "char_count": informationData['an']["char_count"] + informationData['kj']["char_count"],
        characters: {},
    }

    for (const info of [informationData['an'], informationData['kj']]) {
        for (const [character, count] of Object.entries(info.characters)) {
            all_an_info.characters[character] = (all_an_info.characters[character] || 0) + count;
        }
    }

    const all_info = {
        "line_count": mg_info["line_count"] + informationData['ln']["total"]["line_count"] + informationData['wn']["total"]["line_count"] + all_an_info["line_count"],
        "word_count": mg_info["word_count"] + informationData['ln']["total"]["word_count"] + informationData['wn']["total"]["word_count"] + all_an_info["word_count"],
        "char_count": mg_info["char_count"] + informationData['ln']["total"]["char_count"] + informationData['wn']["total"]["char_count"] + all_an_info["char_count"],
    }

    function handleMenu(name) {
        setOpenMenus((prevOpenMenus) => ({
            ...prevOpenMenus,
            [name]: !prevOpenMenus[name],
        }));
    }

    return (
        <div className="info-page">
            <h1 className="filters-header">INFORMATION</h1>
            <div className="info-content">
                <div className="info-main">
                    <h1 className="info-header">MEDIUMS</h1>
                    <div className="info-info">
                        <p>Lines: {formatNumber(all_info.line_count)}</p>
                        <p>Approximate Word Count: {formatNumber(all_info.word_count)}</p>
                        <p>Character Count: {formatNumber(all_info.char_count)}</p>
                    </div>
                    {generateCollapsiblesLN(informationData['ln'])}
                    <br />
                    {generateCollapsiblesWN(informationData['wn'])}
                    <br />
                    <Collapsible onOpening={() => handleMenu('anime')} onClose={() => handleMenu('anime')} trigger="Anime">
                        <div className="info-collapse">
                            {openMenus['anime'] && (
                                <>
                                    <p>Seasons: {formatNumber(4)}</p>
                                    <p>Subtitles: {formatNumber(all_an_info.line_count)}</p>
                                    <p>Approximate Word Count: {formatNumber(all_an_info.word_count)}</p>
                                    <p>Character Count: {formatNumber(all_an_info.char_count)}</p>
                                    <Collapsible trigger="Characters">
                                        <div className='info-character-box-small'>
                                            {Object.keys(all_an_info.characters).sort((a, b) => {
                                                return all_an_info.characters[b] - all_an_info.characters[a]
                                            }).map(character => (
                                                <div key={character}>
                                                    <span>{character}: </span>
                                                    <span>{all_an_info.characters[character]}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Collapsible>
                                    <br />
                                    {generateCollapsiblesAN(informationData['an'])}
                                    <br />
                                    {generateCollapsiblesKJ(informationData['kj'])}
                                </>
                            )}
                        </div>
                    </Collapsible>
                    <br />
                    <Collapsible onOpening={() => handleMenu('mog')} onClose={() => handleMenu('mog')} trigger="Master of Garden">
                        <div className="info-collapse">
                            {openMenus['mog'] && (
                                <>
                                    <p>Paragraphs: {formatNumber(mg_info.line_count)}</p>
                                    <p>Approximate Word Count: {formatNumber(mg_info.word_count)}</p>
                                    <p>Character Count: {formatNumber(mg_info.char_count)}</p>
                                    <Collapsible trigger="Characters">
                                        <div className='info-character-box-small'>
                                            {Object.keys(mg_info.characters).sort((a, b) => {
                                                return mg_info.characters[b] - mg_info.characters[a]
                                            }).map(character => (
                                                <div key={character}>
                                                    <span>{character}: </span>
                                                    <span>{mg_info.characters[character]}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Collapsible>
                                    <br />
                                    {generateCollapsiblesSSC(informationData['ssc'])}
                                    <br />
                                    {generateCollapsiblesES(informationData['es'])}
                                    <br />
                                    {generateCollapsiblesAPO(informationData['apo'])}
                                </>
                            )}
                        </div>
                    </Collapsible>
                </div>
                <br /><br />
                <div className="info-main">
                    <h1 className="info-header">CHARACTERS</h1>
                    {generateCollapsiblesChar(informationData['chars'])}
                    <button title={"To Top"} className="scroll-top-button" onClick={scrollToTop}>UP</button>
                </div>
            </div>

        </div>
    );
}

export default InfoPage;
