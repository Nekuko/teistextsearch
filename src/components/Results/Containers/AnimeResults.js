// AnimeResults.js
import React, { useState, useRef } from 'react';
import Collapsible from 'react-collapsible';
import '../Results.css'; // Import the CSS file
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SlashLine } from '../../../svgs/nav_separator.svg';
import ImagePreview from './ImagePreview/ImagePreview'; // Adjust the path as needed

function AnimeResults({ anData, images, highlight, filterState, main }) {
  const [imageCache, setImageCache] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ top: 0, left: 0 })
  const iconRefs = useRef({});

  const characterImages = images.characterImages;
  const coverImages = images.animeCoverImages;

  const highlightKeywords = (text) => {
    let highlightedText = text;
    filterState.keywords.forEach(keyword => {
      let regex;
      if (filterState.exactMatch) {
        // If exactMatch is true, match the keyword exactly as it is
        regex = new RegExp(`\\b${keyword}\\b`, filterState.caseSensitive ? 'g' : 'gi');
      } else {
        // If exactMatch is false, match any occurrence of the keyword
        regex = new RegExp(keyword, filterState.caseSensitive ? 'g' : 'gi');
      }
      highlightedText = highlightedText.replace(regex, '<span class="highlight">$&</span>');
    });
    return highlightedText;
  };

  function handleMouseEnter(id, seasonKey, episodeKey, index) {
    return;
    const rect = iconRefs.current[`${seasonKey}-${episodeKey}-${index}`].getBoundingClientRect();
    setPreviewPosition({ top: rect.top, left: rect.left });
    const url = `https://lh3.googleusercontent.com/d/${id.split('/d/')[1].split('/view')[0]}`;

    // Check if the image is already in the cache
    if (imageCache[url]) {
      setPreviewImage(imageCache[url]);
    } else {
      // If not, download the image and add it to the cache
      const img = new Image();
      img.onload = () => {
        setImageCache(prevCache => ({ ...prevCache, [url]: img.src }));
        setPreviewImage(img.src);
      };
      img.src = url;
    }
  }


  if (Object.keys(anData.seasons).length === 0) {
    return null;
  }


  const seasonMapping = {
    "s1": {
      "title": "Season 1",
      "episodes": {
        "e1": "Episode 1 | The Hated Classmate",
        "e2": "Episode 2 | Shadow Garden is Born",
        "e3": "Episode 3 | Fencer Ordinaire",
        "e4": "Episode 4 | Sadism's Rewards",
        "e5": "Episode 5 | I Am...",
        "e6": "Episode 6 | Pretenders",
        "e7": "Episode 7 | A Fencing Tournament of Intrigue & Bloodshed",
        "e8": "Episode 8 | Dark Knight Academy Under Attack",
        "e9": "Episode 9 | The End of a Lie",
        "e10": "Episode 10 | The Sacred Land, City of Deception",
        "e11": "Episode 11 | The Goddess's Trial",
        "e12": "Episode 12 | The Truth Within the Memories",
        "e13": "Episode 13 | A Bloody Showdown as an Offering to Annihilation",
        "e14": "Episode 14 | Your Lie, Your Wish",
        "e15": "Episode 15 | The Strongest Weakest Man",
        "e16": "Episode 16 | Unseen Intentions",
        "e17": "Episode 17 | Moonlight That Pierces the Darkness",
        "e18": "Episode 18 | Betting on a Moment",
        "e19": "Episode 19 | Dancing Puppet",
        "e20": "Episode 20 | Advent of the Demon"
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
      }, 1000); // The popup will be shown for 2 seconds
    }
  }

  return (
    <div className="anime-trigger">
      {Object.entries(anData.seasons).map(([seasonKey, seasonValue]) => {
        // Get the season title from the mapping
        const seasonTitle = seasonMapping[seasonKey]?.title || `Season ${seasonKey.slice(1)}`;
        // Calculate the total count for each season
        const seasonCount = Object.values(seasonValue.episodes).reduce((total, episode) => total + episode.count, 0);

        return (
          <div>
            <Collapsible className="medium-margin" trigger={
              <>
                <div className="season-trigger">
                  {coverImages[seasonKey] && <img className="cover-image" src={coverImages[seasonKey]} alt={seasonTitle} />}
                  {`${seasonTitle} (Total: ${seasonCount})`}
                </div>
              </>
            } key={seasonKey}>
              {Object.entries(seasonValue.episodes).map(([episodeKey, episodeValue]) => {
                // Get the episode title from the mapping
                const episodeTitle = seasonMapping[seasonKey]?.episodes[episodeKey] || `Episode ${episodeKey.slice(1)}`;
                return (
                  <Collapsible trigger={`${episodeTitle} (Total: ${episodeValue.count})`} key={episodeKey}>
                    <div className="sentences-container">
                      {episodeValue.sentences.map((sentence, index) => (
                        <div className="sentence-character-container" key={index}>
                          <div className="sentence-box-image">
                            <p dangerouslySetInnerHTML={{ __html: highlight ? highlightKeywords(sentence.subtitle) : sentence.subtitle }} />
                            <div className="icon-container">
                              <CopyToClipboard text={sentence.subtitle}>
                                <div className="copy-icon" onClick={() => showPopup(seasonKey, episodeKey, index)}>
                                  <FontAwesomeIcon icon={faCopy} />
                                  {/* Ensure the ID is unique for each popup */}
                                  <div className="popup" id={`popup-${seasonKey}-${episodeKey}-${index}`}>
                                    Copied!
                                  </div>
                                </div>
                              </CopyToClipboard>
                              <SlashLine className="icon-slashline" />
                              <div className="image-icon-container"
                                onMouseEnter={() => handleMouseEnter(sentence.url, seasonKey, episodeKey, index)}
                                onMouseLeave={() => setPreviewImage(null)}
                                ref={ref => iconRefs.current[`${seasonKey}-${episodeKey}-${index}`] = ref}
                              >
                                {sentence.url && (
                                  <a href={`https://drive.google.com/file/d/${sentence.url.split('/d/')[1].split('/view')[0]}/view`} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="image-icon" icon={faFileImage} />
                                  </a>
                                )}
                              </div>

                            </div>
                          </div>
                          <div className="character-box">
                            {characterImages[sentence.name_variant] && <img src={characterImages[sentence.name_variant]} alt={sentence.name_variant} />}
                            <p title={sentence.name !== sentence.name_variant ? `${sentence.name_variant} (${sentence.name})` : sentence.name}>
                              {sentence.name !== sentence.name_variant ? `${sentence.name_variant}` : sentence.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Collapsible>
                );
              })}
            </Collapsible>
          </div>
        );
      })}
      {previewImage && <ImagePreview src={previewImage} position={previewPosition} />}
    </div>
  );
}

export default AnimeResults;
