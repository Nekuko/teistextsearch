// AnimeResults.js
import React, { useState, useRef, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import '../Results.css'; // Import the CSS file
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faFileImage, faCircleInfo, faAnglesLeft, faAnglesRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SlashLine } from '../../../svgs/nav_separator.svg';
import ImagePreview from './ImagePreview/ImagePreview'; // Adjust the path as needed
import InfoPreview from './InfoPreview/InfoPreview';

function AnimeResults({ anData, images, highlight, filterState, animeDropdownState }) {
  const [imageCache, setImageCache] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ top: 0, left: 0 })
  const [previewText, setPreviewText] = useState(null);
  const iconRefs = useRef({});
  const [currentPage, setCurrentPage] = useState({});
  const partsChecked = animeDropdownState.seasonsChecked;

  useEffect(() => {
    const initialPages = {};
    Object.keys(anData.seasons).forEach(seasonKey => {
      Object.keys(anData.seasons[seasonKey].episodes).forEach(episodeKey => {
        // Create a unique key for each chapter
        const uniqueChapterKey = `${seasonKey}-${episodeKey}`;
        initialPages[uniqueChapterKey] = 1;
      });
    });
    setCurrentPage(initialPages);
  }, [anData]);

  const characterImages = images.characterImages;
  const coverImages = images.animeCoverImages;

  function handleMouseEnterInfo(seasonKey, episodeKey, index, seasonTitle, episodeTitle, start_time, end_time, name, name_variant, line) {
    let nameFinal;
    if (name === name_variant) {
      nameFinal = name;
    } else {
      nameFinal = `${name_variant} | (${name})`;
    }
    const rect = iconRefs.current[`${seasonKey}-${episodeKey}-${index}-info`].getBoundingClientRect();
    setPreviewPosition({ top: rect.top, left: rect.left });

    // Set the text data directly as the preview text
    setPreviewText(`Anime<br />${seasonTitle}<br />Episode ${episodeTitle.replace("|", "-")}<br />Time: ${start_time.replaceAll("-", ":")} - ${end_time.replaceAll("-", ":")}<br/> Subtitle: ${line}<br />${nameFinal}`);
  }

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
        let mapKey = seasonKey.replace("s", "Season ");
        let seasonTitle = partsChecked[mapKey]?.title || `Season ${seasonKey.slice(1)}`;
        // Calculate the total count for each season
        const seasonCount = Object.values(seasonValue.episodes).reduce((total, episode) => total + episode.count, 0);
        if (mapKey.split(" ")[1] === "101") {
          mapKey = "Kage-Jitsu!"
          seasonTitle = "Kage-Jitsu!"
        } else if (mapKey.split(" ")[1] === "102") {
          mapKey = "Kage-Jitsu! 2nd"
          seasonTitle = "Kage-Jitsu! 2nd"
        }

        return (
          <div key={seasonTitle}>
            <Collapsible className="medium-margin" trigger={
              <>
                <div className="season-trigger">
                  {coverImages[seasonKey] && <img className="cover-image" src={coverImages[seasonKey]} alt={seasonTitle} />}
                  {`${seasonTitle} (Total: ${seasonCount})`}
                </div>
              </>
            }>
              {Object.entries(seasonValue.episodes).sort((a, b) => {
                const episodeA = parseInt(a[0].split("e")[1], 10);
                const episodeB = parseInt(b[0].split("e")[1], 10);
                return episodeA - episodeB;
              })
                .map(([episodeKey, episodeValue]) => {
                  const sentencesPerPage = 15;
                  const uniqueChapterKey = `${seasonKey}-${episodeKey}`;

                  // Get the episode title from the mapping
                  const episodeTitle = partsChecked[mapKey][`${seasonKey}${episodeKey}`].title || `Episode ${episodeKey.slice(1)}`;
                  return (
                    <Collapsible trigger={`Episode ${episodeTitle} (Total: ${episodeValue.count})`} key={uniqueChapterKey}>
                      <div className="sentences-container">
                        {episodeValue.sentences.slice((currentPage[uniqueChapterKey] - 1) * sentencesPerPage, currentPage[uniqueChapterKey] * sentencesPerPage).map((sentence, index) => (
                          <div className="sentence-character-container" key={index}>
                            <div className="sentence-box-image">
                              <p dangerouslySetInnerHTML={{ __html: highlight ? highlightKeywords(sentence.subtitle) : sentence.subtitle }} />
                              <div className="icon-container-triple">
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
                                <SlashLine className="icon-slashline" />
                                <div className="info-icon-container"
                                  onMouseEnter={() => handleMouseEnterInfo(seasonKey, episodeKey, index, seasonTitle, episodeTitle, sentence.start_time, sentence.end_time, sentence.name, sentence.name_variant, sentence.line)}
                                  onMouseLeave={() => setPreviewText(null)}
                                  ref={ref => iconRefs.current[`${seasonKey}-${episodeKey}-${index}-info`] = ref}
                                >
                                  {sentence && (
                                    <FontAwesomeIcon className="info-icon" icon={faCircleInfo} />
                                  )}
                                </div>

                              </div>
                            </div>
                            <div className="character-box">
                              {characterImages[sentence.name_variant] && (
                                <img src={characterImages[sentence.name_variant]} alt={sentence.name_variant || 'None'} />
                              ) || (characterImages[sentence.name] && (
                                <img src={characterImages[sentence.name]} alt={sentence.name || 'None'} />
                              ))}
                              <p title={sentence.name !== sentence.name_variant ? `${sentence.name_variant} (${sentence.name})` : sentence.name}>
                                {sentence.name !== sentence.name_variant ? `${sentence.name_variant}` : sentence.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {
                        episodeValue.sentences.length > sentencesPerPage && (
                          <div className="pagination-controls">
                            <button title={`Page 1`} disabled={currentPage[uniqueChapterKey] === 1} onClick={() => setCurrentPage(oldPages => ({ ...oldPages, [uniqueChapterKey]: 1 }))}>
                              <FontAwesomeIcon icon={faAnglesLeft} />
                            </button>
                            <button title={`Page ${Math.max(currentPage[uniqueChapterKey] - 1, 1)}`} disabled={currentPage[uniqueChapterKey] === 1} onClick={() => setCurrentPage(oldPages => ({ ...oldPages, [uniqueChapterKey]: Math.max((oldPages[uniqueChapterKey] || 1) - 1, 1) }))}>
                              <FontAwesomeIcon icon={faAngleLeft} />
                            </button>
                            <input type="number" min="1" max={Math.ceil(episodeValue.sentences.length / sentencesPerPage)} value={currentPage[uniqueChapterKey] || 1} onChange={e => setCurrentPage(oldPages => ({ ...oldPages, [uniqueChapterKey]: Math.min(Math.max(Number(e.target.value), 1), Math.ceil(episodeValue.sentences.length / sentencesPerPage)) }))} />
                            <button title={`Page ${Math.min(currentPage[uniqueChapterKey] + 1, Math.ceil(episodeValue.sentences.length / sentencesPerPage))}`} disabled={currentPage[uniqueChapterKey] === Math.ceil(episodeValue.sentences.length / sentencesPerPage)} onClick={() => setCurrentPage(oldPages => ({ ...oldPages, [uniqueChapterKey]: Math.min((oldPages[uniqueChapterKey] || 1) + 1, Math.ceil(episodeValue.sentences.length / sentencesPerPage)) }))}>
                              <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                            <button title={`Page ${Math.ceil(episodeValue.sentences.length / sentencesPerPage)}`} disabled={currentPage[uniqueChapterKey] === Math.ceil(episodeValue.sentences.length / sentencesPerPage)} onClick={() => setCurrentPage(oldPages => ({ ...oldPages, [uniqueChapterKey]: Math.ceil(episodeValue.sentences.length / sentencesPerPage) }))}>
                              <FontAwesomeIcon icon={faAnglesRight} />
                            </button>
                          </div>
                        )
                      }
                    </Collapsible>

                  );

                })}
            </Collapsible>
          </div>
        );
      })}
      {previewImage && <ImagePreview src={previewImage} position={previewPosition} />}
      {previewText && <InfoPreview info={previewText} position={previewPosition} />}
    </div>
  );
}

export default AnimeResults;
