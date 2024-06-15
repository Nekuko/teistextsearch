import React, { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import LightNovelResults from './Containers/LightNovelResults';
import WebNovelResults from './Containers/WebNovelResults';
import AnimeResults from './Containers/AnimeResults';
import CharacterResults from './Containers/CharacterResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import './Results.css';
import SSCResults from './Containers/SSCResults';
import ESResults from './Containers/ESResults';
import APOResults from './Containers/APOResults';

function Results({ results, images, filterState, lnDropdownState, wnDropdownState, mogDropdownState, setSearchResults, resultsKey, setResultsKey }) {

  const [resultsText, setResultsText] = useState('');

  const resultsTextMap = {
    0: 'No Results.',
    1: 'No Keywords Selected.',
    2: 'No Mediums Selected.',
    3: 'No Mediums or Keywords Selected.',
    4: 'No Matching Keywords.',
    5: 'No Results.'
  };

  // Add a useEffect to update 'resultsText' when 'resultsKey' changes
  useEffect(() => {
    setResultsText(resultsTextMap[resultsKey]);
  }, [resultsKey]);

  const noResults = Object.keys(results).every(key => Object.keys(results[key]).length === 0);
  if (noResults && resultsKey !== 1 && resultsKey !== 2 && resultsKey !== 3 && resultsKey !== 5) {
    setResultsKey(4);
  }
  const lnResults = results && results.ln ? results.ln.ln : null;
  const wnResults = results && results.wn ? results.wn.wn : null;
  const anResults = results && results.anime ? results.anime.an : null;
  const sscResults = results && results.ssc ? results.ssc.ssc : null;
  const esResults = results && results.es ? results.es.es : null;
  const apoResults = results && results.apo ? results.apo.apo : null;

  const [highlight, setHighlight] = useState(false);

  const toggleHighlight = () => {
    setHighlight(!highlight);
  };

  const resetResults = () => {
    setSearchResults({});
    setResultsKey(5);
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if .an key exists in results.anime and if there are any characters to show
  const anCharacter = results && results.anime && !results.anime.an && Object.keys(results.anime).length > 0;
  const sscCharacter = results && results.ssc && !results.ssc.ssc && Object.keys(results.ssc).length > 0;
  const apoCharacter = results && results.apo && !results.apo.apo && Object.keys(results.apo).length > 0;
  const esCharacter = results && results.es && !results.es.es && Object.keys(results.es).length > 0;

  let mgCount = 0;
  if (sscCharacter === false && esCharacter === false && apoCharacter === false) {
    if (sscResults) {
      mgCount += sscResults.count;
    }
    if (esResults) {
      mgCount += esResults.count;
    }
    if (apoResults) {
      mgCount += apoResults.count;
    }
  }

  return (
    <div>
      <h1 className="results-header">RESULTS</h1>
      <div className="results-container">
        <FontAwesomeIcon
          icon={faLightbulb}
          className={`highlight-icon ${highlight ? 'active' : ''}`}
          onClick={toggleHighlight}
          title="Highlight Keywords"
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          className={`reset-icon`}
          onClick={resetResults}
          title="Clear Results"
        />
        <div className="content-wrapper">
          {noResults ? (
            <div>
              {resultsKey === 4 ? (
                <>
                  No results found{filterState.keywords.length === 0 ? '.' : ''}
                  {filterState.keywords.length > 0 &&
                    <span> for
                      <span style={{ color: 'red' }}>
                        {` ${filterState.keywords.join(', ')}`}
                      </span>
                      <span>.</span>
                    </span>
                  }
                </>
              ) : (
                <p>{resultsText}</p>
              )}
            </div>
          ) : (
            <>
              {lnResults && (
                <>
                  <Collapsible className="ln-results" trigger={`Light Novel (Total: ${lnResults.count})`}>
                    <LightNovelResults lnDropdownState={lnDropdownState} lnData={lnResults} volumeImages={images.lnCoverImages} highlight={highlight} filterState={filterState} />
                  </Collapsible>
                  <br />
                </>
              )}
              {wnResults && (
                <>
                  <Collapsible className="ln-results" trigger={`Web Novel (Total: ${wnResults.count})`}>
                    <WebNovelResults wnDropdownState={wnDropdownState} wnData={wnResults} volumeImages={images.lnCoverImages} highlight={highlight} filterState={filterState} />
                  </Collapsible>
                  <br />
                </>
              )}
              {((anCharacter || esCharacter || sscCharacter || apoCharacter) && (
                <>
                  <CharacterResults anData={results.anime} sscData={results.ssc} esData={results.es} apoData={results.apo} images={images} highlight={highlight} filterState={filterState} mogDropdownState={mogDropdownState} />
                  <br />
                </>
              ))}
              {anResults && (
                <>
                  <Collapsible className="an-results" trigger={`Anime (Total: ${anResults.count})`}>
                    <AnimeResults anData={anResults} images={images} highlight={highlight} filterState={filterState} main={true} />
                  </Collapsible>
                  <br />
                </>
              )}
              {((sscResults || esResults || apoResults) && (mgCount > 0)) && (
                <Collapsible trigger={`Master of Garden (Total: ${mgCount})`}>
                  {sscResults && (
                    <>
                      <Collapsible key={'ssc'} trigger={
                        <>
                          <div className="season-trigger">
                            {images.sscCoverImages["ssc"] && <img className="ssc-image" src={images.sscCoverImages["ssc"]} alt={"Seven Shadows Chronicles"} />}
                            {`Seven Shadows Chronicles (Total: ${sscResults.count})`}
                          </div>
                        </>
                      }>
                        <SSCResults main={true} sscData={sscResults} images={images} filterState={filterState} highlight={highlight} />
                      </Collapsible>
                      <br />
                    </>
                  )}
                  {esResults && (
                    <Collapsible key={'es'} trigger={
                      <>
                        <div className="season-trigger">
                          {images.esCoverImages["Event Stories"] && <img className="es-image" src={images.esCoverImages["Event Stories"]} alt={"Event Stories"} />}
                          {`Event Stories (Total: ${esResults.count})`}
                        </div>
                      </>
                    }>
                      <ESResults main={true} anData={esResults} images={images} filterState={filterState} highlight={highlight} />
                    </Collapsible>
                  )}
                  {apoResults && (
                    <Collapsible key={'apo'} trigger={
                      <>
                        <div className="season-trigger">
                          {images.apoCoverImages["Apocrypha"] && <img className="es-image" src={images.apoCoverImages["Apocrypha"]} alt={"Apocrypha"} />}
                          {`Apocrypha (Total: ${apoResults.count})`}
                        </div>
                      </>
                    }>
                      <APOResults main={true} sscData={apoResults} images={images} filterState={filterState} highlight={highlight} partsChecked={mogDropdownState.partsChecked['Apocrypha']}/>
                    </Collapsible>
                  )}
                </Collapsible>
              )}
            </>
          )}
        </div>
        {!noResults && (
          <button title={"To Top"} className="scroll-top-button" onClick={scrollToTop}>UP</button>
        )}
      </div>
    </div>
  );
}

export default Results;
