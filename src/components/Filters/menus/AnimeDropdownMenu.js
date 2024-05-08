import React, { useState, useMemo, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './DropdownMenu.css';

// fix seasons not being able to be checked off rip
// fix the episode not checking season thing
// make it so only only related dropdown can be open=

function AnimeDropdownMenu({ animeDropdownState, updateAnimeDropdownState, seasons }) {
  const { mainChecked, filter, openSeasons, seasonsChecked, episodeFilters } = animeDropdownState;
  const [openAnime, setOpenAnime] = useState(false);
  

  useEffect(() => {
    const allUnchecked = Object.values(seasonsChecked).every(season => Object.values(season).every(checked => !checked));
    if (allUnchecked) {
      updateAnimeDropdownState('mainChecked', false);
    } else {
      updateAnimeDropdownState('mainChecked', true);
    }
  }, [seasonsChecked]);

  const handleAnimeClick = () => {
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
    const isEpisodeChecked = !seasonsChecked[season]?.[episode];
    const updatedSeason = {
      ...seasonsChecked[season],
      [episode]: isEpisodeChecked
    };

    console.log(seasonsChecked)
  
    // Check if all episodes are unchecked
    const isAllUnchecked = Object.values(seasonsChecked).every(checked => !checked);
  
    updateAnimeDropdownState('seasonsChecked', {
      ...seasonsChecked,
      [season]: updatedSeason
    });
  
    if (isAllUnchecked) {
      // If all episodes are unchecked, uncheck the season checkbox
      updateAnimeDropdownState('seasonsChecked', {
        ...seasonsChecked,
        [season]: { ...updatedSeason, checked: false }
      });
    } else {
      // If not all episodes are unchecked, check the season checkbox
      updateAnimeDropdownState('seasonsChecked', {
        ...seasonsChecked,
        [season]: { ...updatedSeason, checked: true }
      });
    }

    console.log(seasonsChecked)
  };
  
  

  const handleSeasonCheck = (season) => {
    const isSeasonChecked = !seasonsChecked[season]?.[Object.keys(seasonsChecked[season])[0]];
    const updatedSeason = {
      ...seasonsChecked[season],
    };
    Object.keys(updatedSeason).forEach(episode => {
      updatedSeason[episode] = isSeasonChecked;
    });

    updateAnimeDropdownState('seasonsChecked', {
      ...seasonsChecked,
      [season]: updatedSeason
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
    if (!filter) return seasons;
    return seasons.filter(season => season.name.toLowerCase().includes(filter.toLowerCase()));
  }, [seasons, filter]);

  return (
    <div className="dropdown">
      <div onClick={handleAnimeClick}>
        <span className={mainChecked ? '' : 'dimmed'}>ANIME</span>
        <FontAwesomeIcon className="dropdown-icon-main"icon={openAnime ? faChevronUp : faChevronDown} />
      </div>
      {openAnime && (
        <div className = "dropdown-menu">
          <input type="text" value={filter} onChange={handleFilterChange} placeholder="Search seasons..." />
          {filteredSeasons.map((season, index) => (
            <div key={index}>
              <div className="item-header">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span 
                    className={`season-title ${seasonsChecked[season.name]?.[Object.keys(seasonsChecked[season.name])[0]] ? '' : 'dimmed'}`} 
                    onClick={() => handleSeasonClick(season.name)}
                  >
                    {season.name}
                  </span>
                  <FontAwesomeIcon className="dropdown-icon" icon={openSeasons[season.name] ? faChevronUp : faChevronDown} onClick={() => handleSeasonClick(season.name)} />
                </div>
                <input
                  type="checkbox"
                  checked={!!seasonsChecked[season.name]?.[Object.keys(seasonsChecked[season.name])[0]]}
                  onChange={() => handleSeasonCheck(season.name)}
                />
              </div>
              {openSeasons[season.name] && (
                <div>
                  <input type="text" value={episodeFilters[season.name] || ''} onChange={(event) => handleFilterChange(event, season.name)} placeholder="Search episodes..." />
                  <div className="episode-list">
                  {season.episodes.filter(episode => !episodeFilters[season.name] || episode.name.toLowerCase().includes(episodeFilters[season.name].toLowerCase())).map((episode, index) => {
                  const [episodeNumber, episodeName] = episode.name.split('|');
                  return (
                    <div key={index} className="episode-item">
                      <span className={seasonsChecked[season.name]?.[episode.id] ? "episode-checked" : "episode-unchecked"}>
                        <span style={{color: 'red'}}>{episodeNumber}</span>
                        <span className="episode-name" title={episodeName}>|{episodeName}</span>
                      </span>
                      <input
                        type="checkbox"
                        checked={!!seasonsChecked[season.name]?.[episode.id]}
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
