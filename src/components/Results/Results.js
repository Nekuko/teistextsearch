import React from 'react';
import Collapsible from 'react-collapsible';
import LightNovelResults from './Containers/LightNovelResults';
import AnimeResults from './Containers/AnimeResults';
import CharacterResults from './Containers/CharacterResults';
import './Results.css';

function Results({ results, characterImages }) {
  const noResults = Object.keys(results).length === 0;
  console.log(results);
  const lnResults = results && results.ln ? results.ln.ln : null;
  const anResults = results && results.anime ? results.anime.an : null;

  // Check if .an key exists in results.anime and if there are any characters to show
  const shouldRenderCharacterResults = results && results.anime && !results.anime.an && Object.keys(results.anime).length > 0;

  return (
    <div>
      <h1 className="results-header">RESULTS</h1>
      <div className="results-container">
        <div className="content-wrapper">
          {noResults ? (
            <p>No results found.</p>
          ) : (
            <>
              {lnResults && (
                <Collapsible trigger={`Light Novel (Total: ${lnResults.count})`}>
                  <LightNovelResults lnData={lnResults} />
                </Collapsible>
              )}
              {shouldRenderCharacterResults && (
                <CharacterResults anData={results.anime} characterImages={characterImages} />
              )}
              {anResults && (
                <Collapsible trigger={`Anime (Total: ${anResults.count})`}>
                  <AnimeResults anData={anResults} characterImages={characterImages} />
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
