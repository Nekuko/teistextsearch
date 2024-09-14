import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faFileImage, faCircleInfo, faSlashLine } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ReactComponent as SlashLine } from '../../../../svgs/nav_separator.svg';
import '../../Results.css'; // Import the CSS file

const MultiCharacterSentence = ({
    sentence,
    iconRefs,
    characterName,
    setPreviewText,
    characterImages = {}, // Object mapping character names to image URLs
    showPopup, // Function to handle popup display (if provided)
    handleMouseEnterInfo, // Function to handle mouse enter for info icon (if provided)
    volumeKey, // Key for volume data (if used in popup)
    chapterKey,
    chapterTitle, // Key for chapter data (if used in popup)
    index,
    highlight,
    filterState // Index of the sentence (used for unique popup IDs)
}) => {

    const highlightKeywords = (sentence) => {
        sentence.characters.forEach((character) => {
            const startIndex = character.start;
            const endIndex = character.end;
            let substringText = sentence.text.substring(startIndex, endIndex + 1); // Use substringText instead of substring and highlightedText
            if (filterState.regex) {
                const regex = new RegExp(filterState.expression, 'g');
                substringText = substringText.replace(regex, '<span class="highlight">$&</span>');
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
                    substringText = substringText.replace(regex, '<span class="highlight">$&</span>');
                });
            }

            if (character.name !== characterName) {
                substringText = `<span class="sentence-dimmed">${substringText}</span>`
            }

            character.substring = substringText;
        });
        let combined = '';
        for (let character of sentence.characters.sort((a, b) => a.start - b.start)) {
            combined += character.substring;
        }
        return combined;

    };

    function highlightSubstrings(sentence) {
        let highlightedText = sentence.text;

        for (const char of sentence.characters) {
            if (char.name !== characterName) {
                const start = char.start;
                const end = char.end + 1;
                highlightedText = highlightedText.substring(0, start) + `<span class="sentence-dimmed">${highlightedText.substring(start, end)}</span>` + highlightedText.substring(end);
            }
        }

        return highlightedText;
    }

    return (
        <div className="sentence-character-container" key={index}>
            <div className="sentence-box-image">
                <p dangerouslySetInnerHTML={{ __html: highlight ? highlightKeywords(sentence) : highlightSubstrings(sentence) }} />
                <div className="icon-container-triple">
                    <CopyToClipboard text={sentence.text}>
                        <div className="copy-icon">
                            <FontAwesomeIcon icon={faCopy} onClick={() => showPopup(volumeKey, chapterKey, index)} />
                            {/* Ensure unique ID based on provided keys or index */}
                            {showPopup && (
                                <div className="popup" id={`popup-${volumeKey}-${chapterKey}-${index}`}>
                                    Copied!
                                </div>
                            )}
                        </div>
                    </CopyToClipboard>
                    <SlashLine className="icon-slashline" />
                    <div
                        className="info-icon-container"
                        onMouseEnter={() => handleMouseEnterInfo(volumeKey, chapterKey, index, chapterTitle, sentence.line)}
                        onMouseLeave={() => setPreviewText(null)}
                        ref={ref => iconRefs.current[`${volumeKey}-${chapterKey}-${index}-info`] = ref}
                    >
                        {sentence && (
                            <FontAwesomeIcon className="info-icon" icon={faCircleInfo} />
                        )}
                    </div>
                </div>
            </div>
            <div className="character-box">
                {characterImages[sentence.name_variant] && (
                    <img src={characterImages[sentence.name_variant]} alt={sentence.name_variant || 'None'} />
                )}
                {(!characterImages[sentence.name_variant] && characterImages[sentence.name]) && (
                    <img src={characterImages[sentence.name]} alt={sentence.name || 'None'} />
                )}
                <p title={sentence.name !== sentence.name_variant ? `${sentence.name_variant} (${sentence.name})` : sentence.name}>
                    {sentence.name !== sentence.name_variant ? `${sentence.name_variant}` : sentence.name}
                </p>
            </div>
        </div>
    );
};

export default MultiCharacterSentence;