import React, { useState, useRef, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import '../Results.css'; // Import the CSS file
import InfoPreview from './InfoPreview/InfoPreview';
import MultiCharacterSentence from './MultiCharacterSentence/MultiCharacterSentence';

function LightNovelCharacterResults({ character, lnData, images, highlight, filterState, lnDropdownState }) {
  const [previewText, setPreviewText] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ top: 0, left: 0 })
  const [currentPage, setCurrentPage] = useState({});
  const [openMenus, setOpenMenus] = useState({});

  const characterImages = images.characterImages;
  const volumeImages = images.lnCoverImages;

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

  function handleMouseEnterInfo(volumeKey, chapterKey, index, chapterTitle, line) {
    const rect = iconRefs.current[`${volumeKey}-${chapterKey}-${index}-info`].getBoundingClientRect();
    console.log(rect)
  
    setPreviewPosition({ top: rect.top, left: rect.left });

    // Set the text data directly as the preview text
    setPreviewText(`Light Novel<br />${volumeKey.replace("v", " Volume ")}<br />
     ${chapterTitle.replace("|", "-")}<br />Paragraph ${line}`);
  }

  function showPopup(volumeIndex, chapterIndex, sentenceIndex) {
    // Use a unique ID for each popup
    const popup = document.getElementById(`popup-${volumeIndex}-${chapterIndex}-${sentenceIndex}`);
    if (popup) {
      popup.classList.add('show');
      setTimeout(() => {
        popup.classList.remove('show');
      }, 1000); // The popup will be shown for 2 seconds
    }
  }

  return (
    <div className="anime-trigger">
      {Object.entries(lnData.volumes).sort().map(([volumeKey, volumeValue]) => {
        // Get the volume title from lnDropdownState
        const volumeTitle = lnDropdownState.volumesChecked[`Volume ${volumeKey.slice(1)}`]?.title || `Volume ${volumeKey.slice(1)}`;
        // Calculate the total count for each volume
        const volumeCount = Object.values(volumeValue.chapters).reduce((total, chapter) => total + chapter.count, 0);

        if (Object.keys(lnData.volumes).length === 1 && !openMenus[`ln-${volumeKey}`]) {
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

                    const chapterTitle = `${titleMapping[chapterName.split("|")[0]]} | ${chapterName.split("|")[1]}` || `Chapter ${chapterKey.slice(1)}`;
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
                                />
                              ))}
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
