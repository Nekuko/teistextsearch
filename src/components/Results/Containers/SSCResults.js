// AnimeResults.js
import React, { useState, useRef, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import '../Results.css'; // Import the CSS file
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faFileImage, faCircleInfo, faAnglesLeft, faAnglesRight, faAngleLeft, faAngleRight, faQuoteRight, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SlashLine } from '../../../svgs/nav_separator.svg';
import InfoPreview from './InfoPreview/InfoPreview';

function SSCResults({ full, manageContextData, sscData, images, highlight, filterState, main, partsChecked }) {
    const [previewText, setPreviewText] = useState(null);
    const [previewPosition, setPreviewPosition] = useState({ top: 0, left: 0 })
    const [currentPage, setCurrentPage] = useState({});
    const [openMenus, setOpenMenus] = useState({});

    function openMenu(name) {
        setOpenMenus((prevOpenMenus) => ({
            ...prevOpenMenus,
            [name]: true,
        }));
    }

    function closeMenu(name) {
        setOpenMenus((prevOpenMenus) => ({
            ...prevOpenMenus,
            [name]: false,
        }));
    }

    useEffect(() => {
        const initialPages = {};
        Object.keys(sscData.parts).forEach(partKey => {
            Object.keys(sscData.parts[partKey].chapters).forEach(chapterKey => {
                Object.keys(sscData.parts[partKey].chapters[chapterKey].episodes).forEach(episodeKey => {
                    // Create a unique key for each episode
                    let uniqueEpisodeKey = `${partKey}-${chapterKey}-${episodeKey}`;
                    if (uniqueEpisodeKey.startsWith("p1-c1-15")) {
                        uniqueEpisodeKey = `p1-11 Final-e${uniqueEpisodeKey.split("e")[1]}`;
                    }
                    initialPages[uniqueEpisodeKey] = 1;
                });
            });
        });
        setCurrentPage(initialPages);
    }, [sscData]);

    const [sentencesPerPage, setSentencesPerPage] = useState(() => {
        const savedState = sessionStorage.getItem('sentencesPerPage');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState;
        }
        return 15;
    });

    useEffect(() => {
        sessionStorage.setItem('sentencesPerPage', JSON.stringify(sentencesPerPage));
    }, [sentencesPerPage]);

    function doSentencesPerPage(inputValue) {
        let value = parseInt(inputValue);
        if (!isNaN(value) && value > 0) {
            // Update the global variable sentencesPerPage
            setSentencesPerPage(value);
        } else {
            value = 15;
            setSentencesPerPage(15);
        }
        let newCurrentPages = { ...currentPage };
        Object.keys(sscData.parts).forEach(partKey => {
            Object.keys(sscData.parts[partKey].chapters).forEach(chapterKey => {
                Object.keys(sscData.parts[partKey].chapters[chapterKey].episodes).forEach(episodeKey => {
                    // Create a unique key for each chapter
                    let uniqueEpisodeKey = `${partKey}-${chapterKey}-${episodeKey}`;
                    if (uniqueEpisodeKey.startsWith("p1-c1-15")) {
                        uniqueEpisodeKey = `p1-11 Final-e${uniqueEpisodeKey.split("e")[1]}`;
                    }
                    const len = sscData.parts[partKey].chapters[chapterKey].episodes[episodeKey].sentences.length
                    if (currentPage[uniqueEpisodeKey] > Math.ceil(len / value)) {
                        newCurrentPages[uniqueEpisodeKey] = Math.ceil(len / value)
                    }
                });
            });
        });
        setCurrentPage(newCurrentPages);
    }


    const iconRefs = useRef({});

    const characterImages = images.characterImages;
    const coverImages = images.sscCoverImages;

    const highlightKeywords = (text) => {
        let highlightedText = text;
        if (filterState.regex) {
            const regex = new RegExp(filterState.expression, 'g');
            highlightedText = highlightedText.replace(regex, '<span class="highlight">$&</span>');
        } else {
            filterState.keywords.forEach(keyword => {
                let regex;
                if (filterState.regex) {
                    // If regex is true, use the keyword as a regular expression
                    regex = new RegExp(keyword, filterState.caseSensitive ? 'g' : 'gi');
                } else if (filterState.exactMatch) {
                    // If exactMatch is true, match the keyword exactly as it is
                    regex = new RegExp(`\\b${keyword}\\b`, filterState.caseSensitive ? 'g' : 'gi');
                } else {
                    // Otherwise, match any occurrence of the keyword
                    regex = new RegExp(keyword, filterState.caseSensitive ? 'g' : 'gi');
                }

                // Highlight matches
                highlightedText = highlightedText.replace(regex, '<span class="highlight">$&</span>');
            });
        }

        return highlightedText;
    };


    function handleMouseEnterInfo(partKey, chapterKey, episodeKey, index, chapterTitle, partTitle, episodeTitle, line, name, name_variant) {
        let nameFinal;
        if (name === name_variant) {
            nameFinal = name;
        } else {
            nameFinal = `${name_variant} | (${name})`;
        }
        const rect = iconRefs.current[`${partKey}-${chapterKey}-${episodeKey}-${index}-info`].getBoundingClientRect();
        setPreviewPosition({ top: rect.top, left: rect.left });

        // Set the text data directly as the preview text
        setPreviewText(`Master of Garden<br />Seven Shadows Chronicles<br />${chapterTitle.replace("|", "-")}<br />
        Chapter ${partTitle.replace("|", "-")}<br />Episode ${episodeKey.slice(1)} - ${episodeTitle}<br />Line ${line}<br />${nameFinal}`);
    }




    if (Object.keys(sscData.parts).length === 0) {
        return null;
    }



    function showPopup(partIndex, episodeIndex, sentenceIndex, quote) {
        // Use a unique ID for each popup
        let popup;
        if (quote) {
            popup = document.getElementById(`popup-${partIndex}-${episodeIndex}-${sentenceIndex}-quote`);
        } else {
            popup = document.getElementById(`popup-${partIndex}-${episodeIndex}-${sentenceIndex}`);
        }
        if (popup) {
            popup.classList.remove('hidden');
            popup.classList.add('show');
            setTimeout(() => {
                popup.classList.remove('show');
                popup.classList.add('hidden');
            }, 1000); // The popup will be shown for 2 seconds
        }
    }

    function generateCitation(part, chapter, episode, episodeKey, sentence) {
        return `Seven Shadows Chronicles, ${part.replace(" | ", ": ")}, Chapter ${chapter.replace(" | ", ": ")}, Episode ${episodeKey.replace("e", "")}: ${episode}`
    }

    return (
        <div className="anime-trigger">
            {Object.entries(sscData.parts).sort((a, b) => {
                const episodeA = parseInt(a[0].replace("p", ""), 10);
                const episodeB = parseInt(b[0].replace("p", ""), 10);
                return episodeA - episodeB; // Otherwise, sort by part
            })
                .map(([partKey, chapters]) => {
                    const partkeys = Object.keys(partsChecked);
                    let partTitle = "Cannot find.";
                    for (let i = 0; i < partkeys.length; i++) {
                        if (partkeys[i].startsWith(`Part ${partKey.slice(1)}`)) {
                            partTitle = partkeys[i];
                            break;
                        }
                    }
                    const partCount = Object.values(chapters.chapters).reduce((total, chapter) => {
                        return total + Object.values(chapter.episodes).reduce((total, episode) => {
                            return total + episode.sentences.length;
                        }, 0);
                    }, 0);
                    if (Object.keys(sscData.parts).length === 1 && !openMenus[`ssc-${partKey}`]) {
                        openMenu(`ssc-${partKey}`)
                    }

                    return (
                        <div key={partKey}>
                            <Collapsible open={openMenus[`ssc-${partKey}`]} onOpening={() => openMenu(`ssc-${partKey}`)} onClose={() => closeMenu(`ssc-${partKey}`)} className="medium-margin" trigger={
                                <>
                                    <div className="medium-trigger">
                                        {main && coverImages[partKey] && <img className="cover-image" src={coverImages[partKey]} alt={partTitle} />}
                                        {`${partTitle} (Total: ${partCount})`}
                                    </div>
                                </>
                            }>
                                {openMenus[`ssc-${partKey}`] && (
                                    <>
                                        {Object.entries(chapters.chapters).sort((a, b) => {
                                            let [partA, subpartA] = a[0].split("-"); // Extract part and subpart
                                            let [partB, subpartB] = b[0].split("-");
                                            partA = partA.replace("c", "");
                                            partB = partB.replace("c", "");
                                            if (partA === partB) {
                                                return parseInt(subpartA) - parseInt(subpartB); // Sort by subpart if parts are equal
                                            }
                                            return partA - partB; // Otherwise, sort by part
                                        })
                                            .map(([chapterKey, chapterValue]) => {
                                                const chapterKeys = Object.keys(partsChecked[partTitle]).sort();
                                                let chapterTitle = "Cannot find.";
                                                let imageKey = chapterKey;
                                                if (chapterKey === "c1-15") {
                                                    chapterKey = "11 Final"
                                                    imageKey = "c1-15";
                                                }

                                                for (let i = 0; i < chapterKeys.length; i++) {
                                                    if (chapterKeys[i].startsWith(`${chapterKey.slice(1)}`)) {
                                                        chapterTitle = chapterKeys[i];
                                                        break;
                                                    }
                                                }
                                                const chapterCount = Object.values(chapterValue.episodes).reduce((total, episode) => total + episode.sentences.length, 0);
                                                if (Object.keys(chapters.chapters).length === 1 && !openMenus[`ssc-${partKey}-${chapterKey}`]) {
                                                    openMenu(`ssc-${partKey}-${chapterKey}`)
                                                }
                                                return (
                                                    <Collapsible open={openMenus[`ssc-${partKey}-${chapterKey}`]} onOpening={() => openMenu(`ssc-${partKey}-${chapterKey}`)} onClose={() => closeMenu(`ssc-${partKey}-${chapterKey}`)} className="medium-margin" trigger={
                                                        <>
                                                            <div className="volume-trigger">
                                                                {coverImages[imageKey.split("c")[1]] && <img className="cover-image-ssc" src={coverImages[imageKey.split("c")[1]]} alt={chapterTitle} />}
                                                                {`Chapter ${chapterTitle} (Total: ${chapterCount})`}
                                                            </div>
                                                        </>
                                                    } key={chapterTitle}>
                                                        {openMenus[`ssc-${partKey}-${chapterKey}`] && (
                                                            <>
                                                                {Object.entries(chapterValue.episodes).sort((a, b) => {
                                                                    const episodeA = parseInt(a[0].split("e")[1], 10);
                                                                    const episodeB = parseInt(b[0].split("e")[1], 10);
                                                                    return episodeA - episodeB;
                                                                })
                                                                    .map(([episodeKey, episodeValue]) => {
                                                                        let episodeTitle = partsChecked[partTitle][chapterTitle][`e${episodeKey.slice(1)}`].title;
                                                                        const uniqueChapterKey = `${partKey}-${chapterKey}-${episodeKey}`;

                                                                        if (Object.keys(chapterValue.episodes).length === 1 && !openMenus[uniqueChapterKey]) {
                                                                            openMenu(uniqueChapterKey);
                                                                        }
                                                                        return (
                                                                            <Collapsible open={openMenus[uniqueChapterKey]} onOpening={() => openMenu(uniqueChapterKey)} onClose={() => closeMenu(uniqueChapterKey)} trigger={`Episode ${episodeKey.slice(1)} | ${episodeTitle} (Total: ${episodeValue.sentences.length})`} key={episodeKey}>
                                                                                {openMenus[uniqueChapterKey] && (
                                                                                    <>
                                                                                        <div className="sentences-container">
                                                                                            {episodeValue.sentences.slice((currentPage[uniqueChapterKey] - 1) * sentencesPerPage, currentPage[uniqueChapterKey] * sentencesPerPage).map((sentence, index) => (
                                                                                                <div className="sentence-character-container" key={index}>
                                                                                                    <div className="sentence-box-image">
                                                                                                        <FontAwesomeIcon
                                                                                                            className="context-icon"
                                                                                                            onClick={() => manageContextData({ full: full, sentence: sentence, partKey: partKey, chapterKey: chapterKey, episodeKey: episodeKey, episodeTitle: episodeTitle, partTitle: partTitle, chapterTitle: chapterTitle }, 'ssc')}
                                                                                                            icon={faUpRightAndDownLeftFromCenter} />
                                                                                                        <p dangerouslySetInnerHTML={{ __html: highlight ? highlightKeywords(sentence.subtitle) : sentence.subtitle }} />
                                                                                                        <div className="icon-container-triple">
                                                                                                            <CopyToClipboard text={sentence.subtitle}>
                                                                                                                <div className="copy-icon">
                                                                                                                    <FontAwesomeIcon
                                                                                                                        onClick={() => showPopup(partKey, chapterKey, index)}
                                                                                                                        icon={faCopy} />
                                                                                                                    <div className="popup hidden" id={`popup-${partKey}-${chapterKey}-${index}`}>
                                                                                                                        Copied!
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </CopyToClipboard>
                                                                                                            <SlashLine className="icon-slashline" />
                                                                                                            <CopyToClipboard text={generateCitation(partTitle, chapterTitle, episodeTitle, episodeKey, sentence)}>
                                                                                                                <div className="quote-icon" >
                                                                                                                    <FontAwesomeIcon
                                                                                                                        onClick={() => showPopup(partKey, chapterKey, index, true)}
                                                                                                                        icon={faQuoteRight} />
                                                                                                                    {/* Ensure the ID is unique for each popup */}
                                                                                                                    <div className="popup hidden" id={`popup-${partKey}-${chapterKey}-${index}-quote`}>
                                                                                                                        Copied!
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </CopyToClipboard>
                                                                                                            <SlashLine className="icon-slashline" />
                                                                                                            <div className="image-icon-container"
                                                                                                                ref={ref => iconRefs.current[`${partKey}-${chapterKey}-${index}`] = ref}
                                                                                                            >
                                                                                                                {sentence.url && (
                                                                                                                    <a href={`https://drive.google.com/file/d/${sentence.url.split('/d/')[1].split('/view')[0]}/view`} target="_blank" rel="noopener noreferrer">
                                                                                                                        <FontAwesomeIcon className="image-icon" icon={faFileImage} />
                                                                                                                    </a>

                                                                                                                )}
                                                                                                            </div>
                                                                                                            <SlashLine className="icon-slashline" />
                                                                                                            <div className="info-icon-container"
                                                                                                                onMouseEnter={() => handleMouseEnterInfo(partKey, chapterKey, episodeKey, index, partTitle,
                                                                                                                    chapterTitle, episodeTitle, sentence.line, sentence.name, sentence.name_variant)}
                                                                                                                onMouseLeave={() => setPreviewText(null)}
                                                                                                                ref={ref => iconRefs.current[`${partKey}-${chapterKey}-${episodeKey}-${index}-info`] = ref}
                                                                                                            >
                                                                                                                {sentence && (
                                                                                                                    <FontAwesomeIcon className="info-icon" icon={faCircleInfo} />
                                                                                                                )}
                                                                                                            </div>

                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="character-box">
                                                                                                        {characterImages[sentence.name_variant] && (
                                                                                                            <img src={characterImages[sentence.name_variant]} alt={sentence.name_variant || 'Narrator'} />
                                                                                                        ) || (characterImages[sentence.name] && (
                                                                                                            <img src={characterImages[sentence.name]} alt={sentence.name || 'Narrator'} />
                                                                                                        ))}
                                                                                                        <p title={sentence.name_variant || 'Narrator'}>
                                                                                                            {
                                                                                                                sentence.name && sentence.name_variant ? (
                                                                                                                    sentence.name !== sentence.name_variant ? (
                                                                                                                        sentence.name_variant
                                                                                                                    ) : sentence.name
                                                                                                                ) : 'Narrator'
                                                                                                            }
                                                                                                        </p>
                                                                                                    </div>



                                                                                                </div>
                                                                                            ))}
                                                                                            {sentencesPerPage && (
                                                                                                <div className='page-settings'>
                                                                                                    <div className="pagination-controls">
                                                                                                        <button title={`Page 1`} disabled={currentPage[uniqueChapterKey] === 1} onClick={() => setCurrentPage(oldPages => ({ ...oldPages, [uniqueChapterKey]: 1 }))}>
                                                                                                            <FontAwesomeIcon icon={faAnglesLeft} />
                                                                                                        </button>
                                                                                                        <button title={`Page ${Math.max(currentPage[uniqueChapterKey] - 1, 1)}`} disabled={currentPage[uniqueChapterKey] === 1} onClick={() => setCurrentPage(oldPages => ({ ...oldPages, [uniqueChapterKey]: Math.max((oldPages[uniqueChapterKey] || 1) - 1, 1) }))}>
                                                                                                            <FontAwesomeIcon icon={faAngleLeft} />
                                                                                                        </button>
                                                                                                        <input type="number" min="1" max={Math.ceil(episodeValue.sentences.length / sentencesPerPage)} value={currentPage[uniqueChapterKey] || 1} onChange={e => setCurrentPage(oldPages => ({ ...oldPages, [uniqueChapterKey]: Math.min(Math.max(Number(e.target.value), 1), Math.ceil(episodeValue.sentences.length / sentencesPerPage)) }))} />
                                                                                                        <button title={`Page ${Math.min(currentPage[uniqueChapterKey] + 1, Math.ceil(episodeValue.sentences.length / sentencesPerPage))}`} disabled={currentPage[uniqueChapterKey] === Math.ceil(episodeValue.sentences.length / sentencesPerPage)} onClick={() => setCurrentPage(oldPages => ({ ...oldPages, [uniqueChapterKey]: Math.min((oldPages[uniqueChapterKey] || 1) + 1, Math.ceil(episodeValue.sentences.length / sentencesPerPage)) }))}>
                                                                                                            <FontAwesomeIcon icon={faAngleRight} />
                                                                                                        </button>
                                                                                                        <button title={`Page ${Math.ceil(episodeValue.sentences.length / sentencesPerPage)}`} disabled={currentPage[uniqueChapterKey] === Math.ceil(episodeValue.sentences.length / sentencesPerPage)} onClick={() => setCurrentPage(oldPages => ({ ...oldPages, [uniqueChapterKey]: Math.ceil(episodeValue.sentences.length / sentencesPerPage) }))}>
                                                                                                            <FontAwesomeIcon icon={faAnglesRight} />
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <input
                                                                                                        type="number"
                                                                                                        value={sentencesPerPage}
                                                                                                        onChange={(e) => doSentencesPerPage(parseInt(e.target.value))}
                                                                                                        className="settings-spp"
                                                                                                    />
                                                                                                </div>
                                                                                            )}
                                                                                        </div>
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
                        </div>
                    );
                })}
            {previewText && <InfoPreview info={previewText} position={previewPosition} />}
        </div>
    );

}

export default SSCResults;
