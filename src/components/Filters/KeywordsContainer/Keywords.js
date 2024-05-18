// Keywords.js
import React, { useState } from 'react';
import './Keywords.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faXmark } from '@fortawesome/free-solid-svg-icons';
import { VscCaseSensitive } from "react-icons/vsc";
import { ReactComponent as WholeWord } from '../../../svgs/codicon--whole-word.svg';

function Keywords({setCaseSensitive, setExactMatch, exactMatch, caseSensitive, keywords, setKeywords}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setKeywords([...keywords, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeKeyword = (index) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  const removeAllKeywords = () => {
    setKeywords([]);
  };

  const toggleCaseSensitive = () => {
    setCaseSensitive(!caseSensitive); // Toggle the caseSensitive state
  };

  const toggleExactmatch = () => {
    setExactMatch(!exactMatch);
  }

  return (
    <div className="keywords-container">
      <h2 className="keywords-title">KEYWORDS</h2>
      <div className="keywords-input-wrapper"> 
        <div className="keywords-input-container">
            {keywords.map((keyword, index) => (
            <div className="keyword-bubble" key={index}>
                {keyword}
                <button className="remove-keyword" onClick={() => removeKeyword(index)}>
                    <FontAwesomeIcon title="Remove" className="remove-keyword-icon" icon={faXmark}/> {}
                </button>
            </div>
            ))}
            <input
                type="text"
                className="keywords-input"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                InputProps={{ disableUnderline: true }}
                />
            </div>
            <div className="icons-container">
                <VscCaseSensitive
                    className={`case-sensitive-icon ${caseSensitive ? 'active' : ''}`}
                    onClick={toggleCaseSensitive}
                    title={"Match Case"}
                />
                <WholeWord
                    className={`whole-word-icon ${exactMatch ? 'active' : ''}`}
                    onClick={toggleExactmatch}
                    title={"Match Whole Word(s)"}
                />
                <p className="input-instructions">Press enter after each keyword/phrase</p> {/* Add this line */}
                <button className="delete-all" onClick={removeAllKeywords} title="Delete all">
                    <FontAwesomeIcon className="delete-all-icon" icon={faTimes} /> {/* Use the 'faTimes' icon */}
                </button>
                </div>
            </div>
            </div>
            );
}

export default Keywords;
