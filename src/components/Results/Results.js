import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import LightNovelResults from './Containers/LightNovelResults';
import AnimeResults from './Containers/AnimeResults';
import CharacterResults from './Containers/CharacterResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import './Results.css';
import SSCResults from './Containers/SSCResults';

function Results({ results, images, filterState }) {
  const noResults = Object.keys(results).length === 0;
  const lnResults = results && results.ln ? results.ln.ln : null;
  const anResults = results && results.anime ? results.anime.an : null;
  const sscResults = results && results.mg ? results.mg.ssc : null;
  const [highlight, setHighlight] = useState(false);

  const toggleHighlight = () => {
    setHighlight(!highlight);
  };


  // Check if .an key exists in results.anime and if there are any characters to show
  const anCharacter = results && results.anime && !results.anime.an && Object.keys(results.anime).length > 0;
  const sscCharacter = results && results.mg && !results.mg.ssc && Object.keys(results.mg).length > 0;

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
                  <LightNovelResults lnData={lnResults} volumeImages={images.lnCoverImages} highlight={highlight} filterState={filterState} />
                </Collapsible>
              )}
              {((anCharacter || sscCharacter) && (
                <CharacterResults anData={results.anime} sscData={results.mg} images={images} highlight={highlight} filterState={filterState} />
              ))}
              {anResults && (
                <Collapsible trigger={`Anime (Total: ${anResults.count})`}>
                  <AnimeResults anData={anResults} images={images} highlight={highlight} filterState={filterState} main={true} />
                </Collapsible>
              )}
              {sscResults && (
                <Collapsible trigger={`Master of Garden (Total: ${sscResults.count})`}>
                  <SSCResults sscData={sscResults} images={images} highlight={highlight} filterState={filterState} main={true} />
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
