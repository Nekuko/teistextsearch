import React, { useState, useMemo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './DropdownMenu.css';

function DropdownItem({ season, episodes, checkedItems, onCheckChange, setCheckedItems, mainChecked, isSeasonChecked, episodeFilter, setEpisodeFilter }) {
  const [isOpen, setIsOpen] = useState(false);


  const handleSeasonCheckChange = useCallback((event) => {
    onCheckChange(season, null, event.target.checked);
    if (!event.target.checked) {
      setEpisodeFilter(''); // Reset the episode filter when the checkbox is unchecked
    }
  
    // Update the checkedItems state for all episodes in the season
    setCheckedItems(prevState => ({
      ...prevState,
      [season]: episodes.reduce((prev, curr) => ({ ...prev, [curr.id]: event.target.checked }), {})
    }));
  }, [season, onCheckChange, episodes, setCheckedItems, setEpisodeFilter]);
  

  const handleCheckChange = useCallback((event, id) => {
    onCheckChange(season, id, event.target.checked);
  }, [season, onCheckChange]);

  const handleButtonClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const areAllEpisodesUnchecked = useCallback(() => {
    return !Object.values(checkedItems).some(checked => checked);
  }, [checkedItems]);  

  const filteredEpisodes = useMemo(() => 
    episodes.filter(episode => episode.name.toLowerCase().includes(episodeFilter.toLowerCase())),
  [episodes, episodeFilter]);

  return (
    <li className="dropdown-item">
    <div className={`item-header ${areAllEpisodesUnchecked() ? 'dimmed' : ''}`}>
      <button onClick={handleButtonClick} className={`dropdown-button ${mainChecked && isSeasonChecked ? '' : 'greyed-out'}`}>
        <span className="season-title">{season}</span> 
        <FontAwesomeIcon className="dropdown-icon" icon={isOpen ? faChevronUp : faChevronDown} />
      </button>
      <input type="checkbox" checked={mainChecked && isSeasonChecked} onChange={handleSeasonCheckChange} disabled={!mainChecked} />
    </div>
  
      {isOpen && (
        <div>
          <input type="text" value={episodeFilter} onChange={(event) => setEpisodeFilter(event.target.value)} placeholder="Search episodes..." disabled={!mainChecked || !isSeasonChecked} />
          <ul className="episode-list">
            {filteredEpisodes.map((episode) => (
              <li key={episode.id} className="episode-item">
                <div className={`episode-header ${checkedItems[episode.id] ? '' : 'dimmed'}`}>
                  <span>{episode.name}</span>
                  <input
                    type="checkbox"
                    checked={mainChecked && checkedItems[episode.id]}
                    onChange={(event) => handleCheckChange(event, episode.id)}
                    disabled={!mainChecked || !isSeasonChecked}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

function AnimeDropdownMenu() {
  const [openItem, setOpenItem] = useState(null);
  const [mainChecked, setMainChecked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [openSeasons, setOpenSeasons] = useState({});
  const [seasonsChecked, setSeasonsChecked] = useState({});
  const [episodeFilters, setEpisodeFilters] = useState({});

  const season1Episodes = useMemo(() => [
    { id: 's1e1', name: 'Episode 1' },
    { id: 's1e2', name: 'Episode 2' },
    { id: 's1e3', name: 'Episode 3' },
    { id: 's1e4', name: 'Episode 4' },
    { id: 's1e5', name: 'Episode 5' },
    { id: 's1e6', name: 'Episode 6' },
    { id: 's1e7', name: 'Episode 7' },
    { id: 's1e8', name: 'Episode 8' },
    { id: 's1e9', name: 'Episode 9' },
    { id: 's1e10', name: 'Episode 10' },
    { id: 's1e11', name: 'Episode 11' },
    { id: 's1e12', name: 'Episode 12' },
    { id: 's1e13', name: 'Episode 13' },
    { id: 's1e14', name: 'Episode 14' },
    { id: 's1e15', name: 'Episode 15' },
    { id: 's1e16', name: 'Episode 16' },
    { id: 's1e17', name: 'Episode 17' },
    { id: 's1e18', name: 'Episode 18' },
    { id: 's1e19', name: 'Episode 19' },
    { id: 's1e20', name: 'Episode 20' },
  ], []);

  const season2Episodes = useMemo(() => [
    { id: 's2e1', name: 'Episode 1' },
    { id: 's2e2', name: 'Episode 2' },
    { id: 's2e3', name: 'Episode 3' },
    { id: 's2e4', name: 'Episode 4' },
    { id: 's2e5', name: 'Episode 5' },
    { id: 's2e6', name: 'Episode 6' },
    { id: 's2e7', name: 'Episode 7' },
    { id: 's2e8', name: 'Episode 8' },
    { id: 's2e9', name: 'Episode 9' },
    { id: 's2e10', name: 'Episode 10' },
    { id: 's2e11', name: 'Episode 11' },
    { id: 's2e12', name: 'Episode 12' }
  ], []);

  const seasons = useMemo(() => [
    { name: "Season 1", episodes: season1Episodes },
    { name: "Season 2", episodes: season2Episodes }
  ], [season1Episodes, season2Episodes]);
  
  const [checkedItems, setCheckedItems] = useState(() => {
    const initialCheckedItems = {};
    seasons.forEach(season => {
      initialCheckedItems[season.name] = season.episodes.reduce((prev, curr) => ({ ...prev, [curr.id]: true }), {}); // Initialize to true
    });
    return initialCheckedItems;
  });


  const handleMainButtonClick = useCallback(() => {
    if (openItem === 'Anime') {
      setOpenItem(null);
      setIsDropdownOpen(false);
    } else {
      setOpenItem('Anime');
      setIsDropdownOpen(true);
    }
  }, [openItem]);
  

  const handleCheckChange = useCallback((seasonName, episodeId, isChecked) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [seasonName]: {
        ...prevState[seasonName],
        [episodeId]: isChecked
      }
    }));

    if (episodeId === null) { // If the season checkbox is being updated
      setSeasonsChecked(prevState => ({ // Update the state of the season checkbox
        ...prevState,
        [seasonName]: isChecked
      }));
    }
  }, []);

  const handleMainCheckChange = useCallback((event) => {
    setMainChecked(event.target.checked);
    if (!event.target.checked) {
      setFilter(''); // Reset the main filter when the checkbox is unchecked
    }
    setCheckedItems(prevCheckedItems => {
      const newCheckedItems = { ...prevCheckedItems };
      seasons.forEach(season => {
        newCheckedItems[season.name] = season.episodes.reduce((prevEpisodes, currEpisode) => ({
          ...prevEpisodes,
          [currEpisode.id]: event.target.checked
        }), {});
      });
      return newCheckedItems;
    });

    setSeasonsChecked(prevSeasonsChecked => { // Update the state of all season checkboxes
      const newSeasonsChecked = { ...prevSeasonsChecked };
      seasons.forEach(season => {
        newSeasonsChecked[season.name] = event.target.checked;
      });
      return newSeasonsChecked;
    });

    if (event.target.checked) {
      setFilter(''); // Reset the main filter when the checkbox is checked
      setOpenSeasons({}); // Reset the open seasons when the checkbox is checked
      setEpisodeFilters({}); // Reset the episode filters when the checkbox is checked
    }
  }, [seasons]);;

  const handleFilterChange = useCallback((event) => {
    setFilter(event.target.value); // Update the filter when the user types in the search bar
  }, []);

  const filteredSeasons = useMemo(() => 
    seasons.filter(season => season.name.toLowerCase().includes(filter.toLowerCase())),
  [seasons, filter]);


  return (
    <div className="dropdown">
      <button onClick={handleMainButtonClick}>
        <span className={`main-title ${mainChecked ? '' : 'greyed-out'}`}> {/* Greyed out when disabled */}
          Anime
        </span>
        <span className={`dropdown-icon-main ${mainChecked ? '' : 'greyed-out'}`}> {/* Greyed out when disabled */}
          <FontAwesomeIcon icon={openItem === 'Anime' ? faChevronUp : faChevronDown} />
        </span>
      </button>
      <input type="checkbox" checked={mainChecked} onChange={handleMainCheckChange} />
      {isDropdownOpen && (
        <div>
          <ul className="dropdown-menu">
          <input type="text" value={filter} onChange={handleFilterChange} placeholder="Search seasons..." disabled={!mainChecked} />
          {filteredSeasons.map((season) => (
            <DropdownItem
              key={season.name}
              season={season.name}
              episodes={season.episodes}
              checkedItems={checkedItems[season.name] || {}}
              onCheckChange={handleCheckChange}
              setCheckedItems={setCheckedItems} // Pass setCheckedItems here
              mainChecked={mainChecked}
              isOpen={openSeasons[season.name] || false}
              setOpen={setOpenSeasons}
              isSeasonChecked={seasonsChecked[season.name] || false} // Pass the state of the season checkbox here
              episodeFilter={episodeFilters[season.name] || ''}
              setEpisodeFilter={(value) => setEpisodeFilters(prev => ({ ...prev, [season.name]: value }))}
            />
          ))}
          </ul>
        </div>
      )}
    </div>
  );

}

export default AnimeDropdownMenu;
