// AnimeResults.js
import React from 'react';
import Collapsible from 'react-collapsible';
import '../Results.css'; // Import the CSS file
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function AnimeResults({ anData }) {
  // If anData is empty, return nothing
  console.log(anData);
  if (Object.keys(anData.seasons).length === 0) {
    return null;
  }

  const seasonMapping = {
    "s1": {
      "title": "Season 1",
      "episodes": {
        "e1": "1 | The Hated Classmate",
        "e2": "2 | Shadow Garden is Born",
        "e3": "3 | Fencer Ordinaire",
        "e4": "4 | Sadism's Rewards",
        "e5": "5 | I Am...",
        "e6": "6 | Pretenders",
        "e7": "7 | A Fencing Tournament of Intrigue & Bloodshed",
        "e8": "8 | Dark Knight Academy Under Attack",
        "e9": "9 | The End of a Lie",
        "e10": "10 | The Sacred Land, City of Deception",
        "e11": "11 | The Goddess's Trial",
        "e12": "12 | The Truth Within the Memories",
        "e13": "13 | A Bloody Showdown as an Offering to Annihilation",
        "e14": "14 | Your Lie, Your Wish",
        "e15": "15 | The Strongest Weakest Man",
        "e16": "16 | Unseen Intentions",
        "e17": "17 | Moonlight That Pierces the Darkness",
        "e18": "18 | Betting on a Moment",
        "e19": "19 | Dancing Puppet",
        "e20": "20 | Advent of the Demon"
      }
    }
  };

  function showPopup(seasonIndex, episodeIndex, sentenceIndex) {
    // Use a unique ID for each popup
    const popup = document.getElementById(`popup-${seasonIndex}-${episodeIndex}-${sentenceIndex}`);
    if (popup) {
      popup.classList.add('show');
      setTimeout(() => {
        popup.classList.remove('show');
      }, 2000); // The popup will be shown for 2 seconds
    }
  }

  return (
    <div>
      {Object.entries(anData.seasons).map(([seasonKey, seasonValue]) => {
        // Get the season title from the mapping
        const seasonTitle = seasonMapping[seasonKey]?.title || `Season ${seasonKey.slice(1)}`;
        // Calculate the total count for each season
        const seasonCount = Object.values(seasonValue.episodes).reduce((total, episode) => total + episode.count, 0);

        return (
          <Collapsible trigger={`${seasonTitle} (Total: ${seasonCount})`} key={seasonKey}>
            {Object.entries(seasonValue.episodes).map(([episodeKey, episodeValue]) => {
              // Get the episode title from the mapping
              const episodeTitle = seasonMapping[seasonKey]?.episodes[episodeKey] || `Episode ${episodeKey.slice(1)}`;
              return (
                <Collapsible trigger={`${episodeTitle}: (Total: ${episodeValue.count})`} key={episodeKey}>
                  <div className="sentences-container">
                  {episodeValue.sentences.map((sentence, index) => (
                    <div className="sentence-box" key={index}>
                      <p>{sentence}</p>
                      <CopyToClipboard text={sentence}>
                        <div className="copy-icon" onClick={() => showPopup(index)}>
                          <FontAwesomeIcon icon={faCopy} />
                          {/* Ensure the ID is unique for each popup */}
                          <div className="popup" id={`popup-${index}`}>
                            Copied!
                          </div>
                        </div>
                      </CopyToClipboard>
                    </div>
                  ))}
                  </div>
                </Collapsible>
              );
            })}
          </Collapsible>
        );
      })}
    </div>
  );
}

export default AnimeResults;
