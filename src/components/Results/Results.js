import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import LightNovelResults from './Containers/LightNovelResults';
import AnimeResults from './Containers/AnimeResults';
import CharacterResults from './Containers/CharacterResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faF, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import './Results.css';
import SSCResults from './Containers/SSCResults';
import ESResults from './Containers/ESResults';

function Results({ results, images, filterState, lnDropdownState }) {
  const noResults = Object.keys(results).length === 0;
  const lnResults = results && results.ln ? results.ln.ln : null;
  const anResults = results && results.anime ? results.anime.an : null;
  const sscResults = results && results.ssc ? results.ssc.ssc: null;
  const esResults = results && results.es ? results.es.es: null;

  const [highlight, setHighlight] = useState(false);

  const toggleHighlight = () => {
    setHighlight(!highlight);
  };



  // Check if .an key exists in results.anime and if there are any characters to show
  const anCharacter = results && results.anime && !results.anime.an && Object.keys(results.anime).length > 0;
  const sscCharacter = results && results.ssc && !results.ssc.ssc && Object.keys(results.ssc).length > 0;
  const esCharacter = results && results.es && !results.es.es && Object.keys(results.es).length > 0;

  let mgCount = 0;
  if (sscCharacter === false && esCharacter === false) {
    if (sscResults) {
      mgCount += sscResults.count;
    }
    if (esResults) {
      mgCount += esResults.count;
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
        <div className="content-wrapper">
          {noResults ? (
            <p>No results found.</p>
          ) : (
            <>
              {lnResults && (
                <Collapsible className="ln-results" trigger={`Light Novel (Total: ${lnResults.count})`}>
                  <LightNovelResults lnDropdownState={lnDropdownState} lnData={lnResults} volumeImages={images.lnCoverImages} highlight={highlight} filterState={filterState} />
                </Collapsible>
              )}
              {((anCharacter || esCharacter || sscCharacter) && (
                <CharacterResults anData={results.anime} sscData={results.ssc} esData={results.es} images={images} highlight={highlight} filterState={filterState} />
              ))}
              {anResults && (
                <Collapsible trigger={`Anime (Total: ${anResults.count})`}>
                  <AnimeResults anData={anResults} images={images} highlight={highlight} filterState={filterState} main={true} />
                </Collapsible>
              )}
              {((sscResults || esResults) && (mgCount > 0)) && (
                <Collapsible trigger={`Master of Garden (Total: ${mgCount})`}>
                  {sscResults && (
                    <Collapsible key={'ssc'} trigger={`Seven Shadows Chronicles (Total: ${sscResults.count})`}>
                      <SSCResults main={true} sscData={sscResults} images={images} filterState={filterState} highlight={highlight} />
                    </Collapsible>
                  )}
                  {esResults && (
                    <Collapsible key={'es'} trigger={`Event Stories (Total: ${esResults.count})`}>
                      <ESResults main={true} anData={esResults} images={images} filterState={filterState} highlight={highlight} />
                    </Collapsible>
                  )}
                </Collapsible>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Results;
