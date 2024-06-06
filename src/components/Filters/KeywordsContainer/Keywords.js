// Keywords.js
import React from 'react';
import './Keywords.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faXmark, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { VscCaseSensitive } from "react-icons/vsc";
import { ReactComponent as WholeWord } from '../../../svgs/codicon--whole-word.svg';

function Keywords({ filterState, setFilterState, handleSearch }) {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

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

  const toggleCaseSensitive = () => {
    setFilterState(prevState => ({ ...prevState, caseSensitive: !prevState.caseSensitive }));
  };

  const toggleExactMatch = () => {
    setFilterState(prevState => ({ ...prevState, exactMatch: !prevState.exactMatch }));
  };

  const handleReset = () => {
    // Reset all filter states
    setFilterState({
      keywords: [],
      caseSensitive: false,
      exactMatch: false
    });

    setInputValue('');
  };


  return (
    <div className="keywords-search-container">
    <div className="keywords-container">
      <h2 className="keywords-title">KEYWORDS</h2>
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
          <p className="input-instructions">Press enter after each keyword/phrase</p>
          <button className="delete-all" onClick={removeAllKeywords} title="Delete all">
            <FontAwesomeIcon className="delete-all-icon" icon={faTimes} />
          </button>
        </div>
        
      </div>
    </div>
    <button className="search-button" onClick={handleSearch}>SEARCH</button> {/* Search button */}
    </div>
  );
}

export default Keywords;
