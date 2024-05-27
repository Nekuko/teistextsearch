import React, { useState, useMemo, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './DropdownMenu.css';


function LNDropdownMenu({ lnDropdownState, updateLNDropdownState, volumes, openLN, setOpenLN, volumeImages }) {
  const { lnMainChecked, lnFilter, openVolumes, volumesChecked, chapterFilters } = lnDropdownState;

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Ignore clicks on the checkbox
        if (event.target.type !== 'checkbox') {
          setOpenLN(false);
        }
      }
    };
  
    if (openLN) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openLN]);


  useEffect(() => {
    const allUnchecked = Object.values(volumesChecked).every(volume => Object.values(volume).every(checked => !checked));
    if (allUnchecked) {
      updateLNDropdownState('lnMainChecked', false);
    } else {
      updateLNDropdownState('lnMainChecked', true);
    }
  }, [volumesChecked]);

  const handleAnimeClick = () => {
    setOpenLN(!openLN);
  };

  const handleVolumeClick = (volume) => {
    // Close the currently open volume's dropdown
    if (openVolumes[volume]) {
      updateLNDropdownState('openVolumes', {
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

      updateLNDropdownState('openVolumes', newOpenVolumes);
    }
  };

  const handleChapterCheck = (volume, chapter) => {
    const isChapterChecked = !volumesChecked[volume]?.[chapter];
    const updatedVolume = {
      ...volumesChecked[volume],
      [chapter]: isChapterChecked
    };
  
    // Check if all chapters are unchecked
    const allChecks = Object.entries(updatedVolume);
    const isAllUnchecked = allChecks.every(([name, checked]) => name === 'checked' ? true : !checked);
  
  
    if (isAllUnchecked) {
      // If all chapters are unchecked, uncheck the volume checkbox
      updatedVolume.checked = false;
    } else {
      // If not all chapters are unchecked, check the volume checkbox
      updatedVolume.checked = true;
    }
  
    updateLNDropdownState('volumesChecked', {
      ...volumesChecked,
      [volume]: updatedVolume
    });
  };
  
  
  
  
  
  

  const handleVolumeCheck = (volume) => {
    const isVolumeChecked = !volumesChecked[volume]?.checked;
    const updatedVolume = {
      ...volumesChecked[volume],
    };
    Object.keys(updatedVolume).forEach(chapter => {
      updatedVolume[chapter] = isVolumeChecked;
    });
  
    updateLNDropdownState('volumesChecked', {
      ...volumesChecked,
      [volume]: { ...updatedVolume, checked: isVolumeChecked }
    });
  };
  

  const handleFilterChange = (event, volume) => {
    if (volume) {
      updateLNDropdownState('chapterFilters', {
        ...chapterFilters,
        [volume]: event.target.value
      });
    } else {
      updateLNDropdownState('lnFilter', event.target.value);
    }
  };

  const lnFilteredVolumes = useMemo(() => {
    if (!lnFilter) return volumes;
    return volumes.filter(volume => volume.name.toLowerCase().includes(lnFilter.toLowerCase()));
  }, [volumes, lnFilter]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div onClick={handleAnimeClick}>
        <span className={lnMainChecked ? '' : 'dimmed'}>LIGHT NOVEL</span>
        <FontAwesomeIcon className="dropdown-icon-main" icon={openLN ? faChevronUp : faChevronDown} />
      </div>
      {openLN && (
        <div className = "dropdown-menu">
          <input type="text" value={lnFilter} onChange={handleFilterChange} placeholder="Search volumes..." />
          {lnFilteredVolumes.map((volume, index) => (
            <div key={index}>
              <div className="item-header">
                <div className="volume-trigger-drop">
                {volumeImages[volume.name.replace('Volume ', 'v')] && <img className="cover-image" src={volumeImages[volume.name.replace('Volume ', 'v')]} alt={volume.name} />}
                <span 
                    className={`volume-title ${volumesChecked[volume.name]?.checked ? '' : 'dimmed'}`} 
                    onClick={() => handleVolumeClick(volume.name)}
                  >
                    {volume.name}
                  </span>
                  <FontAwesomeIcon className="dropdown-icon" icon={openVolumes[volume.name] ? faChevronUp : faChevronDown} onClick={() => handleVolumeClick(volume.name)} />
                </div>
                <input
                  type="checkbox"
                  checked={!!volumesChecked[volume.name]?.checked}
                  onChange={() => handleVolumeCheck(volume.name)}
                />
              </div>
              {openVolumes[volume.name] && (
                <div>
                  <input type="text" value={chapterFilters[volume.name] || ''} onChange={(event) => handleFilterChange(event, volume.name)} placeholder="Search chapters..." />
                  <div className="chapter-list">
                  {volume.chapters.filter(chapter => !chapterFilters[volume.name] || chapter.name.toLowerCase().includes(chapterFilters[volume.name].toLowerCase())).map((chapter, index) => {
                  const [chapterNumber, chapterName] = chapter.name.split('|');
                  return (
                    <div key={index} className="chapter-item">
                      <span className={volumesChecked[volume.name]?.[chapter.id] ? "chapter-checked" : "chapter-unchecked"}>
                        <span style={{color: 'red'}}>{chapterNumber}</span>
                        <span className="chapter-name" title={chapterName}>|{chapterName}</span>
                      </span>
                      <input
                        type="checkbox"
                        checked={!!volumesChecked[volume.name]?.[chapter.id]}
                        onChange={() => handleChapterCheck(volume.name, chapter.id)}
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

export default LNDropdownMenu;
