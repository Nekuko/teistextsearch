// MediumsContainer.js
import React, { useMemo, useState } from 'react';
import AnimeDropdownMenu from '../menus/AnimeDropdownMenu'; // Import the AnimeDropdownMenu component
import LNDropdownMenu from '../menus/LNDropdownMenu'; // Import the LNDropdownMenu component
import MOGDropdownMenu from '../menus/MOGDropdownMenu'; // Import the MOGDropdownMenu component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import './MediumsContainer.css'; // Import the CSS file

function MediumsContainer({animeDropdownState, updateAnimeDropdownState, lnDropdownState, updateLNDropdownState, mogDropdownState, setMogDropdownState, volumes, images }) {
    const { mainChecked } = animeDropdownState;
    const { lnMainChecked } = lnDropdownState;
    const { mogMainChecked } = mogDropdownState; // parts derived from mogDropdownState
    const [openAnime, setOpenAnime] = useState(false);
    const [openLN, setOpenLN] = useState(false);
    const [openMOG, setOpenMOG] = useState(false);

    const handleReset = () => {
      // Reset anime dropdown state
      updateAnimeDropdownState('mainChecked', false);
      updateAnimeDropdownState('filter', '')
      updateAnimeDropdownState('episodeFilters', {})
      updateAnimeDropdownState('seasonsChecked', resetSeasonsChecked(seasons));
      setOpenAnime(false);
  
      // Reset LN dropdown state
      updateLNDropdownState('lnMainChecked', false);
      updateLNDropdownState('lnFilter', '');
      updateLNDropdownState('chapterFilters', {});
      updateLNDropdownState('volumesChecked', resetVolumesChecked(volumes));
      setOpenLN(false);

      // Reset MOG dropdown state
      resetMogDropdownState()
      setOpenMOG(false);
    };

    const resetMogDropdownState = () => {
      setMogDropdownState(prevState => {
        let newState = JSON.parse(JSON.stringify(prevState)); // create a deep copy
    
        // Reset "Seven Shadows Chronicles"
        for (let part in newState.partsChecked["Seven Shadows Chronicles"]) {
          for (let subpart in newState.partsChecked["Seven Shadows Chronicles"][part]) {
            if (typeof newState.partsChecked["Seven Shadows Chronicles"][part][subpart] === 'object') {
              for (let episode in newState.partsChecked["Seven Shadows Chronicles"][part][subpart]) {
                newState.partsChecked["Seven Shadows Chronicles"][part][subpart][episode] = false;
              }
            } else {
              newState.partsChecked["Seven Shadows Chronicles"][part][subpart] = false;
            }
          }
        }
    
        // Reset "Event Stories"
        for (let story in newState.partsChecked["Event Stories"]) {
          if (typeof newState.partsChecked["Event Stories"][story] === 'object') {
            for (let episode in newState.partsChecked["Event Stories"][story]) {
              newState.partsChecked["Event Stories"][story][episode] = false;
            }
          } else {
            newState.partsChecked["Event Stories"][story] = false;
          }
        }
    
        newState.mogMainChecked = false;
        newState.filter = '';
        newState.openParts = {};
        newState.categoryFilters = {};
        newState.sectionFilters = {};
    
        return newState;
      });
    };

    
  
    // Helper function to reset seasonsChecked
    const resetSeasonsChecked = (seasons) => {
      const resetState = {};
      seasons.forEach(season => {
        resetState[season.name] = season.episodes.reduce((acc, episode) => {
          acc[episode.id] = false;
          return acc;
        }, {});
        resetState[season.name].checked = false;
      });
      return resetState;
    };
  
    // Helper function to reset volumesChecked
    const resetVolumesChecked = (volumes) => {
      const resetState = {};
      volumes.forEach(volume => {
        resetState[volume.name] = volume.chapters.reduce((acc, chapter) => {
          acc[chapter.id] = false;
          return acc;
        }, {});
        resetState[volume.name].checked = false;
      });
      return resetState;
    };
      
    const season1Episodes = useMemo(() => [
        { id: 's1e1', name: '1 | The Hated Classmate' },
        { id: 's1e2', name: '2 | Shadow Garden is Born' },
        { id: 's1e3', name: '3 | Fencer Ordinaire' },
        { id: 's1e4', name: "4 | Sadism's Rewards" },
        { id: 's1e5', name: '5 | I Am...' },
        { id: 's1e6', name: '6 | Pretenders' },
        { id: 's1e7', name: '7 | A Fencing Tournament of Intrigue & Bloodshed' },
        { id: 's1e8', name: '8 | Dark Knight Academy Under Attack' },
        { id: 's1e9', name: '9 | The End of a Lie' },
        { id: 's1e10', name: '10 | The Sacred Land, City of Deception' },
        { id: 's1e11', name: "11 | The Goddess's Trial" },
        { id: 's1e12', name: '12 | The Truth Within the Memories' },
        { id: 's1e13', name: '13 | A Bloody Showdown as an Offering to Annihilation' },
        { id: 's1e14', name: '14 | Your Lie, Your Wish' },
        { id: 's1e15', name: '15 | The Strongest Weakest Man' },
        { id: 's1e16', name: '16 | Unseen Intentions' },
        { id: 's1e17', name: '17 | Moonlight That Pierces the Darkness' },
        { id: 's1e18', name: '18 | Betting on a Moment' },
        { id: 's1e19', name: '19 | Dancing Puppet' },
        { id: 's1e20', name: '20 | Advent of the Demon' },
      ], []);
    
    const season2Episodes = useMemo(() => [
    { id: 's2e1', name: '1 | The Lawless City' },
    { id: 's2e2', name: '2 | The Haven'},
    { id: 's2e3', name: '3 | The Hour Of Awakening' },
    { id: 's2e4', name: '4 | Mask of Falsehood' },
    { id: 's2e5', name: '5 | He Who Pulls the Strings' },
    { id: 's2e6', name: '6 | John Smith' },
    { id: 's2e7', name: '7 | Something Precious' },
    { id: 's2e8', name: '8 | Tears of the Dragon' },
    { id: 's2e9', name: '9 | The Key' },
    { id: 's2e10', name: '10 | The Caged Bird' },
    { id: 's2e11', name: '11 | Determination' },
    { id: 's2e12', name: '12 | Highest' }
    ], []);

    const seasons = useMemo(() => [
    { name: "Season 1", episodes: season1Episodes },
    { name: "Season 2", episodes: season2Episodes }
    ], [season1Episodes, season2Episodes]);

    const shadowGardenCharacters = useMemo(() => [
      { id: 'sgc1', name: 'Cid Kagenou' },
      { id: 'sgc2', name: 'Alpha' },
      { id: 'sgc3', name: 'Beta' },
      { id: 'sgc4', name: "Gamma" },
      { id: 'sgc5', name: 'Delta' },
      { id: 'sgc6', name: 'Epsilon' },
      { id: 'sgc7', name: 'Zeta' },
      { id: 'sgc8', name: 'Eta' }
    ], []);

    const handleMainCheck = () => {
      const isMainChecked = !mainChecked;
      updateAnimeDropdownState('mainChecked', isMainChecked);
    
      // Update the seasonsChecked state for each episode in each season
      const updatedSeasonsChecked = {};
      seasons.forEach(season => {
        updatedSeasonsChecked[season.name] = season.episodes.reduce((acc, episode) => {
          acc[episode.id] = isMainChecked;
          return acc;
        }, {});
    
        // Update the checked property for the season
        updatedSeasonsChecked[season.name].checked = isMainChecked;
      });
    
      updateAnimeDropdownState('seasonsChecked', updatedSeasonsChecked);
    };
    
    const handleLNMainCheck = () => {
      const isLNMainChecked = !lnMainChecked;
      updateLNDropdownState('lnMainChecked', isLNMainChecked);
    
      // Update the seasonsChecked state for each episode in each season
      const updatedVolumesChecked = {};
      volumes.forEach(volume => {
        updatedVolumesChecked[volume.name] = volume.chapters.reduce((acc, chapter) => {
          acc[chapter.id] = isLNMainChecked;
          return acc;
        }, {});
    
        // Update the checked property for the season
        updatedVolumesChecked[volume.name].checked = isLNMainChecked;
      });
    
      updateLNDropdownState('volumesChecked', updatedVolumesChecked);
    };

    const handleMOGMainCheck = () => {
      setMogDropdownState(prevState => {
        const isMOGMainChecked = !prevState.mogMainChecked;
        const updatedPartsChecked = { ...prevState.partsChecked };
    
        // Update the checked state of all parts, sections, and episodes for 'Seven Shadows Chronicles'
        const storyType = 'Seven Shadows Chronicles';
        Object.keys(updatedPartsChecked[storyType]).forEach(part => {
          if (part !== 'checked') {
            updatedPartsChecked[storyType][part].checked = isMOGMainChecked;
            Object.keys(updatedPartsChecked[storyType][part]).forEach(section => {
              if (section !== 'checked') {
                updatedPartsChecked[storyType][part][section].checked = isMOGMainChecked;
                Object.keys(updatedPartsChecked[storyType][part][section]).forEach(episode => {
                  if (episode !== 'checked' && typeof updatedPartsChecked[storyType][part][section][episode] === 'boolean') {
                    updatedPartsChecked[storyType][part][section][episode] = isMOGMainChecked;
                  }
                });
              }
            });
          }
        });
    
        // Update the checked state of all parts and episodes for 'Event Stories'
        const eventType = 'Event Stories';
        Object.keys(updatedPartsChecked[eventType]).forEach(part => {
          if (part !== 'checked') {
            updatedPartsChecked[eventType][part].checked = isMOGMainChecked;
            Object.keys(updatedPartsChecked[eventType][part]).forEach(episode => {
              if (episode !== 'checked' && typeof updatedPartsChecked[eventType][part][episode] === 'boolean') {
                updatedPartsChecked[eventType][part][episode] = isMOGMainChecked;
              }
            });
          }
        });
    
        // Check if all parts are unchecked for both 'Seven Shadows Chronicles' and 'Event Stories'
        ['Seven Shadows Chronicles', 'Event Stories'].forEach(storyType => {
          const allPartsUnchecked = Object.values(updatedPartsChecked[storyType]).every(part => !part.checked);
    
          if (allPartsUnchecked) {
            // If all parts are unchecked, uncheck the storyType checkbox
            updatedPartsChecked[storyType].checked = false;
          } else {
            // If not all parts are unchecked, check the storyType checkbox
            updatedPartsChecked[storyType].checked = true;
          }
        });
    
        return {
          ...prevState,
          mogMainChecked: isMOGMainChecked,
          partsChecked: updatedPartsChecked
        };
      });
    };
    
    
    
    
    
    
    

    return (
      <div className="mediums-container">
      <h2 className="mediums-title">MEDIUMS</h2>
      <div className="checkbox-container">
          <LNDropdownMenu 
          lnDropdownState={lnDropdownState}
          updateLNDropdownState={updateLNDropdownState}
          volumes={volumes}
          openLN={openLN}
          setOpenLN={setOpenLN}
          volumeImages={images.lnCoverImages}
          />
          <input
          type="checkbox"
          checked={lnMainChecked}
          onChange={handleLNMainCheck}
          />
      </div>
      <div className="checkbox-container">
          <AnimeDropdownMenu 
          animeDropdownState={animeDropdownState}
          updateAnimeDropdownState={updateAnimeDropdownState}
          seasons={seasons}
          openAnime={openAnime}
          setOpenAnime={setOpenAnime}
          seasonImages={images.animeCoverImages}
          />
          <input
          type="checkbox"
          checked={mainChecked}
          onChange={handleMainCheck}
          />
      </div>
      <div className="checkbox-container">
        <MOGDropdownMenu 
            mogDropdownState={mogDropdownState}
            setMogDropdownState={setMogDropdownState}
            openMOG={openMOG}
            setOpenMOG={setOpenMOG}
        />
        <input
            type="checkbox"
            checked={mogMainChecked}
            onChange={handleMOGMainCheck}
        />
      </div>
      <FontAwesomeIcon
          icon={faRotateRight}
          className="reset-button"
          onClick={handleReset}
          title="Reset"
      />
  </div>
  );
}
    
export default MediumsContainer;