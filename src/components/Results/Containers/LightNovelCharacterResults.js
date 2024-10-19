import React, { useState, useRef, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import '../Results.css'; // Import the CSS file
import InfoPreview from './InfoPreview/InfoPreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import MultiCharacterSentence from './MultiCharacterSentence/MultiCharacterSentence';

function LightNovelCharacterResults({ full, manageContextData, namedCharacters, namedActive, lnCount, character, lnData, images, highlight, filterState, lnDropdownState }) {
  const [previewText, setPreviewText] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ top: 0, left: 0 })
  const [currentPage, setCurrentPage] = useState({});
  const [openMenus, setOpenMenus] = useState({});
  const characterImages = images.characterImages;
  const volumeImages = images.lnCoverImages;
  if (character) {
    lnCount = 1;
  }

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
    Object.keys(lnData.volumes).forEach(volumeKey => {
      Object.keys(lnData.volumes[volumeKey].chapters).forEach(chapterKey => {
        // Create a unique key for each chapter
        const uniqueChapterKey = `${volumeKey}-${chapterKey}`;
        initialPages[uniqueChapterKey] = 1;
      });
    });
    setCurrentPage(initialPages);
  }, [lnData]);

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
    Object.keys(lnData.volumes).forEach(volumeKey => {
      Object.keys(lnData.volumes[volumeKey].chapters).forEach(chapterKey => {
        // Create a unique key for each chapter
        const uniqueChapterKey = `${volumeKey}-${chapterKey}`;
        const len = lnData.volumes[volumeKey].chapters[chapterKey].sentences.length
        if (currentPage[uniqueChapterKey] > Math.ceil(len / value)) {
          newCurrentPages[uniqueChapterKey] = Math.ceil(len / value)
        }
      });
    });
    setCurrentPage(newCurrentPages);
  }



  const iconRefs = useRef({});
  // If lnData is empty, return nothing
  const titleMapping = {
    "P ": "Prologue",
    "1 ": "Chapter 1",
    "2 ": "Chapter 2",
    "3 ": "Chapter 3",
    "4 ": "Chapter 4",
    "5 ": "Chapter 5",
    "6 ": "Chapter 6",
    "7 ": "Chapter 7",
    "8 ": "Chapter 8",
    "9 ": "Chapter 9",
    "X ": "Auxiliary Chapter",
    "F ": "Final Chapter",
    "A ": "Appendix",
    "E ": "Epilogue",
    "I ": "Intermission"
  }

  if (Object.keys(lnData.volumes).length === 0) {
    return null;
  }

  function handleMouseEnterInfo(volumeKey, chapterKey, index, chapterTitle, sentence) {
    const rect = iconRefs.current[`${volumeKey}-${chapterKey}-${index}-info`].getBoundingClientRect();
    const characterInformation = [];
    for (character of sentence.characters) {
      let nameFinal;
      let start = character.start;
      let end = character.end;
      if (character.name === character.name_variant) {
        nameFinal = character.name;
      } else {
        nameFinal = `${character.name_variant} | (${character.name})`;
      }
      if (sentence.characters.length === 1) {
        characterInformation.push(`${nameFinal}`)
      } else {
        let substring = sentence.text.substring(start, end + 1);
        if (substring.charAt(0) === " ") {
          start++;
        }
        if (substring.charAt(substring.length - 1) === " ") {
          end--;
        }
        characterInformation.push(`${nameFinal} [${start}, ${end + 1}]`)
      }
      
    }

    setPreviewPosition({ top: rect.top, left: rect.left });

    // Set the text data directly as the preview text
    setPreviewText(`Light Novel<br />${volumeKey.replace("v", " Volume ")}<br />
     ${chapterTitle.replace("|", "-")}<br />Paragraph ${sentence.line}<br />${characterInformation.join('<br />')}`);
  }

  function showPopup(volumeIndex, chapterIndex, sentenceIndex, quote) {
    // Use a unique ID for each popup
    let popup;
    if (quote) {
      popup = document.getElementById(`popup-${volumeIndex}-${chapterIndex}-${sentenceIndex}-quote`);
    } else {
      popup = document.getElementById(`popup-${volumeIndex}-${chapterIndex}-${sentenceIndex}`);
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

  function generateCitation(volume, chapter, sentence){
    return `Light Novel, ${volume}, ${chapter.replace(" | ", ": ")}`
  }

  return (
    <div className="anime-trigger">
      {Object.entries(lnData.volumes).sort().map(([volumeKey, volumeValue]) => {
        // Get the volume title from lnDropdownState
        const volumeTitle = lnDropdownState.volumesChecked[`Volume ${volumeKey.slice(1)}`]?.title || `Volume ${volumeKey.slice(1)}`;
        // Calculate the total count for each volume
        const volumeCount = Object.values(volumeValue.chapters).reduce((total, chapter) => total + chapter.count, 0);

        if (lnCount === 1 && !openMenus[`ln-${volumeKey}`]) {
          openMenu(`ln-${volumeKey}`);
        }

        return (
          <Collapsible open={openMenus[`ln-${volumeKey}`]} onOpening={() => openMenu(`ln-${volumeKey}`)} onClose={() => closeMenu(`ln-${volumeKey}`)} className="medium-margin" trigger={
            <>
              <div className="volume-trigger">
                {volumeImages[volumeKey] && <img className="cover-image" src={volumeImages[volumeKey]} alt={volumeTitle} />}
                {`${volumeTitle} (Total: ${volumeCount})`}
              </div>
            </>
          } key={volumeKey}>
            {openMenus[`ln-${volumeKey}`] && (
              <>
                {Object.entries(volumeValue.chapters).sort((a, b) => {
                  const chapterA = a[0].split("c")[1];
                  const chapterB = b[0].split("c")[1];
                  return chapterA - chapterB; // Otherwise, sort by part
                })
                  .map(([chapterKey, chapterValue]) => {
                    // Get the chapter title from lnDropdownState
                    const uniqueChapterKey = `${volumeKey}-${chapterKey}`;
                    const chapterName = lnDropdownState.volumesChecked[`Volume ${volumeKey.slice(1)}`][`${volumeKey}${chapterKey}`].title

                    const chapterTitle = `${titleMapping[chapterName.split("|")[0]]} |${chapterName.split("|")[1]}` || `Chapter ${chapterKey.slice(1)}`;
                    if (Object.keys(volumeValue.chapters).length === 1 && !openMenus[`ln-${volumeKey}-${chapterKey}`]) {
                      openMenu(`ln-${volumeKey}-${chapterKey}`);
                    }

                    return (
                      <Collapsible
                        open={openMenus[`ln-${volumeKey}-${chapterKey}`]}
                        onOpening={() => openMenu(`ln-${volumeKey}-${chapterKey}`)}
                        onClose={() => closeMenu(`ln-${volumeKey}-${chapterKey}`)}
                        trigger={`${chapterTitle} (Total: ${chapterValue.count})`}
                        key={chapterKey}
                      >
                        {openMenus[`ln-${volumeKey}-${chapterKey}`] && (
                          <>
                            <div className="sentences-container">
                              {chapterValue.sentences.slice((currentPage[uniqueChapterKey] - 1) * sentencesPerPage, currentPage[uniqueChapterKey] * sentencesPerPage).map((sentence, index) => (
                                <MultiCharacterSentence
                                  key={index}
                                  sentence={sentence}
                                  filterState={filterState}
                                  characterImages={characterImages}
                                  showPopup={showPopup}
                                  handleMouseEnterInfo={handleMouseEnterInfo}
                                  volumeKey={volumeKey}
                                  chapterKey={chapterKey}
                                  chapterTitle={chapterTitle}
                                  iconRefs={iconRefs}
                                  previewText={previewText}
                                  setPreviewText={setPreviewText}
                                  index={index}
                                  characterName={character}
                                  highlight={highlight}
                                  namedCharacters={namedCharacters}
                                  namedActive={namedActive}
                                  generateCitation={generateCitation}
                                  volumeTitle={volumeTitle}
                                  manageContextData={manageContextData}
                                  full={full}
                                />
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
                                    <input type="number" min="1" max={Math.ceil(chapterValue.sentences.length / sentencesPerPage)} value={currentPage[uniqueChapterKey] || 1} onChange={e => setCurrentPage(oldPages => ({ ...oldPages, [uniqueChapterKey]: Math.min(Math.max(Number(e.target.value), 1), Math.ceil(chapterValue.sentences.length / sentencesPerPage)) }))} />
                                    <button title={`Page ${Math.min(currentPage[uniqueChapterKey] + 1, Math.ceil(chapterValue.sentences.length / sentencesPerPage))}`} disabled={currentPage[uniqueChapterKey] === Math.ceil(chapterValue.sentences.length / sentencesPerPage)} onClick={() => setCurrentPage(oldPages => ({ ...oldPages, [uniqueChapterKey]: Math.min((oldPages[uniqueChapterKey] || 1) + 1, Math.ceil(chapterValue.sentences.length / sentencesPerPage)) }))}>
                                      <FontAwesomeIcon icon={faAngleRight} />
                                    </button>
                                    <button title={`Page ${Math.ceil(chapterValue.sentences.length / sentencesPerPage)}`} disabled={currentPage[uniqueChapterKey] === Math.ceil(chapterValue.sentences.length / sentencesPerPage)} onClick={() => setCurrentPage(oldPages => ({ ...oldPages, [uniqueChapterKey]: Math.ceil(chapterValue.sentences.length / sentencesPerPage) }))}>
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
      {previewText && <InfoPreview info={previewText} position={previewPosition} />}
    </div>
  );
}

export default LightNovelCharacterResults;
