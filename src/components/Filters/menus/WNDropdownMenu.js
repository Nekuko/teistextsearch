import React, { useState, useMemo, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './DropdownMenu.css';

function WNDropdownMenu({ wnDropdownState, updateWNDropdownState, openWN, setOpenWN, volumeImages }) {
    const { wnMainChecked, wnFilter, openVolumes, volumesChecked, chapterFilters } = wnDropdownState;

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                // Ignore clicks on the checkbox
                if (event.target.type !== 'checkbox') {
                    setOpenWN(false);
                    updateWNDropdownState('openVolumes', {})
                }
            }
        };

        if (openWN) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openWN]);

    useEffect(() => {
        const allUnchecked = Object.values(volumesChecked).every(volume =>
            Object.values(volume).every(chapter =>
                chapter.checked === undefined ? true : !chapter.checked
            )
        );
        if (allUnchecked) {
            updateWNDropdownState('wnMainChecked', false);
        } else {
            updateWNDropdownState('wnMainChecked', true);
        }
    }, [volumesChecked]);


    const handleWebNovelClick = () => {
        updateWNDropdownState('openVolumes', {})
        setOpenWN(!openWN);
    };

    const handleVolumeClick = (volume) => {
        // Close the currently open volume's dropdown
        if (openVolumes[volume]) {
            updateWNDropdownState('openVolumes', {
                ...openVolumes,
                [volume]: false
            });
        } else {
            // Close all volume's dropdowns
            const newOpenVolumes = Object.keys(openVolumes).reduce((acc, key) => {
                acc[key] = false;
                return acc;
            }, {});

            // Open the clicked volume's dropdown
            newOpenVolumes[volume] = true;

            updateWNDropdownState('openVolumes', newOpenVolumes);
        }
    };

    const handleChapterCheck = (volume, chapter) => {
        const isChapterChecked = !volumesChecked[volume]?.[chapter]?.checked;
        const updatedVolume = {
            ...volumesChecked[volume],
            [chapter]: { ...volumesChecked[volume][chapter], checked: isChapterChecked }
        };

        // Check if all chapters are unchecked
        const allChecks = Object.entries(updatedVolume).filter(([key, value]) => key !== 'checked');
        const isAllUnchecked = allChecks.every(([name, chapter]) => !chapter.checked);

        if (isAllUnchecked) {
            // If all chapters are unchecked, uncheck the volume checkbox
            updatedVolume.checked = false;
        } else {
            // If not all chapters are unchecked, check the volume checkbox
            updatedVolume.checked = true;
        }

        updateWNDropdownState('volumesChecked', {
            ...volumesChecked,
            [volume]: updatedVolume
        });
    };

    const handleVolumeCheck = (volume) => {
        const isVolumeChecked = !volumesChecked[volume]?.checked;
        const updatedVolume = { ...volumesChecked[volume] };
        Object.keys(updatedVolume).forEach(chapterKey => {
            if (chapterKey !== 'checked') {
                updatedVolume[chapterKey] = { ...updatedVolume[chapterKey], checked: isVolumeChecked };
            }
        });

        updateWNDropdownState('volumesChecked', {
            ...volumesChecked,
            [volume]: { ...updatedVolume, checked: isVolumeChecked }
        });
    };


    const handleFilterChange = (event, volume) => {
        if (volume) {
            updateWNDropdownState('chapterFilters', {
                ...chapterFilters,
                [volume]: event.target.value
            });
        } else {
            updateWNDropdownState('wnFilter', event.target.value);
        }
    };

    const wnFilteredVolumes = useMemo(() => {
        if (!wnFilter) return Object.keys(volumesChecked);
        return Object.keys(volumesChecked).filter(volume => volume.toLowerCase().includes(wnFilter.toLowerCase()));
    }, [volumesChecked, wnFilter]);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div onClick={handleWebNovelClick}>
                <span className={wnMainChecked ? '' : 'dimmed'}>WEB NOVEL</span>
                <FontAwesomeIcon className="dropdown-icon-main" icon={openWN ? faChevronUp : faChevronDown} />
            </div>
            {openWN && (
                <div className="dropdown-menu">
                    <input type="text" value={wnFilter} onChange={handleFilterChange} placeholder="Search volumes..." />
                    {wnFilteredVolumes.sort().map((volume, index) => (
                        <div key={index}>
                            <div className="item-header">
                                <div className="volume-trigger-drop">
                                    {volumeImages[volume.replace('Volume ', 'v')] && <img className="cover-image" src={volumeImages[volume.replace('Volume ', 'v')]} alt={volume} />}
                                    <span
                                        className={`volume-title ${volumesChecked[volume]?.checked ? '' : 'dimmed'}`}
                                        onClick={() => handleVolumeClick(volume)}
                                    >
                                        {volume}
                                    </span>
                                    <FontAwesomeIcon className="dropdown-icon" icon={openVolumes[volume] ? faChevronUp : faChevronDown} onClick={() => handleVolumeClick(volume)} />
                                </div>
                                <input
                                    type="checkbox"
                                    checked={!!volumesChecked[volume]?.checked}
                                    onChange={() => handleVolumeCheck(volume)}
                                />
                            </div>
                            {openVolumes[volume] && (
                                <div>
                                    <input type="text" value={chapterFilters[volume] || ''} onChange={(event) => handleFilterChange(event, volume)} placeholder="Search chapters..." />
                                    <div className="chapter-list">
                                        {Object.keys(volumesChecked[volume]).filter(chapter => chapter !== 'checked' && (!chapterFilters[volume] || chapter.toLowerCase().includes(chapterFilters[volume].toLowerCase()) || volumesChecked[volume][chapter].title.toLowerCase().includes(chapterFilters[volume].toLowerCase()))).sort((a, b) => {
                                            const chapterA = a.split("c")[1];
                                            const chapterB = b.split("c")[1];
                                            return chapterA - chapterB; // Otherwise, sort by part
                                        })
                                            .map((chapter, index) => {
                                                const chapterTitle = volumesChecked[volume][chapter].title;
                                                return (
                                                    <div key={index} className="chapter-item">
                                                        <div className="episode-name">
                                                            <span className={volumesChecked[volume]?.[chapter]?.checked ? "chapter-checked" : "chapter-unchecked"}>
                                                                <span style={{ color: 'red' }}>{chapter.split("c")[1]} </span>
                                                                <span className="episode-text" title={chapterTitle}>| {chapterTitle}</span>
                                                            </span>
                                                        </div>
                                                        <input
                                                            type="checkbox"
                                                            checked={!!volumesChecked[volume]?.[chapter]?.checked}
                                                            onChange={() => handleChapterCheck(volume, chapter)}
                                                        />
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default WNDropdownMenu;
