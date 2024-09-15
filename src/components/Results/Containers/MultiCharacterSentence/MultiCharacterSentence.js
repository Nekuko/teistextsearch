import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ReactComponent as SlashLine } from '../../../../svgs/nav_separator.svg';
import '../../Results.css'; // Import the CSS file
import MultiCharacterBox from '../MultiCharacterBox/MultiCharacterBox';

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

    const [characters, setCharacters] = useState([]);
    const [activeCharacter, setActiveCharacter] = useState({ name: 'Loading', name_variant: 'Loading' });
    useEffect(() => {
        if (sentence.characters) {
            const uniqueCharacters = [...new Set(sentence.characters.map(item => ({ name: item.name, name_variant: item.name_variant })))];
            setCharacters(uniqueCharacters);
            if (uniqueCharacters.length === 1) {
                setActiveCharacter(uniqueCharacters[0]);
            } else {
                let nonNarrator = false;
                for (let character of uniqueCharacters.sort((a, b) => {
                    if (['Cid Kagenou', 'Narrator'].includes(a.name)) {
                        return -1;
                      }
                      if (['Cid Kagenou', 'Narrator'].includes(a.name)) {
                        return 1;
                      }
                    
                      // Otherwise, sort in descending order
                      return b.name.localeCompare(a.name);
                  })) {
                    if (characterName) {
                        if (characterName === character.name_variant || characterName === character.name) {
                            setActiveCharacter(character);
                            break;
                        }
                    } else {
                        if (!(['Cid Kagenou', 'Narrator'].includes(character.name))) {
                            setActiveCharacter(character);
                            nonNarrator = true;
                            break;
                        }
                        if (!nonNarrator) {
                            setActiveCharacter(uniqueCharacters.sort((a, b) => {
                                if (['Cid Kagenou', 'Narrator'].includes(a.name)) {
                                    return -1;
                                  }
                                  if (['Cid Kagenou', 'Narrator'].includes(a.name)) {
                                    return 1;
                                  }
                                
                                  // Otherwise, sort in descending order
                                  return b.name.localeCompare(a.name);
                              })[0]);
                        }
                    }
                }
            }
        }
    }, [sentence]);

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

            if (character.name !== activeCharacter.name) {
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
        sentence.characters.forEach((character) => {
            const startIndex = character.start;
            const endIndex = character.end;
            let substringText = sentence.text.substring(startIndex, endIndex + 1); // Use substringText instead of substring and highlightedText
            if (character.name !== activeCharacter.name) {
                substringText = `<span class="sentence-dimmed">${substringText}</span>`
            }

            character.substring = substringText;
        });
        let combined = '';
        for (let character of sentence.characters.sort((a, b) => a.start - b.start)) {
            combined += character.substring;
        }
        return combined;
    }

    function changeActive(event) {
        if (event.target && event.target.classList.contains('sentence-dimmed')) {
            for (let character of characters) {
                if (character.name_variant !== activeCharacter.name_variant) {
                    setActiveCharacter(character)
                    break;
                }
            }
        }
    }

    return (
        <div className="sentence-character-container" key={index}>
            <div className="sentence-box-image">
                <p onClick={(event) => changeActive(event)} dangerouslySetInnerHTML={{ __html: highlight ? highlightKeywords(sentence) : highlightSubstrings(sentence) }} />
                <div className="icon-container-triple">
                    <CopyToClipboard text={sentence.text}>
                        <div className="copy-icon">
                            <FontAwesomeIcon icon={faCopy} onClick={() => showPopup(volumeKey, chapterKey, index)} />
                            {showPopup && (
                                <div className="popup hidden" id={`popup-${volumeKey}-${chapterKey}-${index}`}>
                                    Copied!
                                </div>
                            )}
                        </div>
                    </CopyToClipboard>
                    <SlashLine className="icon-slashline" />
                    <div
                        className="info-icon-container"
                        onMouseEnter={() => handleMouseEnterInfo(volumeKey, chapterKey, index, chapterTitle, sentence)}
                        onMouseLeave={() => setPreviewText(null)}
                        ref={ref => iconRefs.current[`${volumeKey}-${chapterKey}-${index}-info`] = ref}
                    >
                        {sentence && (
                            <FontAwesomeIcon className="info-icon" icon={faCircleInfo} />
                        )}
                    </div>
                </div>
            </div>
            <MultiCharacterBox characters={characters} activeCharacter={activeCharacter} sentence={sentence} characterImages={characterImages}></MultiCharacterBox>
        </div>
    );
};

export default MultiCharacterSentence;