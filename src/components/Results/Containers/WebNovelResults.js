// WebNovelResults.js
import React, { useState, useRef, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import '../Results.css'; // Import the CSS file
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCircleInfo, faAnglesLeft, faAnglesRight, faAngleLeft, faAngleRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SlashLine } from '../../../svgs/nav_separator.svg';
import InfoPreview from './InfoPreview/InfoPreview';

function WebNovelResults({ wnData, volumeImages, highlight, filterState, wnDropdownState }) {
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
    Object.keys(wnData.volumes).forEach(volumeKey => {
      Object.keys(wnData.volumes[volumeKey].chapters).forEach(chapterKey => {
        // Create a unique key for each chapter
        const uniqueChapterKey = `${volumeKey}-${chapterKey}`;
        initialPages[uniqueChapterKey] = 1;
      });
    });
    setCurrentPage(initialPages);
  }, [wnData]);

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
    Object.keys(wnData.volumes).forEach(volumeKey => {
      Object.keys(wnData.volumes[volumeKey].chapters).forEach(chapterKey => {
        // Create a unique key for each chapter
        const uniqueChapterKey = `${volumeKey}-${chapterKey}`;
        const len = wnData.volumes[volumeKey].chapters[chapterKey].sentences.length
        if (currentPage[uniqueChapterKey] > Math.ceil(len / value)) {
          newCurrentPages[uniqueChapterKey] = Math.ceil(len / value)
        }
      });
    });
    setCurrentPage(newCurrentPages);
  }


  const iconRefs = useRef({});
  // If wnData is empty, return nothing
  if (Object.keys(wnData.volumes).length === 0) {
    return null;
  }

  function handleMouseEnterInfo(volumeKey, chapterKey, index, chapterTitle, line) {
    const rect = iconRefs.current[`${volumeKey}-${chapterKey}-${index}-info`].getBoundingClientRect();
    setPreviewPosition({ top: rect.top, left: rect.left });

    // Set the text data directly as the preview text
    setPreviewText(`Web Novel<br />Volume ${volumeKey}<br />
    Chapter ${chapterKey} - ${chapterTitle}<br />Paragraph ${line}`);
  }

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

  function generateCitation(volume, chapterKey, chapter, sentence) {
    return `Web Novel, ${volume}, Chapter ${chapterKey}: ${chapter}`
  }

  return (
    <div className="anime-trigger">
      {Object.entries(wnData.volumes).map(([volumeKey, volumeValue]) => {
        // Get the volume title from wnDropdownState
        const volumeTitle = `Volume ${volumeKey}` || `Volume ${volumeKey.slice(1)}`;
        // Calculate the total count for each volume
        const volumeCount = Object.values(volumeValue.chapters).reduce((total, chapter) => total + chapter.count, 0);


        if (Object.keys(wnData.volumes).length === 1 && !openMenus[`wn-${volumeKey}`]) {
          openMenu(`wn-${volumeKey}`)
        }

        return (
          <Collapsible open={openMenus[`wn-${volumeKey}`]} onOpening={() => openMenu(`wn-${volumeKey}`)} onClose={() => closeMenu(`wn-${volumeKey}`)} className="medium-margin" trigger={
            <>
              <div className="volume-trigger">
                {volumeImages[volumeKey] && <img className="cover-image" src={volumeImages[volumeKey]} alt={volumeTitle} />}
                {`${volumeTitle} (Total: ${volumeCount})`}
              </div>
            </>
          } key={volumeKey}>
            {openMenus[`wn-${volumeKey}`] && (
              <>
                {Object.entries(volumeValue.chapters).sort((a, b) => {
                  const chapterA = a[0].split("c")[1];
                  const chapterB = b[0].split("c")[1];
                  return chapterA - chapterB; // Otherwise, sort by part
                })
                  .map(([chapterKey, chapterValue]) => {

                    const uniqueChapterKey = `${volumeKey}-${chapterKey}`;
                    // Get the chapter title from wnDropdownState
                    const chapterTitle = wnDropdownState.volumesChecked[`Volume ${volumeKey}`][`v${volumeKey}c${chapterKey}`].title || `Chapter ${chapterKey.slice(1)}`;
                    if (Object.keys(volumeValue.chapters).length === 1 && !openMenus[`wn-${uniqueChapterKey}`]) {
                      openMenu(`wn-${uniqueChapterKey}`)
                    }

                    return (
                      <Collapsible open={openMenus[`wn-${uniqueChapterKey}`]} onOpening={() => openMenu(`wn-${uniqueChapterKey}`)} onClose={() => closeMenu(`wn-${uniqueChapterKey}`)} trigger={`Chapter ${chapterKey} | ${chapterTitle} (Total: ${chapterValue.count})`} key={chapterKey}>
                        {openMenus[`wn-${uniqueChapterKey}`] && (
                          <>
                            <div className="sentences-container">
                              {chapterValue.sentences.slice((currentPage[uniqueChapterKey] - 1) * sentencesPerPage, currentPage[uniqueChapterKey] * sentencesPerPage).map((sentence, index) => (
                                <div className="sentence-box" key={index}>
                                  <p dangerouslySetInnerHTML={{ __html: highlight ? highlightKeywords(sentence.text) : sentence.text }} />
                                  <div className="icon-container">
                                    <CopyToClipboard text={sentence.text}>
                                      <div className="copy-icon">
                                        <FontAwesomeIcon
                                          onClick={() => showPopup(volumeKey, chapterKey, index)}
                                          icon={faCopy} />
                                        {/* Ensure the ID is unique for each popup */}
                                        <div className="popup hidden" id={`popup-${volumeKey}-${chapterKey}-${index}`}>
                                          Copied!
                                        </div>
                                      </div>
                                    </CopyToClipboard>
                                    <SlashLine className="icon-slashline" />
                                    <CopyToClipboard text={generateCitation(volumeTitle, chapterKey, chapterTitle, sentence)}>
                                      <div className="quote-icon" >
                                        <FontAwesomeIcon
                                          onClick={() => showPopup(volumeKey, chapterKey, index, true)}
                                          icon={faQuoteRight} />
                                        {/* Ensure the ID is unique for each popup */}
                                        <div className="popup hidden" id={`popup-${volumeKey}-${chapterKey}-${index}-quote`}>
                                          Copied!
                                        </div>
                                      </div>
                                    </CopyToClipboard>
                                    <SlashLine className="icon-slashline" />
                                    <div className="info-icon-container"
                                      onMouseEnter={() => handleMouseEnterInfo(volumeKey, chapterKey, index,
                                        chapterTitle, sentence.line)}
                                      onMouseLeave={() => setPreviewText(null)}
                                      ref={ref => iconRefs.current[`${volumeKey}-${chapterKey}-${index}-info`] = ref}
                                    >
                                      {sentence && (
                                        <FontAwesomeIcon className="info-icon" icon={faCircleInfo} />
                                      )}
                                    </div>
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

export default WebNovelResults;
