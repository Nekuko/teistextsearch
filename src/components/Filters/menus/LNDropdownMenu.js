import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './DropdownMenu.css';

function LNDropdownMenu({ lnDropdownState, updateLNDropdownState }) {
  const { lnMainChecked, lnFilter, openVolumes, volumesChecked, chapterFilters } = lnDropdownState;
  const [openLN, setOpenLN] = useState(false);

  const volume1Chapters = useMemo(() => [
    { id: 'v1c1', name: 'Prologue' },
    { id: 'v1c2', name: 'Chapter 1' },
    { id: 'v1c3', name: 'Chapter 2' },
    { id: 'v1c4', name: 'Chapter 3' },
    { id: 'v1e5', name: 'Chapter 4' },
    { id: 'v1e6', name: 'Chapter 5' },
    { id: 'v1e7', name: 'Chapter 6' },
    { id: 'v1e8', name: 'Final Chapter' },
  ], []);

  const volume2Chapters = useMemo(() => [
    { id: 'v2c1', name: 'Prologue' },
    { id: 'v2c2', name: 'Chapter 1' },
    { id: 'v2c3', name: 'Chapter 2' },
    { id: 'v2c4', name: 'Chapter 3' },
    { id: 'v2e5', name: 'Chapter 4' },
    { id: 'v2e6', name: 'Chapter 5' },
    { id: 'v2e7', name: 'Chapter 6' },
    { id: 'v2e8', name: 'Chapter 7' },
    { id: 'v2e9', name: 'Chapter 8' },
    { id: 'v2e10', name: 'Final Chapter' },
  ], []);

  const volumes = useMemo(() => [
    { name: "Volume 1", chapters: volume1Chapters },
    { name: "Volume 2", chapters: volume2Chapters }
  ], [volume1Chapters, volume2Chapters]);

  const handleAnimeClick = () => {
    setOpenLN(!openLN);
  };

  const handleSeasonClick = (volume) => {
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

  const handleEpisodeCheck = (volume, episode) => {
    const isEpisodeChecked = !volumesChecked[volume]?.[episode];
    updateLNDropdownState('volumesChecked', {
      ...volumesChecked,
      [volume]: {
        ...volumesChecked[volume],
        [episode]: isEpisodeChecked
      }
    });

    if (isEpisodeChecked) {
      updateLNDropdownState('lnMainChecked', {
        ...lnMainChecked,
        [volume]: true
      });
    }
  };

  const handleSeasonCheck = (volume) => {
    const isSeasonChecked = !lnMainChecked[volume];
    updateLNDropdownState('lnMainChecked', {
      ...lnMainChecked,
      [volume]: isSeasonChecked
    });

    const volumeEpisodes = volumes.find(s => s.name === volume).chapters;
    const updatedEpisodes = volumeEpisodes.reduce((acc, episode) => {
      acc[episode.id] = isSeasonChecked;
      return acc;
    }, {});

    updateLNDropdownState('volumesChecked', {
      ...volumesChecked,
      [volume]: updatedEpisodes
    });
  };

  const handleFilterChange = (event, volume) => {
    if (volume) {
      updateLNDropdownState('chapterFilters', {
        ...chapterFilters,
        [volume]: event.target.value
      });
    } else {
      updateLNDropdownState('filter', event.target.value);
    }
  };

  const filteredVolumes = useMemo(() => {
    if (!lnFilter) return volumes;
    return volumes.filter(volume => volume.name.toLowerCase().includes(lnFilter.toLowerCase()));
  }, [volumes, lnFilter]);



  return (
    <div className="dropdown">
      <div onClick={handleAnimeClick}>
        LIGHT NOVEL
        <FontAwesomeIcon className="dropdown-icon-main"icon={openLN ? faChevronUp : faChevronDown} />
      </div>
      {openLN && (
        <div className = "dropdown-menu">
          <input type="text" value={lnFilter} onChange={handleFilterChange} placeholder="Search volumes..." />
          {filteredVolumes.map((volume, index) => (
            <div key={index}>
              <div className="item-header">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span 
                    className={`volume-title ${lnMainChecked[volume.name] ? '' : 'dimmed'}`} 
                    onClick={() => handleSeasonClick(volume.name)}
                  >
                    {volume.name}
                  </span>
                  <FontAwesomeIcon className="dropdown-icon" icon={openVolumes[volume.name] ? faChevronUp : faChevronDown} onClick={() => handleSeasonClick(volume.name)} />
                </div>
                <input
                  type="checkbox"
                  checked={!!lnMainChecked[volume.name]}
                  onChange={() => handleSeasonCheck(volume.name)}
                />
              </div>
              {openVolumes[volume.name] && (
                <div>
                  <input type="text" value={chapterFilters[volume.name] || ''} onChange={(event) => handleFilterChange(event, volume.name)} placeholder="Search chapters..." />
                  <div className="episode-list">
                    {volume.chapters.filter(episode => !chapterFilters[volume.name] || episode.name.toLowerCase().includes(chapterFilters[volume.name].toLowerCase())).map((episode, index) => (
                      <div key={index} className="episode-item">
                        <span className={volumesChecked[volume.name]?.[episode.id] ? "episode-checked" : "episode-unchecked"}>{episode.name}</span>
                        <input
                          type="checkbox"
                          checked={!!volumesChecked[volume.name]?.[episode.id]}
                          onChange={() => handleEpisodeCheck(volume.name, episode.id)}
                        />
                      </div>
                    ))}
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