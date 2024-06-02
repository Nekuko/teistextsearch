// ESResults.js
import React, { useState, useRef } from 'react';
import Collapsible from 'react-collapsible';
import '../Results.css'; // Import the CSS file
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SlashLine } from '../../../svgs/nav_separator.svg';
import ImagePreview from './ImagePreview/ImagePreview'; // Adjust the path as needed

function ESResults({ anData, images, highlight, filterState, main }) {
  const [imageCache, setImageCache] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ top: 0, left: 0 })
  const iconRefs = useRef({});
  console.log(anData)

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
        const seasonTitle = `${seasonKey}`;
        // Calculate the total count for each season
        const seasonCount = Object.values(seasonValue.episodes).reduce((total, episode) => total + episode.count, 0);

        return (
          <div>
            <Collapsible className="medium-margin" trigger={
              <>
                <div className="season-trigger">
                  {main && coverImages[seasonKey] && <img className="cover-image" src={coverImages[seasonKey]} alt={seasonTitle} />}
                  {`${seasonTitle} (Total: ${seasonCount})`}
                </div>
              </>
            } key={seasonKey}>
              {Object.entries(seasonValue.episodes).map(([episodeKey, episodeValue]) => {
                // Get the episode title from the mapping
                const episodeTitle = `Episode ${episodeKey.slice(1)}`;
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

export default ESResults