import React, { useRef, useEffect, useState } from 'react';
import { faXmark, faFileImage, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ImageOverlay.css';
import { ReactComponent as TranslateIcon } from '../../svgs/translate-icon.svg';
import { ReactComponent as TwitterIcon } from '../../svgs/twitter-icon.svg';
import { ReactComponent as SlashLine } from '../../svgs/nav_separator.svg';

function ImageOverlay({ images, fullImageData, imageOpen, setImageOpen, setImageData }) {
    let specialMap = { a: "Afterword", t: "Teaser" }
    const overlayRef = useRef();
    const [initialOpen, setInitialOpen] = useState(false);
    const [imageShown, setImageShown] = useState(true);
    const imageData = fullImageData.specific;
    const groupData = fullImageData.full[imageData.anime];
    const originalData = fullImageData.original;
    const currentIndex = groupData.findIndex(note => note.episode === imageData.episode)

    const handleLeftClick = () => {
        if (currentIndex - 1 < 0) {
            return;
        }
        setImageData({ full: fullImageData.full, original: fullImageData.original, specific: groupData[currentIndex - 1] })
    }

    const handleRightClick = () => {
        if (currentIndex + 1 > Object.keys(groupData).length - 1) {
            return;
        }
        setImageData({ full: fullImageData.full, original: fullImageData.original, specific: groupData[currentIndex + 1] })
    }

    const handleClickOutside = (event) => {
        if (imageOpen && overlayRef.current && !overlayRef.current.contains(event.target)) {
            setImageOpen(false);
        }
    };

    const handleImageClick = (imageUrl) => {
        window.open(imageUrl, '_blank', 'noopener,noreferrer');
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [imageOpen]);

    useEffect(() => {
        if (!initialOpen && imageOpen) {
            setInitialOpen(true);
        }
    }, [imageOpen, initialOpen]);



    return (
        <div className="image-overlay">
            <div className={`image-content ${imageOpen ? 'open' : ''}`} ref={overlayRef}>
                <FontAwesomeIcon
                    className="context-close-icon"
                    icon={faXmark}
                    onClick={() => setImageOpen(false)}
                />
                {imageShown && (
                    <div className="image-navigation-container">
                        <div onClick={() => handleLeftClick()} disabled={currentIndex - 1 < 0} className="image-navigation-icon-container">
                            {currentIndex - 1 >= 0 && (
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    className="image-navigation-icon" />
                            )}
                        </div>

                        <div className="image-and-title">
                            <img
                                className="overlay-image"
                                src={`${images[imageData.jp_image]}`}
                                alt={`Director's Note ${imageData.episode}`}
                                onClick={() => handleImageClick(`${images[imageData.jp_image]}`)}
                            />

                            <div className="image-overlay-title">
                                <div className="image-title-container">
                                    <h3 className="image-title">Director's Note: {originalData.groups[imageData.anime]},
                                        {` ${specialMap[imageData.episode] || `Episode ${imageData.episode}`}`}
                                    </h3>
                                    <h3 className="image-title">{imageData.en_author} ({imageData.jp_author}) | {imageData.date}</h3>
                                </div>
                                <div className="image-overlay-navigation">
                                    <a href={imageData.link} target="_blank">
                                        <TwitterIcon className="twitter-icon" />
                                    </a>
                                    <SlashLine className="nav-separator" />
                                    <TranslateIcon
                                        onClick={() => setImageShown(false)}
                                        className="translate-icon"
                                        title="Translate"
                                    />
                                </div>
                            </div>
                        </div>
                        <div onClick={() => handleRightClick()} disabled={currentIndex + 1 > Object.keys(groupData).length - 1} className="image-navigation-icon-container">
                            {currentIndex + 1 <= Object.keys(groupData).length - 1 && (
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className="image-navigation-icon" />
                            )}
                        </div>
                    </div>
                )}
                {!imageShown && (
                    <div className="text-and-title">
                        <div className="image-overlay-sentences">
                            {imageData.en_text.length > 0 ? (
                                <div>
                                    {imageData.en_text.map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                                </div>
                            ) : (
                                <p>No English text available.</p>
                            )}
                        </div>

                        <div className="image-overlay-title">
                            <div className="image-title-container">
                                <h3 className="image-title">Director's Note: {originalData.groups[imageData.anime]},
                                    {` ${specialMap[imageData.episode] || `Episode ${imageData.episode}`}`}
                                </h3>
                                <h3 className="image-title">{imageData.en_author} ({imageData.jp_author}) | {imageData.date}</h3>
                            </div>
                            <div className="image-overlay-navigation">
                                <FontAwesomeIcon
                                    onClick={() => setImageShown(true)}
                                    className="translate-icon" icon={faFileImage}
                                    title="Return" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImageOverlay;