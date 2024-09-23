import React, { useRef, useEffect, useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContextOverlay.css';
import { ReactComponent as SlashLine } from '../../../../svgs/nav_separator.svg';

function ContextOverlay({ images, contextData, contextOpen, setContextOpen }) {
    const overlayRef = useRef();
    const [contextLines, setContextLines] = useState([]);
    const currentLineRef = useRef();
    const [initialOpen, setInitialOpen] = useState(false);

    useEffect(() => {
        const allLines = contextData.surrounding.map((line) => {
            if (line.hasOwnProperty('subtitle')) {
                return { text: line.subtitle, index: line.line };
            } else {
                return { text: line.text, index: line.line };
            }
        });

        setContextLines(allLines);
    }, [contextData]);

    const handleClickOutside = (event) => {
        if (contextOpen && overlayRef.current && !overlayRef.current.contains(event.target)) {
            setContextOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [contextOpen]);

    const scrollToCurrentLine = () => {
        if (currentLineRef.current && overlayRef.current) {
            const contextSentences = overlayRef.current.querySelector('.context-sentences');
            if (contextSentences) {
                const currentLineTop = currentLineRef.current.offsetTop;
                const contextSentencesHeight = contextSentences.clientHeight;
                const currentLineHeight = currentLineRef.current.offsetHeight;
                const desiredScrollTop = currentLineTop - (contextSentencesHeight / 2) + (currentLineHeight / 2);
                contextSentences.scrollTop = Math.max(0, Math.min(desiredScrollTop, contextSentences.scrollHeight - contextSentencesHeight));
            }
        }
    };

    const scrollToTop = () => {
        if (overlayRef.current) {
          const contextSentences = overlayRef.current.querySelector('.context-sentences');
          if (contextSentences) {
            contextSentences.scrollTop = 0;
          }
        }
      };
    
      const scrollToBottom = () => {
        if (overlayRef.current) {
          const contextSentences = overlayRef.current.querySelector('.context-sentences');
          if (contextSentences) {
            contextSentences.scrollTop = contextSentences.scrollHeight;
          }
        }
      };

    useEffect(() => {
        if (!initialOpen && contextOpen) {
            setInitialOpen(true);
        }
    }, [contextOpen, initialOpen]);

    useEffect(() => {
        if (initialOpen) {
            scrollToCurrentLine();
        }
    }, [initialOpen]); // Only scroll when contextOpen changes

    return (
        <div className="context-overlay">
            <div className={`context-content ${contextOpen ? 'open' : ''}`} ref={overlayRef}>
                <FontAwesomeIcon
                    className="context-close-icon"
                    icon={faXmark}
                    onClick={() => setContextOpen(false)}
                />
                <h3 className="context-title">{contextData.title}</h3>
                <div className="context-sentences">
                    {contextLines.map((line, index) => (
                        <p
                            key={index}
                            className={line.index === contextData.current ? 'current-line' : ''}
                            ref={line.index === contextData.current ? currentLineRef : null}
                        >
                            {line.text}
                        </p>
                    ))}
                </div>
                <div className="context-navigation">
                    <button title="To Current Line" className="context-jump-button" onClick={scrollToTop}>
                        START
                    </button>
                    <SlashLine className="icon-slashline-context" />
                    <button title="To Current Line" className="context-jump-button" onClick={scrollToCurrentLine}>
                        JUMP
                    </button>
                    <SlashLine className="icon-slashline-context" />
                    <button title="To Current Line" className="context-jump-button" onClick={scrollToBottom}>
                        END
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContextOverlay;