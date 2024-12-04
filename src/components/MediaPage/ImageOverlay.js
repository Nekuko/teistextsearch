import React, { useRef, useEffect, useState } from 'react';
import { faXmark, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ImageOverlay.css';
import { ReactComponent as TranslateIcon } from '../../svgs/translate-icon.svg';

function ImageOverlay({ images, fullImageData, imageOpen, setImageOpen }) {
    let specialMap = { a: "Afterword", t: "Teaser" }
    const overlayRef = useRef();
    const [initialOpen, setInitialOpen] = useState(false);
    const [imageShown, setImageShown] = useState(true);

    const groupData = fullImageData.full;
    const imageData = fullImageData.specific;
    const originalData = fullImageData.original;

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
                                <TranslateIcon
                                    onClick={() => setImageShown(false)}
                                    className="translate-icon"
                                    title="Translate"
                                />
                            </div>
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