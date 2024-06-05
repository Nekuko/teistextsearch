// WebNovelResults.js
import React from 'react';
import Collapsible from 'react-collapsible';
import '../Results.css'; // Import the CSS file
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function WebNovelResults({ wnData, volumeImages, highlight, filterState, wnDropdownState }) {
  // If wnData is empty, return nothing
  if (Object.keys(wnData.volumes).length === 0) {
    return null;
  }

  const highlightKeywords = (text) => {
    let highlightedText = text;
    filterState.keywords.forEach(keyword => {
      let regex;
      if (filterState.exactMatch) {
        // If exactMatch is true, match the keyword exactly as it is
        regex = new RegExp(`\\b${keyword}\\b`, filterState.caseSensitive ? 'g' : 'gi');
      } else {
        // If exactMatch is false, match any occurrence of the keyword
        regex = new RegExp(keyword, filterState.caseSensitive ? 'g' : 'gi');
      }
      highlightedText = highlightedText.replace(regex, '<span class="highlight">$&</span>');
    });
    return highlightedText;
  };

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
    <div className="wn-results">
      {Object.entries(wnData.volumes).map(([volumeKey, volumeValue]) => {
        // Get the volume title from wnDropdownState
        const volumeTitle = `Volume ${volumeKey}` || `Volume ${volumeKey.slice(1)}`;
        // Calculate the total count for each volume
        const volumeCount = Object.values(volumeValue.chapters).reduce((total, chapter) => total + chapter.count, 0);
  
        return (
          <Collapsible className="medium-margin" trigger={
            <>
            <div className="volume-trigger">
              {volumeImages[volumeKey] && <img className="cover-image" src={volumeImages[volumeKey]} alt={volumeTitle} />}
              {`${volumeTitle} (Total: ${volumeCount})`}
            </div>
            </>
          } key={volumeKey}>
            {Object.entries(volumeValue.chapters).map(([chapterKey, chapterValue]) => {
              // Get the chapter title from wnDropdownState
              const chapterTitle = wnDropdownState.volumesChecked[`Volume ${volumeKey}`][`v${volumeKey}c${chapterKey}`].title || `Chapter ${chapterKey.slice(1)}`;

              return (
                <Collapsible trigger={`${chapterKey} | ${chapterTitle} (Total: ${chapterValue.count})`} key={chapterKey}>
                  <div className="sentences-container">
                  {chapterValue.sentences.map((sentence, index) => (
                  <div className="sentence-box" key={index}>
                    <p dangerouslySetInnerHTML={{ __html: highlight ? highlightKeywords(sentence) : sentence }} />
                      <CopyToClipboard text={sentence}>
                      <div className="copy-icon" onClick={() => showPopup(volumeKey, chapterKey, index)}>
                          <FontAwesomeIcon icon={faCopy} />
                          {/* Ensure the ID is unique for each popup */}
                          <div className="popup" id={`popup-${volumeKey}-${chapterKey}-${index}`}>
                            Copied!
                          </div>
                        </div>
                      </CopyToClipboard>
                    </div>
                  ))}
                  </div>
                </Collapsible>
              );
            })}
          </Collapsible>
        );
      })}
    </div>
  );
}
  
export default WebNovelResults;
