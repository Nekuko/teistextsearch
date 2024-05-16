// Results.js
import React from 'react';
import Collapsible from 'react-collapsible';
import LightNovelResults from './Containers/LightNovelResults'; // Import the new component
import AnimeResults from './Containers/AnimeResults';
import './Results.css'; // Import the CSS file

function Results({ results, characterImages }) {
  // Check if the results object is empty
  const noResults = Object.keys(results).length === 0;
  console.log(results)
  const lnResults = results && results.ln ? results.ln.ln : null;
  const anResults = results && results.anime ? results.anime.an : null;

  return (
    <div>
      <h1 className="results-header">RESULTS</h1>
      <div className="results-container">
        <div className="content-wrapper"> {/* Add this wrapper div */}
          {noResults ? (
            <p>No results found.</p>
          ) : (
            <>
              {lnResults && (
                <Collapsible trigger={`Light Novel (Total: ${lnResults.count})`}>
                  <LightNovelResults lnData={lnResults} /> {/* Use the new component */}
                </Collapsible>
              )}
              {anResults && (
                <Collapsible trigger={`Anime (Total: ${anResults.count})`}>
                  <AnimeResults anData={anResults} characterImages={characterImages} /> {/* Use the new component */}
                </Collapsible>
              )}
            </>
          )}
        </div> {/* End of wrapper div */}
      </div>
    </div>
  );
}
export default Results;
