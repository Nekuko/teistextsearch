import React, { useState, useMemo, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './DropdownMenu.css';


function AnimeDropdownMenu({ animeDropdownState, updateAnimeDropdownState, openAnime, setOpenAnime, seasonImages }) {
  const { mainChecked, filter, openSeasons, seasonsChecked, episodeFilters } = animeDropdownState;

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Ignore clicks on the checkbox
        if (event.target.type !== 'checkbox') {
          setOpenAnime(false);
          updateAnimeDropdownState('openSeasons', {});
        }
      }
    };

    if (openAnime) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openAnime]);



  useEffect(() => {
    const allUnchecked = Object.values(seasonsChecked).every(season =>
      Object.entries(season).every(([episodeId, episodeData]) =>
        episodeId === 'checked' ? true : !episodeData.checked
      )
    );
    if (allUnchecked) {
      updateAnimeDropdownState('mainChecked', false);
    } else {
      updateAnimeDropdownState('mainChecked', true);
    }
  }, [seasonsChecked]);


  const handleAnimeClick = () => {
    updateAnimeDropdownState('openSeasons', {});
    setOpenAnime(!openAnime);
  };

  const handleSeasonClick = (season) => {
    // Close the currently open season's dropdown
    if (openSeasons[season]) {
      updateAnimeDropdownState('openSeasons', {
        ...openSeasons,
        [season]: false
      });
    } else {
      // Close all season's dropdowns
      const newOpenSeasons = Object.keys(openSeasons).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      // Open the clicked season's dropdown
      newOpenSeasons[season] = true;

      updateAnimeDropdownState('openSeasons', newOpenSeasons);
    }
  };

  const handleEpisodeCheck = (season, episode) => {
    const isEpisodeChecked = !seasonsChecked[season]?.[episode]?.checked;
    const updatedSeason = {
      ...seasonsChecked[season],
      [episode]: { title: seasonsChecked[season][episode].title, checked: isEpisodeChecked }
    };

    // Check if all episodes are unchecked
    const allChecks = Object.entries(updatedSeason).filter(([key]) => key !== 'checked');
    const isAllUnchecked = allChecks.every(([_, episodeData]) => !episodeData.checked);

    if (isAllUnchecked) {
      // If all episodes are unchecked, uncheck the season checkbox
      updatedSeason.checked = false;
    } else {
      // If not all episodes are unchecked, check the season checkbox
      updatedSeason.checked = true;
    }

    updateAnimeDropdownState('seasonsChecked', {
      ...seasonsChecked,
      [season]: updatedSeason
    });
  };








  const handleSeasonCheck = (season) => {
    const isSeasonChecked = !seasonsChecked[season]?.checked;
    const updatedSeason = {
      ...seasonsChecked[season],
    };
    Object.keys(updatedSeason).forEach(episode => {
      if (episode !== 'checked') {
        updatedSeason[episode] = { title: updatedSeason[episode].title, checked: isSeasonChecked };
      }
    });

    updateAnimeDropdownState('seasonsChecked', {
      ...seasonsChecked,
      [season]: { ...updatedSeason, checked: isSeasonChecked }
    });
  };


  const handleFilterChange = (event, season) => {
    if (season) {
      updateAnimeDropdownState('episodeFilters', {
        ...episodeFilters,
        [season]: event.target.value
      });
    } else {
      updateAnimeDropdownState('filter', event.target.value);
    }
  };

  const filteredSeasons = useMemo(() => {
    // Convert the seasons object to an array
    const seasonsArray = Object.keys(seasonsChecked).map(season => ({
      name: season,
      episodes: Object.keys(seasonsChecked[season]).filter(key => key !== 'checked').map(episode => ({
        id: episode,
        name: seasonsChecked[season][episode].title
      }))
    }));

    if (!filter) return seasonsArray;
    return seasonsArray.filter(season => season.name.toLowerCase().includes(filter.toLowerCase()));
  }, [seasonsChecked, filter]);


  return (
    <div className="dropdown" ref={dropdownRef}>
      <div onClick={handleAnimeClick}>
        <span className={mainChecked ? '' : 'dimmed'}>ANIME</span>
        <FontAwesomeIcon className="dropdown-icon-main" icon={openAnime ? faChevronUp : faChevronDown} />
      </div>
      {openAnime && (
        <div className="dropdown-menu">
          <input type="text" value={filter} onChange={handleFilterChange} placeholder="Search seasons..." />
          {filteredSeasons.map((season, index) => (
            <div key={index}>
              <div className="item-header">
                <div className="volume-trigger-drop">
                  {seasonImages[season.name.replace('Season ', 's')] && <img className="cover-image" src={seasonImages[season.name.replace('Season ', 's')]} alt={season.name} />}
                  <span
                    className={`season-title ${seasonsChecked[season.name]?.checked ? '' : 'dimmed'}`}
                    onClick={() => handleSeasonClick(season.name)}
                  >
                    {season.name}
                  </span>
                  <FontAwesomeIcon className="dropdown-icon" icon={openSeasons[season.name] ? faChevronUp : faChevronDown} onClick={() => handleSeasonClick(season.name)} />
                </div>
                <input
                  type="checkbox"
                  checked={!!seasonsChecked[season.name]?.checked}
                  onChange={() => handleSeasonCheck(season.name)}
                />
              </div>
              {openSeasons[season.name] && (
                <div>
                  <input type="text" value={episodeFilters[season.name] || ''} onChange={(event) => handleFilterChange(event, season.name)} placeholder="Search episodes..." />
                  <div className="episode-list">
                    {season.episodes.filter(episode => !episodeFilters[season.name] || episode.name.toLowerCase().includes(episodeFilters[season.name].toLowerCase())).map((episode, index) => {
                      const [episodeNumber, episodeName] = episode.name.split(' |');
                      return (
                        <div key={index} className="episode-item">
                          <span className={seasonsChecked[season.name]?.[episode.id]?.checked ? "episode-checked" : "episode-unchecked"}>
                            <div className="episode-name">
                              <span style={{ color: 'red' }}>{episodeNumber}&nbsp;</span>
                              <span className="episode-text" title={episodeName}>|{episodeName}</span>
                            </div>
                          </span>
                          <input
                            type="checkbox"
                            checked={!!seasonsChecked[season.name]?.[episode.id]?.checked}
                            onChange={() => handleEpisodeCheck(season.name, episode.id)}
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

export default AnimeDropdownMenu;
