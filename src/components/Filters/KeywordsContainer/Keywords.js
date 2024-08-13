// Keywords.js
import React, { useEffect, useState } from 'react';
import './Keywords.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faXmark, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { VscCaseSensitive } from "react-icons/vsc";
import { ReactComponent as WholeWord } from '../../../svgs/codicon--whole-word.svg';
import { ReactComponent as Regex } from '../../../svgs/codicon--regex.svg';

function Keywords({ filterState, setFilterState, handleSearch, keywordsFlash, setKeywordsFlash }) {
  const [inputValue, setInputValue] = useState('');
  const [regexValue, setRegexValue] = useState(filterState.expression);
  const [validRegex, setValidRegex] = useState(false);

  useEffect(() => {
    if (keywordsFlash) {
      // Set a timeout to turn off the flash after a delay
      const timeoutId = setTimeout(() => {
        setKeywordsFlash(false);
      }, 1000); // Adjust this value to control the duration of the flash

      // Clean up the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [keywordsFlash, setKeywordsFlash]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRegexInputChange = (e) => {
    try {
      new RegExp(e.target.value.trim());
      setValidRegex(true);
    } catch (error) {
      setValidRegex(false);
    } finally {
      setRegexValue(e.target.value.trim());
      setFilterState(prevState => ({
        ...prevState,
        expression: e.target.value.trim()
      }));
    }
  }
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setFilterState(prevState => ({
        ...prevState,
        keywords: [...prevState.keywords, inputValue.trim()]
      }));
      setInputValue('');
    }
  };

  const removeKeyword = (index) => {
    setFilterState(prevState => ({
      ...prevState,
      keywords: prevState.keywords.filter((_, i) => i !== index)
    }));
  };

  const removeAllKeywords = () => {
    setFilterState(prevState => ({ ...prevState, keywords: [] }));
  };

  const removeAllRegex = () => {
    setFilterState(prevState => ({ ...prevState, expression: '' }));
    setRegexValue('');
  };

  const toggleCaseSensitive = () => {
    setFilterState(prevState => ({ ...prevState, caseSensitive: !prevState.caseSensitive }));
  };

  const toggleExactMatch = () => {
    setFilterState(prevState => ({ ...prevState, exactMatch: !prevState.exactMatch }));
  };

  const toggleRegex = () => {
    setFilterState(prevState => ({ ...prevState, regex: !prevState.regex }));
  };



  return (
    <div className={`keywords-search-container ${keywordsFlash ? 'flash-selected' : ''}`}>
      {!filterState.regex ? (
        <div className={`keywords-container ${keywordsFlash ? 'flash-selected' : ''}`}>
          <h2 className={`keywords-title ${keywordsFlash ? 'flash' : ''}`}>KEYWORDS</h2>
          <div className="keywords-input-wrapper">
            <div className="keywords-input-container">
              {filterState.keywords.map((keyword, index) => (
                <div className="keyword-bubble" key={index}>
                  {keyword}
                  <button className="remove-keyword" onClick={() => removeKeyword(index)}>
                    <FontAwesomeIcon title="Remove" className="remove-keyword-icon" icon={faXmark} />
                  </button>
                </div>
              ))}
              <input
                type="text"
                className="keywords-input"
                placeholder="Enter keywords / phrases..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
              />
            </div>
            <div className="icons-container">
              <VscCaseSensitive
                className={`case-sensitive-icon ${filterState.caseSensitive ? 'active' : ''}`}
                onClick={toggleCaseSensitive}
                title="Match Case"
              />
              <WholeWord
                className={`whole-word-icon ${filterState.exactMatch ? 'active' : ''}`}
                onClick={toggleExactMatch}
                title="Match Whole Word(s)"
              />
              <Regex
                className={`regex-icon ${false ? 'active' : ''}`}
                onClick={toggleRegex}
                title="Regular Expression"
              />

              <button className="delete-all" onClick={removeAllKeywords} title="Delete all">
                <FontAwesomeIcon className="delete-all-icon" icon={faTimes} />
              </button>
            </div>


          </div>
          <p className="input-instructions">Press enter after each keyword/phrase</p>
        </div>
      ) : (<div className={`keywords-container ${keywordsFlash ? 'flash-selected' : ''}`}>
        <h2 className={`keywords-title ${keywordsFlash ? 'flash' : ''}`}>REGULAR EXPRESSION</h2>
        <div className="keywords-input-wrapper">
          <div className="keywords-input-container">
            <input
              type="text"
              className={`regex-input ${validRegex ? '' : 'invalid-regex'}`}
              placeholder="Enter Regex..."
              value={regexValue}
              title={`${validRegex ? '' : 'Invalid Regex'}`}
              onChange={handleRegexInputChange}
            />
          </div>
          <div className="icons-container">
            <Regex
              className={`regex-icon ${true ? 'active' : ''}`}
              onClick={toggleRegex}
              title="Regular Expression"
            />

            <button className="delete-all" onClick={removeAllRegex} title="Clear">
              <FontAwesomeIcon className="delete-all-icon" icon={faTimes} />
            </button>
          </div>


        </div>
        <p className="input-instructions">Enter Regular Expression</p>
      </div>
      )}
      <div className="keywords-search">
        <button className="search-button" onClick={handleSearch}>SEARCH</button> {/* Search button */}

      </div>
    </div>
  );
}

export default Keywords;
