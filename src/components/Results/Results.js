// Results.js
import React from 'react';
import Collapsible from 'react-collapsible';
import './Results.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Results({ results }) {
  // Check if the results object is empty
  const noResults = Object.keys(results).length === 0;
  console.log(results);

  // Define the mapping for the keys
  const keyMapping = {
    'ln': 'Light Novel',
    'an': 'Anime',
    'wn': 'Web Novel',
    'v': 'Volume',
    'c': 'Chapter',
    's': 'Season',
    'e': 'Episode'
  };

// Function to render Light Novel volumes
function renderLightNovelVolumes(lnData) {
  // If lnData is empty, return nothing
  if (Object.keys(lnData.volumes).length === 0) {
    return null;
  }

  return (
    <div>
      {Object.entries(lnData.volumes).map(([volumeKey, volumeValue]) => {
        // Calculate the total count for each volume
        const volumeCount = Object.values(volumeValue.chapters).reduce((total, chapter) => total + chapter.count, 0);

        return (
          <Collapsible trigger={`${keyMapping['v']} ${volumeKey.slice(1)} (Total: ${volumeCount})`} key={volumeKey}>
            {Object.entries(volumeValue.chapters).map(([chapterKey, chapterValue]) => (
              <Collapsible trigger={`${keyMapping['c']} ${chapterKey.slice(1)}: (Total: ${chapterValue.count})`} key={chapterKey}>
                <div className="sentences-container">
                  {chapterValue.sentences.map((sentence, index) => (
                    <p key={index}>{sentence}</p>
                  ))}
                </div>
              </Collapsible>
            ))}
          </Collapsible>
        );
      })}
    </div>
  );
}

// In your Results component
return (
  <div>
    <h1 className="results-header">RESULTS</h1>
    <div className="results-container">
      {noResults ? (
        <p>No results found.</p>
      ) : (
        <>
          {results.ln && (
            <Collapsible trigger={`Light Novel (Total: ${results.ln.count})`}>
              {renderLightNovelVolumes(results.ln)}
            </Collapsible>
          )}
          {results.an && (
            <div>
              {renderAnimeSeasons(results.an)}
            </div>
          )}
        </>
      )}
    </div>
  </div>
);


  // Function to render Anime seasons
  function renderAnimeSeasons(anData) {
    return (
      <div>
        {Object.entries(anData.seasons).map(([seasonKey, seasonValue]) => (
          <Collapsible trigger={`${keyMapping['s']} ${seasonKey}`} key={seasonKey}>
            {Object.entries(seasonValue.episodes).map(([episodeKey, episodeValue]) => (
              <p key={episodeKey}>{`${keyMapping['e']} ${episodeKey}: (${episodeValue.count} Sentences)`}</p>
            ))}
          </Collapsible>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h1 className="results-header">Results</h1>
      <div className="results-container">
        {noResults ? (
          <p>No results found.</p>
        ) : (
          <>
            {results.ln && (
              <Collapsible trigger={`Light Novel Results (Total: ${results.ln.count})`}>
                {renderLightNovelVolumes(results.ln)}
              </Collapsible>
            )}
            {results.an && (
              <div>
                {renderAnimeSeasons(results.an)}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Results;
